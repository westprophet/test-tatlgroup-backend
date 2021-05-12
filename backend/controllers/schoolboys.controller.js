const Schoolboys = require("../models/schoolboys.model");
// Получение всех школьников из базы данных
exports.findAll = (req, res) => {
    Schoolboys.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Что-то случилось во время получения всех школьников"
            });

        // я оставлю заголовки, получаемые с сервера, в таком виде, но конечно в реальном продакшене лучше переписать под конкретный origin
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send({
            Items: data.map((i)=>(
                {
                    Id: i.id,
                    FirstName: i.name,
                    SecondName: i.secondname,
                    LastName: i.lastname,
                }
            )),
            Quantity: data.length
        });
    },req.params.class_id);
};


