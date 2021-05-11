const sql  = require('./db');

const rate = function(rate) {};//Конструктор

rate.findAll = async (result, class_id=0, schoolboy_id) => {
    sql.query({
        //Делаем выборку только по нужным столбцам
        sql: `SELECT title, id, schoolboy_id, column_id FROM rate WHERE class_id = ? ${schoolboy_id ? 'AND schoolboy_id = ?' : ''}`,
        values: [class_id, schoolboy_id],
    }, (err, res) => {
        if (err) {
            console.log("error: ", err);
        }
        result(null, res);
    });
}
rate.add = async (result, class_id, title='H', schoolboy_id, column_id) => {
    sql.query({
        sql: 'INSERT INTO `rate` (title,column_id, schoolboy_id, class_id) VALUES(?,?,?,?);',
        values: [title, schoolboy_id, column_id, class_id],
    }, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, false);
        }
        result(null, true);
    });
}

rate.delete = async (result, class_id = 0, schoolboy_id=0, column_id=0) => {
    sql.query({
        sql: 'DELETE FROM `rate` WHERE `class_id` = ? AND `schoolboy_id` = ? AND `column_id` = ?',
        values: [class_id, schoolboy_id, column_id],
    }, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, false);
        }
        result(null, true);
    });
}

module.exports = rate;
