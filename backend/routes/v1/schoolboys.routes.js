const version = 'v1'
module.exports = app => {
    const schoolboys = require("../../controllers/schoolboys.controller");

    app.get(`/${version}/:class_id/schoolboys`, schoolboys.findAll);

    // app.post("/schoolboys", schoolboys.create);


    // app.get(`/${version}/:class_id/column`, schoolboys.findAll);

    // app.put("/deal/:dealId", schoolboys.update);

    // app.delete("/deal/:dealId", schoolboys.delete);

    // app.delete("/schoolboys", schoolboys.deleteAll);
};
