const router = require("express").Router();
const { selectUser } = require("../database/models/index")

router
    .get("/:userId/people", (req, res) => {
        let data = selectUser(req.params.userId).file("clients").get();
        let collection = [];
        for (let i = 0; i < data.length; i++) {
            collection.push({
                id: data[i].id,
                name: data[i].name
            });
        }
        res.send(collection);
    }).get("/:userId", (req, res) => {
        try {
            res.send(selectUser(req.params.userId).file("clients").get());
        } catch (err) {
            console.log(err)
            res.status(400).send();
        }
    }).delete("/:userId/:id", (req, res) => {
        try {
            selectUser(req.params.userId).file("clients").delete({
                id: req.params.id
            })
            res.end();
        } catch (err) {
            console.log(err)
            res.status(400).send();
        }
    }).put("/:userId/:id", (req, res) => {
        try {
            selectUser(req.params.userId).file("clients").update({
                id: req.params.id
            }, req.body)
            res.end();
        } catch (err) {
            res.status(400).send();
            console.log(err)
        }
    }).post("/:userId", (req, res) => {
        try {
            selectUser(req.params.userId).file("clients").insert(req.body)
            res.end();
        } catch (err) {
            res.status(400).send();
            console.log(err)
        }
    });
module.exports = router;