const express = require("express");
const { join } = require("path");
const app = express();
let port = process.env.PORT || 5000;

app.use(express.static("dist"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/login", require("./router/login"));
app.use("/api/clients", require("./router/clients"));
app.use("/api/notes", require("./router/notes"));
app.use("/api/lects", require("./router/lect"));
app.use("/api/users", require("./router/users"));
app.use("/api/salery", require("./router/salery"));

app.use(function (req, res) {
    res.sendFile(join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
    console.log("http://127.0.0.1:5000");
});