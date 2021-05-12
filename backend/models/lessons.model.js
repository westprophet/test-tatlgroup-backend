const sql  = require('./db');

const lessons = function(lesson) {};//Конструктор

lessons.findAll = async (result, class_id = 1) => {
    sql.query({
        sql: 'SELECT * FROM `lessons` WHERE `class_id` = ?',
        values: [class_id],
    }, (err, res) => {
        if (err) {
            console.log("error: ", err);
        }
        result(null, res);
    });
}

module.exports = lessons;
