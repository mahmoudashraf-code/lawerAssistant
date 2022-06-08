const { readFileSync, writeFileSync } = require("fs");

module.exports.getFile = function (path) {
    try {
        return JSON.parse(readFileSync(path, "utf-8"))
    } catch (err) {
        throw err;
    }
}
module.exports.save = function (path, data) {
    try {
        writeFileSync(path, JSON.stringify(data))
    } catch (err) {
        throw err;
    }
}
module.exports.getRandomInt = function () {
    return Math.floor(Math.random() * Math.floor(90000000000));
}
