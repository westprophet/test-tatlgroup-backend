const configAPI = {
    "version": "v1",
    "domain": "http://localhost",
    "port": '3049',
    //Ключь поставил пока сюда.
    // По хорошему ему надо быть в другом месте например в profileReducer
    "class_key": 1,
};
const baseApiURL = `${configAPI.domain}:${configAPI.port}/${configAPI.version}/${configAPI.class_key}`;

module.exports = {
    baseApiURL,
    configAPI
}
