const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'L1nd@kay',
    database: 'employees_DB'
});
connection.connect();

connection.query = util.promisify(connection.query);
/////after exporting connection
  


module.exports = connection;