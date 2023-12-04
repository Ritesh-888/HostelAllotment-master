from flask import Flask,jsonify
from pymongo import MongoClient
from flask_cors import CORS  # Import CORS from flask_cors
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
 
MONGO_URI = 'mongodb://localhost:27017/'  # Replace this with your MongoDB connection URI
DB_NAME = 'hmp'  
 
# Function to connect to MongoDB
def get_db():
    client = MongoClient(MONGO_URI)
    return client[DB_NAME]




from hms import routes

