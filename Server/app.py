from flask import Flask
from flask import jsonify

app = Flask(__name__)


@app.route("/")
def home():
    return {"message": "Hello, Flask!"}


if __name__ == "__main__":
    app.run(debug=True)
