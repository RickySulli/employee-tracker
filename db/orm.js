/////orm for bridgint betweren 
////import connection
const connection = require('./connection');
const init = require('../app')

////db as a class
class DB {
        constructor(connection){
            this.connection = connection;
        }
    viewDepartments(){
        const queryString = `SELECT department_name, department_id FROM department`
        //formatted table showing department names and department ids
        return this.connection.query(queryString);    
    }

    viewRoles(){
        const queryString = `SELECT title, salary, role_id, department.name FROM role INNER JOIN department ON role.department_id=department.id`
        //presented with the job title, role id, the department that role belongs to, and the salary for that role
        return this.connection.query(queryString);    
    }

    viewEmployees(){
        //presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        const queryString = `
        SELECT CONCAT(first_name, "", last_name)AS fullName, id, role.salary, role.title, role.salary, manager_id, department.name FROM employee
        INNER JOIN role ON employee.role_id = role.id  
        INNER JOIN department ON employee.department_id = department.id
        `
        return this.connection.query(queryString)
        
    }
    
    viewByRole(){
        // presented with a list of employees that all share the same role
        queryString = `SELECT employee.id, CONCAT(first_name, "", last_name)AS fullName, role.title, role.salary, department.name FROM employee
        INNER JOIN role ON employee.role_id = role.id
        INNER JOIN department ON role.department_id = department.id
        ORDER BY role.title`
        return this.connection.query(queryString)
    }
    viewByDept(){
        const queryString = `SELECT employee.id, CONCAT(first_name, "", last_name)AS fullName,  `
        //presented with all the employees separated by department
        return this.connection.query(queryString)
    }

    addDepartment(name){
        //prompted to enter the name of the department and that department is added to the database
        const queryString = `INSERT INTO department(name)VALUE (?)`
        return this.connection.query(queryString, [name])
    }

    addRole(){
       // prompted to enter the name, salary, and department for the role and that role is added to the database
       const queryString = `INSERT INTO role(title, salary, department_id)VALUE(?,?,?)`
       return this.connection.query(queryString, [title, salary, department_id])
    }
    addEmployee(first_name, last_name, role_id, manager_id){
       // prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
       const queryString = `INSERT INTO employee(first_name, last_name, role_id, manager_id)VALUE (?,?,?,?)`
       return this.connection.query(queryString, [first_name, last_name, role_id, manager_id])
    }

    updateEmployee(first_name, last_name, role_id){
        //prompted to select an employee to update and their new role and this information is updated in the database 
        const queryString = `
        SELECT CONCAT(first_name, "", last_name)AS fullName FROM employee
        UPDATE employee SET role_id = ? WHERE employee_id = (SELECT employee_id FROM(SELECT employee_id FROM employee WHERE CONCAT(first_name, "", last_name) = ?)AS fullName)`
        return this.connection.query(queryString, [first_name, last_name, role_id])
    }
}

module.exports = new DB(connection)
