from flask import Flask
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
data = pd.read_csv("processedData.csv")


@app.route("/")
def home():
    return "Hello, World!"


@app.route("/predict/<condition>", methods=["POST", "GET"])
def predict(condition):
    prediction = data[data['condition'] == condition][[
        'drugName', 'usefulness'
    ]].sort_values(by='usefulness',
                   ascending=False).head().reset_index(drop=True).to_dict()
    return ({'drugs': prediction})


if __name__ == "__main__":
    app.run(debug=True)