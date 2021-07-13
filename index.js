const express = require("express");
const helpers = require("./helpers");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(helpers.readTemplateFile("index.html", "utf8", {}));
});

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
});
