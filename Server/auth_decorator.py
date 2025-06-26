from functools import wraps
from flask import request, jsonify
from firebase_manager import auth


def require_auth(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            id_token = None
            auth_header = request.headers.get("Authorization", "")
            if auth_header.startswith("Bearer "):
                id_token = auth_header.split("Bearer ")[1]
            else:
                data = request.get_json(silent=True)
                if data:
                    id_token = data.get("idToken")

            if not id_token:
                return jsonify({"error": "Missing ID token"}), 401
            decoded_token = auth.verify_id_token(id_token)
            request.uid = decoded_token["uid"]
            return f(*args, **kwargs)
        except Exception as e:
            return jsonify({"error": f"Unauthorized: {str(e)}"}), 401
    return decorated_function
