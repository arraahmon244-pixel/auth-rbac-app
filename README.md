# auth-rbac-app
# Authentication & Authorization System

## Description
This project implements a secure authentication and authorization system using Node.js, Express, MongoDB, and JWT.

##  Features
- User Registration
- User Login (JWT Authentication)
- Protected Routes
- Role-Based Access Control (Admin/User)

##  Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT

##  API Endpoints

### Register
POST /api/register

### Login
POST /api/login

### Dashboard (Protected)
GET /api/dashboard

### Admin Route
GET /api/admin

##  Testing
Tested using Postman.

## 🔐 Security Implementation

- Password hashing using bcrypt
- JWT Authentication
- Role-Based Access Control (RBAC)
- Middleware protection for routes

## ⚙️ How to Run

1. Install dependencies:
   npm install

2. Create .env file:
   MONGO_URI=your_mongo_uri_here
   JWT_SECRET=your_secret_here

3. Start server:
   node server.js

##  Concept

Authentication = Who you are  
Authorization = What you can access


##  Author
ABDURRAHMON IDRIS# 
