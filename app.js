const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./db/connection');
const { addEmployee, addDepartment, viewEmployees, addRole, viewRoles, viewDepartments, updateEmployee } = require('./db/orm');
let deptArr = [];
let roleArr = [];
let emplArr = [];
let managerArr = [];



///use inquirer
////ask a question about what the person wants to do
const mainMenu = [
  {
    type: "list",
    name: "start",
    message: "What would you like to do?",
    choices: [
      "Add Employee",
      "Add Role",
      "Add Department",
      "View All Employees",
      "View All Employees By Role",
      "View All Employees By Department",
      "View All Roles",
      "View All Departments",
      "Update An Employee Role",
      "Exit",
    ],
  },
];
function init() {
  inquirer.prompt(start)
  .then((response) => {
    
    ///switch statemtent CASE
    switch(response.start) {
      case "Add Employee":
        addEmployee();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "View All Employees":
        viewEmployees();
      case "View All Employees By Role":
        viewByRole();
        break;
      case "View All Employees By Department":
        viewByDept();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "View All Departments":
        viewDepartments();
        break;
      case "Update An Employee Role":
        updateEmployee();
        break;
    }
  })

}
///return methods from 

////////function for viewDepartments output=list in inquirer
/////function for viewRoles
/////function for viewEmployees
///function for viewByRole
////function for viewByDept
////fucntion for addDepartment
/////function for addRole
////function for addEmployee
////function for updateEmployee


/////function for managers that interacts with orm so it isn't as messy



///css styling in console?????


  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
  });
  


