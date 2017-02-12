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

app.listen(8081);
console.log("Listening on port 8081");
