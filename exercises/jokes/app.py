#!/usr/bin/env python3
"""Flask application to use pyjokes"""

import random
from typing import List

import pyjokes
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    return render_template("base.html")


@app.route("/", methods=["POST"])
def index_jokes():
    if  "language"in request.form and "category" in request.form:
        return render_template("base.html", result = send_joke(language=request.form.get("language"), category=request.form.get("category")))
    else :
        raise "No data to process"



def send_joke(
    language: str = "en", category: str = "all", number: int = 1
) -> List[str]:
  
        for index in range(int(number)):
            power = [pyjokes.get_jokes(language, category)[index]]
        return power
    



#sources 