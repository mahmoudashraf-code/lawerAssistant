const router = require("express").Router();
const { array } = require("../database/models/array");
const { selectUser } = require("../database/models/index")
const { getRandomInt } = require("../database/models/public")
router
    .get("/:userId", (req, res) => {
        try {
            let result = [];
            selectUser(req.params.userId).file("clients").get().forEach(element => {
                result = result.concat(element.lec);
            });
            res.send(result);
        } catch (err) {
            res.status(400).send();
            console.log(err)
        }
    }).delete("/:userId/:clientId/:lectId", (req, res) => {
        try {
            let data = selectUser(req.params.userId).file("clients").get();
            let i = array(data).findIndex(req.params.clientId);
            data[i].lec = array(data[i].lec).delete(req.params.lectId)
            selectUser(req.params.userId).file("clients").rewrite(data);
            res.end();
        } catch (err) {
            res.status(400).send();
            console.log(err)
        }
    }).put("/:userId/:clientId/:lectId", (req, res) => {
        try {
            let data = selectUser(req.params.userId).file("clients").get();
            let i = array(data).findIndex(req.params.clientId);
            data[i].lec = array(data[i].lec).update(req.params.lectId, req.body);
            selectUser(req.params.userId).file("clients").rewrite(data);
            res.end();
        } catch (err) {
            res.status(400).send();
        }
    }).post("/:userId/:clientId", (req, res) => {
        try {
            let data = selectUser(req.params.userId).file("clients").get();
            let i = array(data).findIndex(req.params.clientId);
            req.body.id = getRandomInt();
            req.body.clientId = req.params.clientId;
            data[i].lec.push(req.body);
            selectUser(req.params.userId).file("clients").rewrite(data);
            res.end();
        } catch (err) {
            res.status(400).send();
        }
    });

module.exports = router;