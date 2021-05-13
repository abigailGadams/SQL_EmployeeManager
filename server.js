const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const db = require("./db/database");
require("console.table");

const mainMenu = () => {
  return inquirer.prompt([
    {
      type: "list",
      message:
        "Welcome to EmployeeManager, please select from the following menu:",
      name: "choices",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee",
      ],
    },
  ]);
};

// shows user different options they can choose from
// i.e. inquirer code

function viewDepartments() {
  // write js to interact with database
  // around 10 lines of code
  db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => mainMenu());
}

function viewRoles() {
  db.viewAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => mainMenu());
}

function viewEmployees() {
  db.viewAllEmployees()
    .then(([rows]) => {
      let employee = rows;
      console.log("\n");
      console.table(employee);
    })
    .then(() => mainMenu());
}

function addDepartment() {
  db.addAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => mainMenu());
}

function addRole() {
  db.addAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => mainMenu());
}

function addEmployee() {
  db.addAllEmployees()
    .then(([rows]) => {
      let employee = rows;
      console.log("\n");
      console.table(employee);
    })
    .then(() => mainMenu());
}

function updateEmployeeRole() {
  db.updateEmployeeRoles()
    .then(([rows]) => {
      let employeeRoles = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => mainMenu());
}

function quit() {
  db.quit()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => mainMenu());
}

mainMenu().then((answer) => {
  switch (answer.choices) {
    case "View all departments":
      viewDepartments();
      break;
    case "View all roles":
      viewRoles();
      break;
    case "View all employees":
      viewEmployees();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update an employee":
      updateEmployeeRole();
      break;
  }
});
