const Discord = require('discord.js');
require('dotenv').config();

const commandHandler = require('./commands');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('🤖 Beep beep! I am ready!');
});

client.on('message', commandHandler);

client.login(process.env.BOT_TOKEN);
