const Columns = require("../models/columns.model");
// Получение всех школьников из базы данных
exports.findAll = (req, res) => {
    Columns.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Что-то случилось во время получения всех колонок"
            });

        // я оставлю заголовки, получаемые с сервера, в таком виде, но конечно в реальном продакшене лучше переписать под конкретный origin
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

        res.send({
            Items: data.map((i)=>(
                {
                    Id: i.id,
                    Title: i.title,
                }
            )),
            Quantity: data.length
        });
    },req.params.class_id);
};
