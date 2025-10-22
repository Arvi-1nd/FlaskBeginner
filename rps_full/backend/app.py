from flask import Flask, jsonify, request
from flask_cors import CORS

import random

app = Flask(__name__)
CORS(app)

emoji_map = {
    'rock': '🤘🏾',
    'paper': '📄',
    'scissor': '✂'
}
choices = ['rock', 'paper', 'scissor']


@app.route('/play',methods = ['POST'])
def play():
    data = request.get_json()
    user_choice = data.get("choice")
    computer_choice = random.choice(choices)
    
    if user_choice not in choices:
        return jsonify({"Error":"Invalid choice"}), 400
    
    result = ""
    
    if user_choice == computer_choice:
        result = "Tie1"
    elif (user_choice == 'rock' and computer_choice == 'scissor' or
          user_choice == 'paper' and computer_choice == 'rock' or
          user_choice == 'scissor' and computer_choice == 'rock'):
        result = "You won!"
    else:
        result ="Computer won"
        
    return jsonify({
        "user_choice":user_choice,
        "computer_choice":computer_choice,
        "user_emoji":emoji_map[user_choice],
        "computer_emoji":emoji_map[computer_choice],
        "result":result})
    
    
if __name__ == "__main__":
    app.run(debug=True)