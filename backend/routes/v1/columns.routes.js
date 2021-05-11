const version = 'v1'
module.exports = app => {
    const Columns = require("../../controllers/columns.controller");

    app.get(`/${version}/:class_id/column`, Columns.findAll);

};
