const version = 'v1'
module.exports = app => {
    const lessons = require("../../controllers/lessons.controller");

    app.get(`/${version}/:class_id/lessons`, lessons.findAll);

};
