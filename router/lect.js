const router = require("express").Router();
const { join } = require("path");
const file = require("./../package/file");
const array = require("./../package/array")
router.get("/:userId", (req, res) => {
    try {
        let data = [];
        file(join(req.params.userId, "clients.json")).get().forEach(element => {
            data = data.concat(element.lec);
        });
        res.json(data);;
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).delete("/:userId/:clientId/:id", (req, res) => {
    try {
        let data = file(join(req.params.userId, "clients.json")).get();
        let i = array.find(data, "id", req.params.clientId).index;
        data[i].lec.splice(array.find(data[i].lec, "id", req.params.id).index, 1);
        file(join(req.params.userId, "clients.json")).write(data);
        data = undefined;
        res.end();
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).post("/:userId/:clientId", (req, res) => {
    try {
        req.body.id = file().getRndId();
        req.body.userId = req.params.userId;
        let data = file(join(req.params.userId, "clients.json")).get();
        data[array.find(data, "id", req.params.clientId).index].lec.push(req.body);
        file(join(req.params.userId, "clients.json")).write(data);
        data = undefined;
        res.end();
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).put("/:userId/:clientId/:id", (req, res) => {
    try {
        let data = file(join(req.params.userId, "clients.json")).get();
        let i = array.find(data, "id", req.params.clientId).index;
        data[i].lec[array.find(data[i].lec, "id", req.params.id).index] = req.body;
        file(join(req.params.userId, "clients.json")).write(data);
        data = undefined;
        res.end();
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
})
module.exports = router;
//[]