const router = require("express").Router();
const { users } = require("../database/models/users")
router.post("/", (req, res) => {
    try {
        let data = users().find(req.body)
        if (data == false) {
            res.send({
                err: true
            });
            return;
        }
        res.send(data);
    } catch (err) {
        console.log(err)
        res.status(400).send({
            err: true
        })
    }
})

module.exports = router;