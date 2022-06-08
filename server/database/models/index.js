const { join } = require("path")
const { save, getFile, getRandomInt } = require("./public")
const { array } = require("./array")
module.exports.selectUser = function (userId) {
    return {
        file: function (name) {
            return {
                get: function () {
                    try {
                        let data = getFile(join(__dirname, "..", "lawyerAssistant", userId, `${name}.json`));
                        if (arguments.length == 0) {
                            return data;
                        } else {
                            let collection = [];
                            for (let i = 0; i < data.length; i++) {
                                for (const key in arguments["0"]) {
                                    if (arguments["0"][key] != data[i][key]) {
                                        break;
                                    }
                                    if (Object.keys(arguments["0"])[Object.keys(arguments["0"]).length - 1] == key) {
                                        collection.push(data[i]);
                                    }
                                }
                                if (data.length == i + 1) return collection;
                            }
                        }
                    } catch (err) {
                        throw err;
                    }
                },
                update: function (user, body) {
                    try {
                        this.rewrite(array(this.get()).update(user.id, body))
                    } catch (err) {
                        throw err;
                    }
                },
                insert: function (body) {
                    try {
                        let data = this.get();
                        body.id = getRandomInt();
                        data.push(body);
                        this.rewrite(data)
                    } catch (err) {
                        throw err;
                    }
                },
                delete: function (user) {
                    try {
                        this.rewrite(array(this.get()).delete(user.id))
                    } catch (err) {
                        throw err;
                    }
                },
                rewrite: function (data) {
                    save(join(__dirname, "..", "lawyerAssistant", userId, `${name}.json`), data);
                }
            }
        }
    }
}
