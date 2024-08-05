let ws = new WebSocket('wss://superlab-websocket-server.onrender.com//:443');

let promptField = document.querySelector('.prompt') ;

document.getElementById("send").addEventListener("click", sendPrompt);

function sendPrompt() {
	console.log("button pressed");
  ws.send(JSON.stringify({ 'prompt': promptField.value }));
  promptField.value = "";
}

ws.addEventListener('open', (event) => {
});

ws.addEventListener('message', (message) => {
  if (message && message.data) {
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