# Node.js CRUD MVC Project

This is a simple **CRUD application** built with **Node.js**, **Express**, **MySQL**, and **EJS**, following the **MVC pattern**.

## Features
- Create, Read, Update, Delete users
- MySQL database integration
- MVC folder structure
- Express-EJS-Layouts for views

## Prerequisites
- Node.js (v14+ recommended)
- MySQL

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Deepakkumar9719/node-js-crud-with-mysql.git
cd node-js-crud-with-mysql


## Create user table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20)
);

# Install dependencies:
npm install

# Create a .env file in the root:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=node_crud
PORT=3000
