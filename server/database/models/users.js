const { mkdirSync, accessSync, constants, rmdirSync } = require("fs")
const { save, getFile, getRandomInt } = require("./public")
const { array } = require("./array")
const { join } = require("path")
function access(path) {
    try {
        accessSync(path, constants.R_OK | constants.W_OK)
        return true
    } catch (err) {
        return false
    }
}
module.exports.createUser = function (user) {
    try {
        user.id = `_${getRandomInt()}`;
        if (access(join(__dirname, "..", "lawyerAssistant", user.id)) || users().find(user) == true) {
            throw "found";
        }
        mkdirSync(join(__dirname, "..", "lawyerAssistant", user.id));
        save(join(__dirname, "..", "lawyerAssistant", user.id, "clients.json"), [])
        save(join(__dirname, "..", "lawyerAssistant", user.id, "notes.json"), [])
        save(join(__dirname, "..", "lawyerAssistant", user.id, "salery.json"), [])
        let data = users().get();
        data.push(user);
        users().saveUsers(data);
        return true;
    } catch (err) {
        console.log(err)
        throw err;
    }
}
module.exports.deleteUser = function (userId) {
    try {
        rmdirSync(join(__dirname, "..", "lawyerAssistant", userId), { recursive: true })
        let data = users().get();
        data.splice(array(data).findIndex(userId))
        users().saveUsers(data);
        return true;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
function users() {
    return {
        get: function () {
            if (arguments.length == 0)
                return getFile(join(__dirname, "..", "lawyerAssistant", "users.json"))
            else {
                let data = this.get();
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
        },
        saveUsers: function (data) {
            return save(join(__dirname, "..", "lawyerAssistant", "users.json"), data)
        },
        find: function (user) {
            let data = this.get();
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == user.name && data[i].password == user.password) {
                    return data[i];
                }
                if (i == data.length - 1) return false;
            }
        }
    }
}
module.exports.users = users 