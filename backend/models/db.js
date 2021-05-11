const mysql = require("mysql");
const config = require("../config/db.config");
// const connection = mysql.createConnection(config);
const connection = mysql.createPool(config);
// тестирование подключения
// connection.connect((err)=>{
//     if (err) {
//         return console.error("Ошибка: " + err.message);
//     }
//     else{
//         console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });

module.exports = connection;
