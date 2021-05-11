const version = 'v1'
module.exports = app => {
    const Rate = require("../../controllers/rate.controller");

    app.get(`/${version}/:class_id/rate`, Rate.findAll);

    app.post(`/${version}/:class_id/rate`, Rate.add);
    app.post(`/${version}/:class_id/unrate`, Rate.delete);

};
