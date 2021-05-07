DROP DATABASE IF EXISTS employeeManager_db;
    CREATE DATABASE employeeManager_db;
    USE employeeManager_db;

CREATE TABLE Department(
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
);

CREATE TABLE Roles(
  id INTEGER PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(5,2),
  department_id INT 
);

CREATE TABLE Employee(
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT 
);