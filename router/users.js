const router = require("express").Router();
const { rmdirSync, mkdirSync } = require("fs");
const { join } = require("path");
const file = require("./../package/file");
router.get("/", (req, res) => {
    try {
        res.json(file("users.json").get());
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).delete("/:id", (req, res) => {
    try {
        file("users.json").delete("id", req.params.id);
        rmdirSync(join(process.cwd(), "database", req.params.id), { recursive: true });
        rmdirSync(join(process.cwd(), "files", req.params.id), { recursive: true });
        res.end();
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).post("/", (req, res) => {
    try {
        req.body.id = file().getRndId();
        let item = file("users.json").add(req.body);
        mkdirSync(join(process.cwd(), "database", item.id));
        mkdirSync(join(process.cwd(), "files", item.id));
        file(join(item.id, "clients.json")).write([]);
        res.end();
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
}).put("/:id", (req, res) => {
    try {
        file("users.json").update(req.body, "id", req.params.id);
        res.end();
    } catch (err) {
        console.log(err)
        res.status(500).json("error");
    }
})
module.exports = router;