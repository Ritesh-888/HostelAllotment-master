from app import app
from flask import jsonify,request
from werkzeug.security import generate_password_hash, check_password_hash 
from pymongo import MongoClient
from hms import get_db

@app.route('/')
def hello_world():
    return jsonify(message='Hello from Flask!')



# Example route to retrieve data from MongoDB
@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        db = get_db()
        collection = db['hmp']  # Replace with your collection name

        # Query the collection to get data
        data = list(collection.find({}))

        # Convert ObjectId to string representation in JSON response
        for item in data:
            item['_id'] = str(item['_id'])

        return jsonify({'data': data})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/signup', methods=['POST'])
def signup():
    try:
        db = get_db()
        collection = db['hmp']  # Replace 'users' with your collection name

        # Get signup data from request
        signup_data = request.json
        print("signup_data",signup_data)
        # Insert the signup data into the MongoDB collection
         
        inserted_data = collection.insert_one(signup_data)
         
        return jsonify({'message': 'Signup successful', 'inserted_id': str(inserted_data.inserted_id)})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/login', methods=['POST'])
def login():
    try:
        db = get_db()
        collection = db['hmp']
         
        login_data = request.json
        print("loginData",login_data)
        email = login_data.get('email')
        password = login_data.get('password')
         
        user = collection.find_one({'email': email})
        print("cph",check_password_hash(user['password'] ,  password))
        
        if user and check_password_hash(user['password'],  password):
            return jsonify({'message': 'Login successful'})
        else:
            return jsonify({'error': 'Invalid credentials'}), 401

    except Exception as e:
        print(f"Error in login(): {str(e)}")
        return jsonify({'error': str(e)}), 500