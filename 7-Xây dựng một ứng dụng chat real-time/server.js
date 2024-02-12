const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Mảng lưu trữ các kết nối WebSocket
const clients = [];

// Xử lý kết nối mới từ client
wss.on('connection', (ws) => {
  // Thêm kết nối mới vào mảng clients
  clients.push(ws);

  // Xử lý khi nhận được tin nhắn từ client
  ws.on('message', (message) => {
    // Gửi tin nhắn nhận được từ client đến tất cả các client khác
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Xử lý khi một kết nối bị đóng
  ws.on('close', () => {
    // Xóa kết nối đã đóng ra khỏi mảng clients
    clients.splice(clients.indexOf(ws), 1);
  });
});

// Khởi chạy máy chủ HTTP
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
