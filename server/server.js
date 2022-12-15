const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const { PORT = 3001 } = process.env;

// / / r o u t e r / / / / / / / / / / / /
const formRouter = require("./routes/form");

// / / m i d d l e w a r e / / / / / / /
app.use(compression());

app.use(express.json()); //server parses incoming json/application requests

app.use(express.static(path.join(__dirname, "..", "client", "public")));

// / / r o u t e s / / / / / / / / / / / /
app.use(formRouter);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});
