const sql  = require('./db');

const schoolboys = function(schoolboy) {};//Конструктор

schoolboys.findAll = async (result, class_id = 1) => {
    sql.query({
        sql: 'SELECT * FROM `schoolboys` WHERE `class_id` = ?',
        values: [class_id],
    }, (err, res) => {
        if (err) {
            console.log("error: ", err);
        }
        result(null, res);
    });
}

module.exports = schoolboys;
