const express = require("express");
const fileUpload = require('express-fileupload');
const { createServer } = require("http");
const { join } = require("path");
const app = express();
const http = createServer(app);
const io = require("socket.io")(http);
let port = process.env.PORT || 3000;

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use(express.static("dist"));
app.use("/files", express.static("files"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", require("./router/posts"));
app.use("/api/files", require("./router/files"));
app.use("/api/saveFile", require("./router/saveFile"));
app.use("/api/editor", require("./router/editor"));
app.use("/api/login", require("./router/login"));
app.use("/api/clients", require("./router/clients"));
app.use("/api/lects", require("./router/lect"));
app.use("/api/users", require("./router/users"));

app.use(function (req, res) {
    res.sendFile(join(__dirname, "dist", "index.html"));
});

require("./socket")(io);

http.listen(port, () => {
    console.log("http://127.0.0.1:3000");
});