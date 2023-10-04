const router = require("express").Router();
const { join } = require("path");
const file = require("./../package/file");
router.get("/:userId", (req, res) => {
    try {
        res.json(file(join(req.params.userId, "clients.json")).get());
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).delete("/:userId/:id", (req, res) => {
    try {
        file(join(req.params.userId, "clients.json")).delete("id", req.params.id);
        res.end();
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).post("/:userId", (req, res) => {
    try {
        req.body.lec = [];
        file(join(req.params.userId, "clients.json")).add(req.body);
        res.end();
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).put("/:userId/:id", (req, res) => {
    try {
        file(join(req.params.userId, "clients.json")).update(req.body, "id", req.params.id);
        res.end();
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).get("/:userId/all", (req, res) => {
    try {
        let data = [];
        file(join(req.params.userId, "clients.json")).get().forEach(element => {
            data.push({
                value: element.id,
                title: element.name
            })
        });
        res.json(data);
        data = undefined;
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
})
module.exports = router;