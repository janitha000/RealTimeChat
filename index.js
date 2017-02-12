var express = require('express');
var app = express();

app.set('views', __dirname + '/tpl');
app.set('view engine', "pug");
app.engine('pug', require('pug').__express);
app.get("/", function(req, res){
    res.render("index");
});

app.get('/', function(req,res){
  res.render(page);
})
app.use(express.static(__dirname + "/public"));

var io = require('socket.io').listen(app.listen(8081));

io.sockets.on('connection', function(socket){
  console.log('User connected');
  socket.emit('message', {message : 'Welcome to the chat'});
  socket.on('send', function(data){
    socket.emit('message', data);
  });

  socket.on('disconnect', function(){
    console.log('User disconnected');
  })
});

console.log("Listening on port 8081");
