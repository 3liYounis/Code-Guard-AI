from flask import Flask, request, jsonify
from Analyzer import analyze_code
from firebase_manager import firestore, db
from data_models import *
from auth_decorator import require_auth
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:5173",
     supports_credentials=True,
     allow_headers=["Content-Type", "Authorization"],
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])


@app.route('/codeReview', methods=['GET'])
@require_auth
def get_code_reviews():
    try:
        user_ref = db.collection('users').document(request.uid)
        user_doc = user_ref.get()
        if not user_doc.exists:
            return jsonify({'error': 'User not found'}), 404
        reviews = user_doc.to_dict().get('code_reviews', [])
        return jsonify(reviews), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/codeReview', methods=['POST'])
@require_auth
def add_code_review():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file provided'}), 400
        file = request.files['file']
        review = analyze_code(file)
        # review = {
        #     'id': int(datetime.now().timestamp() * 1000),
        #     'name': format_file_name(file.filename),
        #     'file_content': file_content,
        #     'programming_language': infer_language(file.filename),
        #     'security': random.randint(20, 101),
        #     'cleanliness': random.randint(20, 101),
        #     'maintainability': random.randint(20, 101),
        #     'recommendations': [
        #         create_suggestion(1, "Security",
        #                           "new recommendation"),
        #         create_suggestion(
        #             2, "Maintainability", "new recommendation"),
        #         create_suggestion(3, "Cleanliness",
        #                           "new recommendation")
        #     ],            'upload_date': int(datetime.now().timestamp() * 1000)
        # }
        print(review)
        user_ref = db.collection('users').document(request.uid)
        user_ref.update({
            'code_reviews': firestore.ArrayUnion([review.to_dict()])
        })
        return jsonify(review), 201
    except Exception as e:
        print(f"Error occurred: {e}")
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
        updated_review = analyze_code(file)
        print(updated_review)
        # updated_review = {
        #     'id': int(review_id),
        #     'name': format_file_name(file.filename),
        #     'file_content': file_content,
        #     'programming_language': infer_language(file.filename),
        #     'security': random.randint(20, 101),
        #     'cleanliness': random.randint(20, 101),
        #     'maintainability': random.randint(20, 101),
        #     'recommendations': [
        #         create_suggestion(1, "Security",
        #                           "updated recommendation"),
        #         create_suggestion(2, "Maintainability",
        #                           "updated recommendation"),
        #         create_suggestion(3, "Cleanliness",
        #                           "updated recommendation")
        #     ],
        #     'upload_date': int(datetime.now().timestamp() * 1000)
        # }
        user_ref = db.collection('users').document(request.uid)
        user_doc = user_ref.get()
        if not user_doc.exists:
            return jsonify({'error': 'User not found'}), 404
        reviews = user_doc.to_dict().get('code_reviews', [])
        updated_reviews = [
            updated_review.to_dict() if str(r['id']) == review_id else r for r in reviews
        ]
        user_ref.update({'code_reviews': updated_reviews})
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
        return jsonify({'message': f'Review with id {review_id} deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
