const { Client } = require('ps-client');
const MsgParse = require('./MsgParse.js')

const bot = new Client({ username: "RedmanisSpooky", password: "fake password", rooms:["bot-development"]});



bot.connect();
MsgParse.MsgParse(bot)