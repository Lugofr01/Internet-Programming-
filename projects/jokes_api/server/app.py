#!/usr/bin/env python3
"""
jokes api
"""
import json
import pyjokes
from flask import Flask, jsonify, Response
from flask_cors import CORS,cross_origin

import random


app = Flask(__name__)

CORS(app)

jokelist = []

#not sure on how to structure this 
@app.route("/api/v1/jokes")

@cross_origin()
def push_joke():
    return jsonify(anyjoke = pyjokes.get_jokes(language="en", category="all"))




#not sure on how to structure this 
@app.route("/api/v1/jokes/<int:joke_id>",methods = ["GET"])
@cross_origin()

def supply_specific_joke(joke_id:int):
    global jokelist
    print(len(jokelist))

    if not jokelist:
        jokelist = pyjokes.get_jokes(language="en",category="all")
    if joke_id < len(jokelist):
        return jsonify(specific_joke= jokelist[joke_id])

    return jsonify(specific_joke = jokelist[joke_id%len(jokelist)])


  


if __name__ == "__main__":
    
    app.run





