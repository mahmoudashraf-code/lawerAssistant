const router = require("express").Router();
const { users } = require("./../database/models/users")
const { array } = require("./../database/models/array")
router
    .get("/:userId", (req, res) => {
        try {
            res.send(array(users().get()).getData(req.params.userId));
        } catch (err) {
            console.log(err)
        }
    }).put("/", (req, res) => {
        try {
            console.log("sad")
            users().saveUsers(array(users().get()).update(req.body.id, req.body));
            res.end();
        } catch (err) {
            res.status(400).send();
            console.log(err)
        }
    });
module.exports = router;