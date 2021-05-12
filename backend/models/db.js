const mysql = require("mysql");
const config = require("../../config/db.config");
const connection = mysql.createPool(config);

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

module.exports = connection;
