const router = require("express").Router();
const { createUser, users, deleteUser } = require("../database/models/users")
const { array } = require("../database/models/array")
router
    .get("/:userId", (req, res) => {
        try {
            res.send(array(users().get()).getData(req.params.userId));
        } catch (err) {
            res.status(400).send();
        }
    }).get("/", (req, res) => {
        try {
            res.send(users().get());
        } catch (err) {
            res.status(400).send();
        }
    }).delete("/:id", (req, res) => {
        try {
            deleteUser(req.params.id)
            res.end();
        } catch (err) {
            res.status(400).send();
        }
    }).put("/", (req, res) => {
        try {
            users().saveUsers(array(users().get()).update(req.body.id, req.body));
            res.end()
        } catch (err) {
            res.status(400).send();
        }
    }).post("/", (req, res) => {
        try {
            createUser(req.body)
            res.end();
        } catch (err) {
            res.status(400).send();
            console.log(err)
        }
    });
module.exports = router;