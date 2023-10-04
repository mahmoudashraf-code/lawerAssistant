const { readFileSync, writeFileSync, readdirSync } = require("fs")
const { join, extname } = require("path")
const array = require("./array")
module.exports = function (file) {
    return {
        get(a) {
            if (a == undefined)
                return JSON.parse(readFileSync(join(process.cwd(), "database", file)).toString());
            else
                return JSON.parse(readFileSync(join(process.cwd(), "database", a)).toString());
        },
        write(data) {
            writeFileSync(join(process.cwd(), "database", file), JSON.stringify(data))
        },
        getRndId() {
            return `_${Math.floor(Math.random() * 100000000000000)}`;
        },
        join() {
            let data = [];
            readdirSync(join(process.cwd(), "database")).forEach((ele) => {
                if (extname(ele) != "") return;
                data = data.concat(this.get(join(ele, file)))
            })
            return data;
        },
        findFile(key, value) {
            return array.find(this.get(), key, value);
        },
        add(item) {
            if (item.id == undefined || item.id == "")
                item.id = this.getRndId();
            this.write(array.add(this.get(), item));
            return item;
        },
        update(item, key, value) {
            let data = this.get();
            let i = this.findFile(key, value).index
            data[i] = { ...data[i], ...item }
            this.write(data);
            data = undefined;
        },
        delete(key, value) {
            let data = this.get();
            data.splice(this.findFile(key, value).index, 1);
            this.write(data);
            data = undefined;
        }
    }
}