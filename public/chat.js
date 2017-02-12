window.onload = function(){
  var messages = [];
  var socket = io.connect('http://localhost:8081');

  var field = document.getElementsByClassName('field');
  var sendButton = document.getElementsByClassName('send');
  var content = document.getElementsByClassName('content');
  socket.on('message', function(data){
    if(data.message){
      messages.push(data.message);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += messages[i] + '<br />';
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
  });

sendButton.onclick = function(){
    var text = field.value;
    console.log('Sending');
    socket.emit('send', {message : text});
  };

}
