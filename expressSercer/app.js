var createError = require('http-errors');
var express = require('express');
var path = require('path'); 
const mongoose = require("mongoose");
const session = require("express-session");
const mongoStore = require("connect-mongo")(session); 


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); 

var app = express();
const port = process.env.PORT || 3009;



app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});  

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
      mongooseConnection: mongoose.connection,
    }),
  })
); 

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => console.log(`app  on ${port}!`));


module.exports = app; 
