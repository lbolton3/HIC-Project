from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

# Change this to your secret key (can be anything, it's for extra protection)
#app.secret_key = 'your secret key'

# Enter your database connection details below
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Hithere11!'
app.config['MYSQL_DB'] = 'edodge5'

# Intialize MySQL
mysql = MySQL(app)

cors = CORS(app, resources={r"*": {"origins": "*", "methods": ["GET", "POST"]}})

# http://localhost:5000/pythonlogin/ - the following will be our login page, which will use both GET and POST requests
@app.route('/inventory')
def get_items():
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT Model,Price,Photo FROM cars join photos on Cars.Car_ID = Photos.Car_ID')
    items = cursor.fetchall()
    cursor.close()
    items_data = [{'name': item[0], 'price': item[1], 'imageUrl': item[2] } for item in items]
    #items_data = ({'name' : item[4], 'price': item[1]}for item in items)

    return jsonify(items_data)
    
@app.route('/login')
def login():
    # depending on your use case, it might be `request.form`.
    request_data = request.get_json()
    
    # checks if user exists in db 
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT email from Customers where email = %s'[request_data])
    items = cursor.fetchall()
    cursor.close()
    myEmail = {'email': items[0]}
    return jsonify(detail="Login successful"), 200

@app.route('/account')
def account():
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * from Customer where Account_Number = "0000000001" ')
    items = cursor.fetchall()
    cursor.close()
    item = items[0]
    items_data = {'account_number': item[0] , 'first_name': item[1], 'last_name': item[2], 'street_name':item[3], 'street_number':item[4], 'city':item[5], 'state':item[6], 'zip':item[7], 'email':item[8] } 
    return jsonify(items_data)
app.run(host='localhost', port=5000)

