#!/usr/bin/env python3
"""
jokes api
"""
import json
import pyjokes
from flask import Flask, jsonify, Response
import random

app = Flask(__name__)

jokelist = []

@app.route("/api/v1/jokes/<language>/<category>/<int:number>")
def push_joke(language,category,number):
    anyjoke = pyjokes.get_jokes(language=language, category=category)
    p = {}
    y ={}
    for x in range(len(anyjoke)):
        y[x]=anyjoke[x]
    for z in range(number):
        p[z]=y[z]
    sortedJokes = jsonify(p)
    return sortedJokes

@app.route("/api/v1/jokes/<language>/<category>/<int:number>/<int:joke_id>")
def supply_specific_joke(language,category,number,joke_id):
    jokelist = pyjokes.get_jokes(language=language,category=category)
    return jsonify(jokelist[joke_id])
    
if __name__ == "__main__":
    app.run()





