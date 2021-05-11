// const { getSchoolboys } = require('./models/schoolboysModel');
const models = require('./backend/models');
const express = require('express');
const bodyParser = require("body-parser");

const app = express()
const port = 3049


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Приложение")
});

require("./backend/routes/v1/rate.routes.js")(app);
require("./backend/routes/v1/columns.routes")(app);
require("./backend/routes/v1/schoolboys.routes.js")(app);
require("./backend/routes/v1/lessons.routes.js")(app);

app.listen(port, () => {
    console.log(`Сервер запущен на порту: ${port}.\nПолучите приложение по адресу \nhttp://localhost:${port}/`);
});
