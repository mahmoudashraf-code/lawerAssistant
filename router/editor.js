const { join } = require("path");
const router = require("express").Router();

router.get("/url", (req, res) => {
    res.json({
        "success": 1,
        "meta": {
            "title": "CodeX Team",
            "description": "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
            "image": {
                "url": "https://codex.so/public/app/img/meta_img.png"
            }
        }
    })
}).post("/upload", (req, res) => {
    req.files.file.mv(join(process.cwd(), "files", "common", "upload", req.files.file.name), function (err) {
        if (err)
            return res.json({
                "success": 1,
            });
        res.json({
            "success": 1,
            "file": {
                "url": `/files/common/upload/${req.files.file.name}`,
                "size": req.files.file.size,
                "name": req.files.file.name,
            }
        });
    });
}).post("/image", (req, res) => {
    req.files.file.mv(join(process.cwd(), "files", "common", "upload", req.files.file.name), function (err) {
        if (err)
            return res.json({
                "success": 1,
            });
        res.json({
            "success": 1,
            "file": {
                "url": `/files/common/upload/${req.files.file.name}`,
                "size": req.files.file.size,
                "name": req.files.file.name,
            }
        });
    });
})
module.exports = router;