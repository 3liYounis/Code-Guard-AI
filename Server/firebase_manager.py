import firebase_admin
import firebase_admin.auth
from firebase_admin import credentials, firestore

cred = credentials.Certificate("./serviceAccountKey.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()
auth = firebase_admin.auth
