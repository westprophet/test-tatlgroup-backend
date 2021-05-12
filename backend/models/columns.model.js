const sql  = require('./db');

const columns = function(lesson) {};//Конструктор

columns.findAll = async (result, class_id = 1) => {
    sql.query({
        sql: 'SELECT * FROM `columns` WHERE `class_id` = ?',
        values: [class_id],
    }, (err, res) => {
        if (err) {
            console.log("error: ", err);
        }
        result(null, res);
    });
}

module.exports = columns;
