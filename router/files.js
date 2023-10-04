const router = require("express").Router();
const { readdirSync } = require("fs");
const { join, extname } = require("path");

router.get("/icon/:id", (req, res) => {
    res.sendFile(join(process.cwd(), "files", "common", "icons", req.params.id), () => {
        res.sendFile(join(__dirname, "..", "dist", "assets", "img", `user.png`));
    })
}).get("/", (req, res) => {
    try {
        if (req.query.path.includes("..")) {
            res.status(500).json("haker");
            return;
        }
        let data = [];
        readdirSync(join(process.cwd(), "files", req.query.path)).forEach(ele => {
            let o = {
                name: ele,
                type: "file",
                content: "file"
            }
            if (extname(ele) == '') {
                o.type = o.content = "folder";
            } else if (ele.startsWith("@post.")) {
                o.type = o.content = "post";
            }
            data.push(o);
        })
        res.json(data);
        data = undefined;
    } catch (err) {
        res.status(400).json("error");
    }
});
module.exports = router;