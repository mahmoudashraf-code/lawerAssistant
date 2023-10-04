const { join } = require("path");
const router = require("express").Router();

router.post("/", (req, res) => {
    console.log(req.query)
    console.log(req.file);
    res.end();
    return
    req.files.file.mv(join(__dirname, "..", "files", req.query.path, req.files.file.name), function (err) {
        if (err)
            return res.status(400).end()
        res.end();
    });
});
module.exports = router;