const connection = require("./connection");
class db {
  constructor(connection) {
    this.connection = connection;
  }
  findAllDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id,department.department_name FROM department");
  }
  viewAllRoles() {
    return this.connection.promise().query("SELECT * from roles");
  }

  viewAllRoles() {
    return this.connection.promise().query("SELECT * from roles");
  }
}

module.exports = new db(connection);
