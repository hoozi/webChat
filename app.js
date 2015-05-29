var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoStroe = require('connect-mongo')(session);
var moment = require('moment');
var chat = require('./routes/index');
var user = require('./routes/user');
var app = express();
global.users = {};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("hoozi_chat"));
app.use(session({
  secret:"hoozi_chat",
  store: new mongoStroe({
    url:"mongodb://localhost/data",
    autoRemove: 'interval',
    autoRemoveInterval: 1 // In minutes. Default
  }),
  resave: true,
  saveUninitialized: true
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', chat);
app.use('/user', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var server = http.createServer(app);
var io = require('socket.io')(server);
var User = require('./query').user;
var user = {};
io.on('connection', function (socket) {

  socket.on('add', function (from) {
    user[from] = socket
  });
  socket.on('create room', function(from, to) {
    if(from in user) {
      user[from].join(to);
    }
  });
  socket.on('to message', function(message) {
    if(message.to in user) {
      user[message.to].join(message.to);
      socket.to(message.to).emit('to'+message.to,{
        from_id: message.from_id,
        from_name: message.from,
        from_date: message.date,
        from_message: message.msg
      });
    }
  });
});

server.listen(3000);

