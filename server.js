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
  inquirer.then((answers) => console.log(answers));
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
    .then(() => loadMainPrompts());
}

function viewRoles() {
  db.viewAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => loadMainPrompts());
}

function viewEmployees() {
  db.viewAllEmployees()
    .then(([rows]) => {
      let employee = rows;
      console.log("\n");
      console.table(employee);
    })
    .then(() => loadMainPrompts());
}

function addDepartment() {
  db.addAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => loadMainPrompts());
}

function addRole() {
  db.addAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => loadMainPrompts());
}

function addEmployee() {
  db.addAllEmployees()
    .then(([rows]) => {
      let employee = rows;
      console.log("\n");
      console.table(employee);
    })
    .then(() => loadMainPrompts());
}

function updateEmployeeRole() {
  db.updateEmployeeRoles()
    .then(([rows]) => {
      let employee.roles = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => loadMainPrompts());
}

function quit() {
  db.quit()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => loadMainPrompts());
}

mainMenu();
