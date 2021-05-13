const mysql = require("mysql2");

//connecting app to local database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password!", // might need to change this
  database: "employeeManager_db",
});

// establishing connection
connection.connect(function (error) {
  if (error) throw error;
});

module.exports = connection;
