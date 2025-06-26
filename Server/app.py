import base64
from datetime import datetime
from flask import Flask, request, jsonify
from firebase_manager import firestore, db
from data_models import *
from auth_decorator import require_auth
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:5173",
     supports_credentials=True,
     allow_headers=["Content-Type", "Authorization"],
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])


def parse_suggestions(suggestions_data):
    return [Suggestion(**s) for s in suggestions_data]


def parse_code_reviews(reviews_data):
    reviews = []
    for r in reviews_data:
        recommendations = parse_suggestions(r.get('recommendations', []))
        upload_date = datetime.fromisoformat(r['upload_date'])
        review = CodeReview(
            id=r['id'],
            name=r['name'],
            file_content=base64.b64decode(r['file_content']).decode('utf-8'),
            programming_language=r['programming_language'],
            security=r['security'],
            cleanliness=r['cleanliness'],
            maintainability=r['maintainability'],
            recommendations=recommendations,
            upload_date=upload_date
        )
        reviews.append(review)
    return reviews


@app.route('/codeReview', methods=['POST'])
@require_auth
def add_code_review():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file provided'}), 400
        file = request.files['file']
        file_content = base64.b64encode(file.read()).decode('utf-8')
        review = {
            'id': int(datetime.now().timestamp() * 1000),
            'name': file.filename,
            'file_content': file_content,
            'programming_language': infer_language(file.filename),
            'security': 0,
            'cleanliness': 0,
            'maintainability': 0,
            'recommendations': [],
            'upload_date': int(datetime.now().timestamp() * 1000)
        }
        user_ref = db.collection('users').document(request.uid)
        user_ref.update({
            'code_reviews': firestore.ArrayUnion([review])
        })
        print(review['name'])
        return jsonify(review), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/codeReview', methods=['PUT'])
@require_auth
def update_code_review():
    try:
        review_id = request.args.get('id')
        if not review_id:
            return jsonify({'error': 'Missing query parameter: id'}), 400
        if 'file' not in request.files:
            return jsonify({'error': 'No file provided'}), 400
        file = request.files['file']
        file_content = base64.b64encode(file.read()).decode('utf-8')
        updated_review = {
            'id': int(review_id),
            'name': file.filename,
            'file_content': file_content,
            'programming_language': infer_language(file.filename),
            'security': 0,
            'cleanliness': 0,
            'maintainability': 0,
            'recommendations': [],
            'upload_date': int(datetime.now().timestamp() * 1000)
        }
        user_ref = db.collection('users').document(request.uid)
        user_doc = user_ref.get()
        if not user_doc.exists:
            return jsonify({'error': 'User not found'}), 404
        reviews = user_doc.to_dict().get('code_reviews', [])
        updated_reviews = [
            updated_review if str(r['id']) == review_id else r for r in reviews
        ]
        user_ref.update({'code_reviews': updated_reviews})
        print(updated_review['name'])
        return jsonify(updated_review), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/codeReview', methods=['DELETE'])
@require_auth
def delete_code_review():
    try:
        review_id = request.args.get('id')
        if not review_id:
            return jsonify({'error': 'Missing query parameter: id'}), 400
        user_ref = db.collection('users').document(request.uid)
        user_doc = user_ref.get()
        if not user_doc.exists:
            return jsonify({'error': 'User not found'}), 404
        reviews = user_doc.to_dict().get('code_reviews', [])
        updated_reviews = [r for r in reviews if str(r['id']) != review_id]
        user_ref.update({'code_reviews': updated_reviews})
        print(updated_reviews)
        return jsonify({'message': f'Review with id {review_id} deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


def infer_language(filename: str) -> str:
    extension_map = {
        ".py": "Python",
        ".js": "JavaScript",
        ".ts": "TypeScript",
        ".java": "Java",
        ".cs": "C#",
        ".cpp": "C++",
        ".rb": "Ruby",
        ".vue": "Vue",
        ".kt": "Kotlin",
        ".c": "C"
    }
    for ext, lang in extension_map.items():
        if filename.endswith(ext):
            return lang
    return "other"


if __name__ == '__main__':
    app.run(debug=True)
