const router = require("express").Router();
const { selectUser, } = require("../database/models/index")
router
    .get("/:userId", (req, res) => {
        try {
            res.send(selectUser(req.params.userId).file("salery").get())
        } catch (err) {
            res.status(400).send();
            console.log(err)
        }
    }).post("/:userId", (req, res) => {
        try {
            selectUser(req.params.userId).file("salery").rewrite(req.body);
            res.end();
        } catch (err) {
            res.status(400).send();
            console.log(err)
        }
    });

module.exports = router;