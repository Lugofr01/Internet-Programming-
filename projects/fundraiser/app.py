

# from datetime import datetime
# from config import app, db, mm
# from models import Client
# from flask import Flask, request, render_template, url_for, redirect


# app = Flask(__name__)

# @app.route('/buyer',methods = ['GET','POST'])

# def buyer():
    
#     if request.method == 'POST':
#             merchantname = request.form.get["Merchant"]
#             denom = request.form.get["AWSdenom"]

#             pur = request.form.get['name']
#             date = request.form.get['trip-start']
#             date=datetime.strptime(date, '%d-%m-%Y').date()

#             AWSdenom = request.form.get['AWSdenom']
#             AWSqty = request.form.get['AWSqt']
#             AWSamount = request.form.get['tot_amount']
#             donation=Client(merchant="A&W/LIS", date=date, name=name, denom=awInput, qty=awQty, amount=awAmount, donateTo=donateTo1)
#             db.session.add(donation)
#             db.session.commit()

#             Acedenom = request.form.get['Acedenom']
#             Aceqty =  request.form.get['Aceqty']
#             Aceamount = request.form.get['tot_amount1']

#             Caseydenom = request.form.get['Caseydenom']
#             Caseyqty =   request.form.get['Caseyqty']
#             Caseyamount = request.form.get['tot_amount2']


#             Farewaydenom = request.form.get['Farewaydenom']
#             Farewayqty = request.form.get['Farewayqty']
#             Farewayamount = request.form.get['tot_amount3']


#             Fiskdenom = request.form.get['Fiskdenom']
#             Fiskqty  = request.form.get['Fiskqty']
#             Fiskamount = request.form.get['tot_amount4']


#             Dollardenom = request.form.get['Dollardenom']
#             Dollarqty = request.form.get['Dollarqty']
#             Dollarname = request.form.get['tot_amount5']


#             Kwikdenom = request.form.get['KWIKdenom']
#             KWIKqty = request.form.get['KWIKqty']
#             KWIKamount = request.form.get['tot_amount6']


#             Pintersdenom = request.form.get['Pintersdenom']
#             Pintersqty = request.form.get['Pintersqty']
#             Pintersamount = request.form.get['tot_amount7']


#             Caseydenom1 = request.form.get['Caseydenom1']
#             Caseyqty1 =   request.form.get['Caseyqty1']
#             Caseyamount1 = request.form.get['tot_amount8']


#             Subwaydenom = request.form.get['Subwaydenom']
#             Subwayqty = request.form.get['Subwayqty']
#             Subwayamount = request.form.get['tot_amount9']


#             Suedenom = request.form.get['Suedenom']
#             Sueqty= request.form.get['Sueqty']
#             Sueamount = request.form.get['tot_amount10']


#             Atomicdenom = request.form.get['Atomicdenom']
#             Atomicqty = request.form.get['Atomicqty']
#             Atomicamount = request.form.get['tot_amount10']

#             totaqty = request.form.get['jojo']
#             totalamount = request.form.get['tot_due']
#             Discretion = request.form.get['dis']

#             creditfor = request.form.get['tuit1']






            

#     return render_template("buyer.html")




# # @app.route('/result',methods = ['POST', 'GET'])

# # def base:
# #     if request.method == 'POST':
# #       result = request.form
# #       return render_template("base.html",result = result)







import requests
from flask import Flask, jsonify, render_template
from flask import Flask, render_template, request
import sqlite3 as sql
app = Flask(__name__)



import sqlite3

conn = sqlite3.connect('/home/lugofr01/lugofr01/projects/fundraiser/database.db')
print ("Opened database successfully");
conn.execute('CREATE TABLE Records (buyer TEXT, date TEXT, totalCards INT, totalDue INT, discretion INT)')
print ("Table created successfully");
conn.close()


@app.route("/")
def index():
    return render_template("buyer.html")

@app.route("/admin")
def admin():
    dbsession = sql.connect('/home/lugofr01/lugofr01/projects/fundraiser/database.db')        
    dbsession.row_factory = sql.Row
    dbexecute = dbsession.cursor()
    dbexecute.execute("select * from PurchaseRecords")
    rowData = dbexecute.fetchall();
    return render_template("results.html", rowData=rowData)   
    frank.close()

@app.route("/info", methods=['POST', 'GET'])
def info():
    if request.method == 'POST' :
        pur = request.form.get('fname')
        date = request.form.get('trip-start')
        totaqty = request.form.get('jojo')
        totalamount = request.form.get('tot_due')
        Discretion = request.form.get('dis')
                
        with sql.connect('/home/lugofr01/lugofr01/projects/fundraiser/database.db') as frank:
            conn = frank.cursor()
            conn.execute("INSERT INTO PurchaseRecords (buyer,date,totalCards,totalDue,discretion) VALUES (?,?,?,?,?)",(pur,date,totaqty,totalamount,Discretion))
            frank.commit()
            
    info = "Purchase Complete"

    return render_template("msg.html", info=info)
    frank.close()

    
   

if __name__ == "__main__":
    app.run()
    
    

 
