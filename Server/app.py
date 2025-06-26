import base64
from datetime import datetime
from flask import Flask, request, jsonify
from firebase_manager import firestore, db
from data_models import *
from auth_decorator import require_auth
app = Flask(__name__)


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
        data = request.get_json()
        review_data = data.get('codeReview')
        review_data['upload_date'] = datetime.now().isoformat()
        user_ref = db.collection('users').document(request.uid)
        user_ref.update({
            'code_reviews': firestore.ArrayUnion([review_data])
        })
        return jsonify({'message': 'Code review added successfully.'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/codeReview', methods=['PUT'])
@require_auth
def update_code_review():
    try:
        review_id = request.args.get('id')
        if review_id is None:
            return jsonify({'error': 'Missing query parameter: id'}), 400
        data = request.get_json()
        updated_review = {
            'id': int(review_id),
            'name': data['name'],
            'file_content': data['file_content'],
            'programming_language': data['programming_language'],
            'security': data['security'],
            'cleanliness': data['cleanliness'],
            'maintainability': data['maintainability'],
            'recommendations': data.get('recommendations', []),
            'upload_date': data['upload_date'],
        }
        user_ref = db.collection('users').document(request.uid)
        user_doc = user_ref.get()
        if not user_doc.exists:
            return jsonify({'error': 'User not found'}), 404
        reviews = user_doc.to_dict().get('code_reviews', [])
        updated_reviews = [updated_review if str(
            r['id']) == review_id else r for r in reviews]
        user_ref.update({'code_reviews': updated_reviews})
        return jsonify({'message': f'Review with id {review_id} updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/codeReview', methods=['DELETE'])
@require_auth
def delete_code_review():
    try:
        review_id = request.args.get('id')
        if review_id is None:
            return jsonify({'error': 'Missing query parameter: id'}), 400
        user_ref = db.collection('users').document(request.uid)
        user_doc = user_ref.get()
        if not user_doc.exists:
            return jsonify({'error': 'User not found'}), 404
        reviews = user_doc.to_dict().get('code_reviews', [])
        updated_reviews = [r for r in reviews if str(r['id']) != review_id]
        user_ref.update({'code_reviews': updated_reviews})
        return jsonify({'message': f'Review with id {review_id} deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
