var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// var path = require('path');
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const { mongooseConnect } = require("./config/mongoose");

var app = express();
const port = process.env.PORT || 3009;

app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/users", usersRouter);

const databaseConnection = "mongodb://localhost/practice_site";
mongooseConnect(databaseConnection);

app.use(
  session({
    secret: "we love Santa",
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      maxAge: 1800000,
      sameSite: "none",
      secure: true,
      httpOnly: false,
    },
    store: new MongoStore({
      mongoUrl: "mongodb://localhost/practice_site"
    }),
  })
);

app.listen(port, () => console.log(`app  on ${port}!`));

module.exports = app;
