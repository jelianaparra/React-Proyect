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

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "POST, PUT, GET, DELETE, OPTIONS, PATCH",
    allowedHeaders:
      "Accept, Content-Type, Accept-Encoding, Content-Length, Authorization",
  })
);
app.get("/", (req, res) => {
  res.send("Probando Probando");
});
app.use(require("./routes/user.routes"));
app.use(require("./routes/tasks.routes"));

app.use(express.static("uploads"));

app.set("port", process.env.PORT || 3000);

module.exports = app;
