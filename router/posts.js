const router = require("express").Router();
const { renameSync, readdirSync } = require("fs");
const { join } = require("path");
const file = require("./../package/file");
router.get("/", (req, res) => {
    try {
        res.json(file("posts.json").get());
    } catch (err) {
        console.log(readdirSync(process.cwd()));
        console.log(err);
        res.status(400).json("error");
    }
}).get("/:userId/:id", (req, res) => {
    try {
        res.json(file(join("..", "files", req.params.userId, `@post.${req.params.id}.json`)).get());
    } catch (err) {
        res.status(400).json("error");
    }
}).post("/:userId", (req, res) => {
    try {
        req.body.id = file().getRndId();
        file(join("..", "files", req.params.userId, `@post.${req.body.id}.json`)).write(req.body);
        req.body.content = undefined;
        req.body = file(join("posts.json")).add(req.body);
        res.end();
    } catch (err) {
        res.status(400).json("error");
    }
}).put("/:userId/:id", (req, res) => {
    try {
        file(join("..", "files", req.params.userId, `@post.${req.params.id}.json`)).write(req.body);
        if (req.query.name == req.params.id) {
            renameSync(join(process.cwd(), "files", req.params.userId, `@post.${req.params.id}.json`), join(process.cwd(), "files", req.params.userId, `@post.${req.query.name}.json`))
        }
        res.end();
    } catch (err) {
        res.status(400).json("error");
    }
}).delete("/:id", (req, res) => {
    try {
        file(join("posts.json")).delete("id", req.params.id);
        res.end();
    } catch (err) {
        res.status(400).json("error");
    }
})
module.exports = router;