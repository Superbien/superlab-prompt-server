let ws = new WebSocket('wss://superbien.github.io/superlab-prompt-server//:443');

let promptField = document.querySelector('.prompt') ;
let sendButton = document.querySelector('.send') ;

sendButton.addEventListener('onclick', (event) => {
  ws.send(JSON.stringify({ 'prompt': promptField.value }));
}, false);

ws.addEventListener('open', (event) => {
  console.log('Socket connection open');
  // alert('Successfully connected to socket server 🎉');
  ws.send('pong');
});

ws.addEventListener('message', (message) => {
  if (message && message.data) {
    if (message.data === "ping") {
      console.log("got ping");
      ws.send("pong");
      return;
    }
    let data = JSON.parse(message.data);
    if (data) {
  
      console.log("got data", data);
    }
  }
  console.log("message", message)
});

ws.addEventListener('error', (error) => {
    console.error('Error in the connection', error);
    alert('error connecting socket server', error);
});

ws.addEventListener('close', (event) => {
    console.log('Socket connection closed');
    alert('closing socket server');
});