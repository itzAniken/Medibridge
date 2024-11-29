from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock data
surgery_data = {
    "Knee Replacement": {"USA": 35000, "India": 6500, "Mexico": 12000, "Thailand": 10000},
    "Heart Bypass Surgery": {"USA": 120000, "India": 7000, "Mexico": 20000, "Thailand": 15000},
    "Rhinoplasty": {"USA": 10000, "India": 2500, "Mexico": 3500, "Thailand": 3000},
}

@app.route('/api/surgery-comparison', methods=['GET'])
def compare_surgeries():
    country1 = request.args.get('country1')
    country2 = request.args.get('country2')
    surgery_type = request.args.get('surgery')

    if not (country1 and country2 and surgery_type):
        return jsonify({"error": "Missing parameters"}), 400

    if surgery_type not in surgery_data:
        return jsonify({"error": "Surgery not found"}), 404

    data = surgery_data[surgery_type]
    response = {
        "surgery": surgery_type,
        "comparison": {
            country1: data.get(country1, "Not Available"),
            country2: data.get(country2, "Not Available")
        }
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
