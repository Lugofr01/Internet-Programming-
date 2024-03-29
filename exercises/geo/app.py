import requests
from flask import Flask, request, render_template, send_from_directory
from flask import redirect, url_for
import records
import pandas as pd

app = Flask(__name__)

THE_WORLD =[]
THE_WORLD1 = []
THE_WORLD2 = []
CACHE = {}


def get_data_from_db(host: str, port: int, user: str, dbname: str, query: str) -> list:


    """retrieve data from the database and return to the user"""

    db = records.Database(f"postgresql://{user}:@{host}:{port}/{dbname}")
    rows = db.query(query)
    return rows

@app.route("/", methods=["GET", "POST"])
def index():
    global CACHE

    if request.method == "GET":
            return render_template("index.html")

    if request.form.get("country"):
        country = request.form.get("country")
        if country in CACHE:
            result = CACHE[country]
        else:
            result = get_data_from_db(
                host="localhost",
                port=2345,
                user="lugofr01",
                dbname="world",
                query=f"select * from country where code = '{country}';",
            )
            CACHE[country] = result
        return render_template("result.html", rows=result)

    if request.form.get("region"):
        region = request.form.get("region")
        if region in CACHE:
            result = CACHE[region]
        else:
            result = get_data_from_db(
                host="localhost",
                port=2345,
                user="lugofr01",
                dbname="world",
                query=f"select * from country where region = '{region}';",
            )
            CACHE[region] = result
        return render_template("result.html", rows=result)

    if request.form.get("continent"):
        continent = request.form.get("continent")
        if continent in CACHE:
            result = CACHE[continent]
        else:
            result = get_data_from_db(
                host="localhost",
                port=2345,
                user="lugofr01",
                dbname="world",
                query=f"select * from country where continent = '{continent}';",
            )
            CACHE[continent] = result
        return render_template("result.html", rows=result)
    

@app.route("/<string:scope>", methods=["GET"])
def search(scope: str):

    global THE_WORLD
    global THE_WORLD1
    global THE_WORLD2


    if scope == "country":
        # get countries from the database and populate options of the drop-down menu
        if not THE_WORLD:
            THE_WORLD = get_data_from_db(
                host="localhost",
                port ="2345",
                user= "lugofr01",
                dbname="world",
                query="select code, name from country"

            )
        return render_template("country.html",options = THE_WORLD)

    if scope == "region":
        # get regions from the database and populate options of the drop-down menu
        if not THE_WORLD1:
            THE_WORLD1 = get_data_from_db(
                host="localhost",
                port ="2345",
                user= "lugofr01",
                dbname="world",
                query="select distinct region from country"

            )
        return render_template("region.html",options = THE_WORLD1)

        
    if scope == "continent":
        # get continents from the database and populate options of the drop-down menu
        if not THE_WORLD2:
            THE_WORLD2 = get_data_from_db(
                host="localhost",
                port ="2345",
                user= "lugofr01",
                dbname="world",
                query="select distinct continent from country"
            )
        return render_template("continent.html",options = THE_WORLD2)

        