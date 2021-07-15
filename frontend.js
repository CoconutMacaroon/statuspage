const express = require("express");
const path = require("path");
let app = express();
const port = 80;

var public = path.join(__dirname, "public");

app.use(express.static(public));

app.get("/", function (req, res) {
    res.sendFile(path.join(public, "index.html"));
});

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});
