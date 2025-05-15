# 📚 Student CRUD API (Express.js)

A simple Express.js application that performs CRUD operations (Create, Read, Update, Delete) on a mock student database using an in-memory array.
This project is one of the requirement for completing my 3mtt software development course.

## 🚀 Features

Create a new student

Retrieve all students

Retrieve a single student by ID

Update a student’s information

Delete a student from the list

## 🛠 Tech Stack

Node.js

Express.js

## 📁 Project Structure

````bash
REST-API-EXPRESS/
├── server.js                          # Entry point of the app
├── routes/
│   └── students.js                  # Route handlers for CRUD operations
├── controllers/
│   └── studentController.js        # Logic for each CRUD operation
├── middleware/
│   └── studentValidation.js        # Middleware for validating student input
└── README.md                       # Project documentation

```
 ## 📦 Installation
1. Clone the repository

```bash
git clone https://github.com/benmarcel/REST-API-EXPRESS.git
cd student-crud-api
```
2. Install dependencies

```bash
npm install
Run the server
```
3. Run the server
``` bash
node app.js
```
## 🧪 API Endpoints

Base URL: http://localhost:5000

### ➕ Create a student
POST /students

Body:

```json
{
      "first_name": "Nathan",
      "last_name": "Taylor",
      "age": 18,
      "gender": "Male",
      "email": "nathan.taylor3@example.com",
      "department": "Education",
      "level": "400"
    }

```
### 📄 Get all students
GET /students

### 🔍 Get a student by ID
GET /students/:id

### ✏️ Update a student by ID
PUT /students/:id

Body:

```json
{
    "first_name": "Micheal",
    "last_name": "Jordan",
    "age": 28,
}
```
## ❌ Delete a student by ID
DELETE /students/:id

## 🧠 Mock Database
The app uses a simple array as a temporary in-memory data store:

const student = [];

