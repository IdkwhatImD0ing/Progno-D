from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello, World!"


@app.route("/predict/<condition>", methods=["POST"])
def predict():
    return "Prediction"


if __name__ == "__main__":
    app.run(debug=True)