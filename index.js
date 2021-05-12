// const { getSchoolboys } = require('./models/schoolboysModel');
const cors = require('cors')
const express = require('express');
const bodyParser = require("body-parser");
const api = require("./config/api.config");

const app = express()
const port = api.configAPI.port;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PUBLIC_PATH = __dirname + '/frontend/pages/main/build/';
app.use(express.static(PUBLIC_PATH));

app.get("/", (req, res) => {
    res.sendFile(PUBLIC_PATH + '/main/build/index.html');
});

require("./backend/routes/v1/rate.routes.js")(app);
require("./backend/routes/v1/columns.routes")(app);
require("./backend/routes/v1/schoolboys.routes.js")(app);
require("./backend/routes/v1/lessons.routes.js")(app);

app.listen(port, () => {
    console.log(`Сервер запущен на порту: ${port}.\nПолучите приложение по адресу \nhttp://localhost:${port}/`);
    console.log(`Так же смотрите онлайн https://tatl-test.redw.me/`);
});
