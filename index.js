const express = require('express')
const app = express()
const chalk = require("chalk")

// Add a simple status page
app.get('/', (req, res) => {
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
     </body>
   </html>
   `);
});

// Use the PORT environment variable provided by Replit or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(
      chalk.white('['),
      chalk.cyan('Express'),
      chalk.white(']'),
      chalk.gray(':'),
      chalk.white('Connected on port ' + PORT)
   );
});

const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });
module.exports = client;

client.db = require('quick.db')
const countingSchema = require("./schemas/counting")
let pagination = require('./function/pagination')
const eco = require('./schemas/economy');

// ———————————————[Global Variables]———————————————
client.commands = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
const Timeout = new Collection();
client.snipes = new Collection()
client.config = require("./botconfig/main.json");
require("./handler")(client);




// ———————————————[Logging Into Client]———————————————
const token = process.env["TOKEN"] || client.config.clienttoken;
if (token === "") {
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(
      chalk.white("["),
      chalk.red.bold("AntiCrash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Invalid Token")
   );
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(chalk.magenta("There Are 3 Ways To Fix This"));
   console.log(
      chalk.blue("Put Your ") + chalk.red("Bot Token ") + chalk.blue("in:")
   );
   console.log(
      chalk.yellow.bold("1.) ") +
      chalk.cyan("index.js") +
      chalk.gray(
         " On the client.login line remove client.login(token) and write client.login('Your token')"
      )
   );
   console.log(
      chalk.yellow.bold("2.) ") +
      chalk.cyan("ENV/Secrets") +
      chalk.gray(
         " If using replit, make new secret named 'clienttoken' and put your token in it else, if your using VsCode, Then Follow Some ENV tutorials (I don't suggest using it in VSC)"
      )
   );
   console.log(
      chalk.yellow.bold("3.) ") +
      chalk.cyan("main.json ") +
      chalk.gray(
         'Go To botconfig/main.json, Find The Line with client.token and put "client.token":"Your Bot Token"'
      )
   );
   console.log(
      chalk.green.bold("Still Need Help? Contact Me:\n") +
      chalk.yellow.italic("Discord: ray.dev\n") +
      chalk.yellow.italic("Discord Server: https://discord.gg/2QDwvbn23X")
   );
} else {
   client.login(token);
}
// Login The Bot.
// ———————————————[Error Handling]———————————————
process.on("unhandledRejection", (reason, p) => {
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(
      chalk.white("["),
      chalk.red.bold("AntiCrash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Unhandled Rejection/Catch")
   );
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(
      chalk.white("["),
      chalk.red.bold("AntiCrash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Uncaught Exception/Catch")
   );
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(
      chalk.white("["),
      chalk.red.bold("AntiCrash"),
      chalk.white("]"),
      chalk.gray(" : "),
      chalk.white.bold("Multiple Resolves")
   );
   console.log(chalk.gray("—————————————————————————————————"));
   console.log(type, promise, reason);
});

const Levels = require("discord-xp");

const { mongooseConnectionString } = require("./botconfig/main.json");

Levels.setURL(mongooseConnectionString);
