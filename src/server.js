const express = require("express");
const cors = require("cors");
const Routes = require("./routes/user.routes");

const app = express();
const router = express.Router();

const bodyParser = require("body-parser");
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use(require("./routes/user.routes"));
app.use(require("./routes/tasks.router"));

app.set("port", process.env.port || 3000);

module.exports = app;
