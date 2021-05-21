const connection = require("./connection");
class db {
  constructor(connection) {
    this.connection = connection;
  }
  findAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }
  viewAllRoles() {
    return this.connection.promise().query("SELECT * from roles");
  }

  viewAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT department.id,department.department_name,department.id  FROM department"
      );
  }

  addAllDepartment() {
    return this.connection
      .promise()
      .query("SELECT department.id,department.department_name FROM department");
  }
  addAllRoles() {
    return this.connection.promise().query("SELECT * from roles");
  }
  addAllEmployees() {
    return this.connection.promise().query("SELECT * from employee");
  }
  updateEmployeeRoles() {
    return this.connection.promise().query("SELECT * from employeeRoles");
  }
  quit() {
    return this.connection.promise().query("SELECT * from departments");
  }
}

module.exports = new db(connection);
