import base64
from flask import Flask, request, jsonify
from firebase_manager import firestore, db, auth
from data_models import *

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


@app.route('/signUp', methods=['POST'])
def sign_up():
    try:
        data = request.get_json()
        user_obj = User(
            email=data['email'],
            password=data['password'],
            display_name=data.get('display_name'),
            uid=data.get('uid'),
            code_reviews=[]
        )
        user_doc = {
            'email': user_obj.email,
            'display_name': user_obj.display_name,
            'code_reviews': []
        }
        db.collection('users').document(user_obj.uid).set(user_doc)
        return jsonify({"user": user_obj}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/signIn', methods=['GET', 'POST'])
def sign_in():
    try:
        id_token = request.args.get("IDToken")
        if not id_token:
            return jsonify({"error": "ID token not provided."}), 400
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token["uid"]
        user_doc = db.collection("users").document(uid).get()
        if not user_doc.exists:
            return jsonify({"user": None}), 404
        return jsonify({"user": user_doc.to_dict()}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route('/codeReview', methods=['POST'])
def add_code_review():
    try:
        data = request.get_json()
        id_token = data.get('idToken')
        review_data = data.get('codeReview')
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token['uid']
        review_data['upload_date'] = datetime.now().isoformat()
        user_ref = db.collection('users').document(uid)
        user_ref.update({
            'code_reviews': firestore.ArrayUnion([review_data])
        })
        return jsonify({'message': 'Code review added successfully.'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/codeReview', methods=['PUT'])
def update_code_review():
    try:
        review_id = request.args.get('id')
        if review_id is None:
            return jsonify({'error': 'Missing query parameter: id'}), 400
        user_id = request.args.get('uid')
        if user_id is None:
            return jsonify({'error': 'Missing query parameter: uid'}), 400
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
        user_ref = db.collection('users').document(user_id)
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
def delete_code_review():
    try:
        review_id = request.args.get('id')
        if review_id is None:
            return jsonify({'error': 'Missing query parameter: id'}), 400
        user_id = request.args.get('uid')
        if user_id is None:
            return jsonify({'error': 'Missing query parameter: uid'}), 400
        user_ref = db.collection('users').document(user_id)
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
