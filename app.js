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
/// make an async function that uses prompt to display mainMenu to the user or use a .then statement.  use switch statement
function init() {
  inquirer.prompt(mainMenu)
  .then((response) => {
    console.log(response)
    ///switch statemtent CASE
    switch(response.mainMenu) {
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

const newEmployee = () => {
  inquirer.prompt ([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name?"
    }
  ])
  .then(addEmployee(newEmployee))
}
  
///return methods from 
/////function for viewEmployees
/////function for viewRoles

////function for viewDepartments output=list in inquirer
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
  

  // async function loadMainPrompts() {
  //    const { start } = await inquirer.prompt(mainMenu)
  //    console.log(start);
  //  }

   
  //  loadMainPrompts();

  init();
 
