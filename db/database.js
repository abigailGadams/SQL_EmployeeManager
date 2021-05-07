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
}

module.exports = new db(connection);
