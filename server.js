const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const db = require("./db/database");
require("console.table");

function mainMenu() {
     inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'Slack', 'smoke signal']
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
    }
  // shows user different options they can choose from
  // i.e. inquirer code
}

function viewDepartments() {
  // write js to interact with database
  // around 10 lines of code
  db.findAllDepartments().then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => loadMainPrompts());
}

function viewRoles() {}

function viewEmployees() {}

function addDepartment() {}

function addRole() {}

function addEmployee() {}

function updateEmployeeRole() {}

function quit() {}

mainMenu();


