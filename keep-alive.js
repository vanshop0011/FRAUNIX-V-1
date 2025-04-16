// This is a simple keep-alive script for Replit hosting
// You can run this alongside your main bot to help keep it alive

const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

// Simple status page
server.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Bot Status</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            background-color: #f0f0f0;
          }
          .status {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <h1>Bot Status</h1>
        <div class="status">ONLINE</div>
        <p>Last updated: ${new Date().toLocaleString()}</p>
        <p>This is a keep-alive server to prevent the bot from sleeping.</p>
      </body>
    </html>
  `);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Keep-alive server is running on port ${PORT}`);
  console.log(`Visit https://your-repl-name.your-username.repl.co to check status`);
});

// Log when the server starts
console.log('Keep-alive script started at:', new Date().toLocaleString()); 