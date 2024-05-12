// Server-side code (Node.js) - server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const users = {};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    const data = JSON.parse(message);
    switch(data.type) {
      case 'login':
        users[data.username] = ws;
        break;
      case 'message':
        // Example: broadcasting message to all users
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
              type: 'message',
              sender: data.sender,
              content: data.content
            }));
          }
        });
        break;
      // Add more cases for file sharing, room management, etc.
    }
  });
});

// Client-side code
// You can embed this script in an HTML file or use it with a frontend framework
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = function() {
  // Perform login/authentication
  ws.send(JSON.stringify({
    type: 'login',
    username: 'example_username'
  }));
};

ws.onmessage = function(event) {
  const data = JSON.parse(event.data);
  switch(data.type) {
    case 'message':
      // Example: displaying received message
      console.log(`${data.sender}: ${data.content}`);
      break;
    // Add more cases for handling different types of messages
  }
};

// Example function for sending a message
function sendMessage(content) {
  ws.send(JSON.stringify({
    type: 'message',
    sender: 'example_sender',
    content: content
  }));
}
