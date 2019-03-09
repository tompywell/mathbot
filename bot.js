let discord = require('discord.js');
let auth = require('./auth.json');
let math = require('mathjs');

let bot = new discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`, 'at', new Date());
});

bot.on('message', msg => {
  if (msg.author.tag != bot.user.tag){
    console.log('attempting to evaluate "' + msg.content + '" from user ' + msg.author.tag);
    try {
      let answer = math.eval(msg.content);
      console.log(msg.content + ' = ' + answer);
      msg.channel.send('yo ' + msg.author.username + "! ```" + msg.content + ' = ' + answer + '```');
    } catch(error){
      console.log('could not evaluate "' + msg.content + '"');
    }
  }
});

bot.login(auth.token);
