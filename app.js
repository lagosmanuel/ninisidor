const express = require("express");
const app = express();
const port = 80;

app.listen(port, () => console.log("server running on: " + port))

app.use("/", express.static("static"));