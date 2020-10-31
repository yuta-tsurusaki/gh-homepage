from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)

def parse(text):
	textList = list(text)
	outputText = ""
	for c in textList:
		outputText += c + "w"
	return outputText	

@app.route('/')
def health():
    return 'OK'

@app.route('/api/kusa', methods=['POST'])
def parseText():
	inputText = request.json['text']
	outputText = parse(inputText)
	return jsonify({"kusaText": outputText})
