const Rate = require("../models/rate.model");
// Получение всех школьников из базы данных
exports.findAll = (req, res) => {
    Rate.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Что-то случилось во время получения всех пропусков"
            });

        // я оставлю заголовки, получаемые с сервера, в таком виде, но конечно в реальном продакшене лучше переписать под конкретный origin
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        if(data)
            res.send({
                Items: data.map((i)=>(
                    {
                        Id: i.id,
                        Title: i.title ? i.title: 'H',
                        SchoolboyId: i.schoolboy_id,
                        ColumnId: i.column_id,
                    }
                )),//Преобразовываем к виду как в задаче
                Quantity: data.length
            });
        else res.send("Нет елементов")
    },req.params.class_id, req.query.SchoolboyId);
};

exports.add = (req, res) => {
    Rate.add((err, status) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "При добавлении пропуска что то произошло"
            });

        // я оставлю заголовки, получаемые с сервера, в таком виде, но конечно в реальном продакшене лучше переписать под конкретный origin
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send({
            success: status
        })
    }, req.params.class_id, req.body.Title, req.body.SchoolboyId, req.body.ColumnId);//Параметры запроса
};



exports.delete = (req, res) => {
    Rate.delete((err, status) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "При удалении пропуска что то произошло"
            });

        // я оставлю заголовки, получаемые с сервера, в таком виде, но конечно в реальном продакшене лучше переписать под конкретный origin
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send({
            success: status
        })
    }, req.params.class_id, req.body.SchoolboyId, req.body.ColumnId);//Параметры запроса
};
