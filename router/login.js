const router = require("express").Router();
const file = require("./../package/file")
router.post("/", (req, res) => {
    try {
        let data = file("users.json").get();
        for (let i = 0; i < data.length; i++) {
            if (data[i].username == req.body.username && data[i].password == req.body.password) {
                res.json(data[i]);
                data = undefined;
                return;
            }
        }
        data = undefined;
        res.json({});
    } catch (err) {
        console.log(err);
        res.status(400).json("error");
    }
});
module.exports = router;