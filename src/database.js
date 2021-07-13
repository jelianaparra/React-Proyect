const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
