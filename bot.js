let discord = require('discord.js');
let auth = require('./auth.json');
let math = require('mathjs');

let bot = new discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`, 'at', new Date());
});

bot.on('message', msg => {
  if (msg.author.tag != bot.user.tag){
    console.log(msg.author.tag);
    content = msg.content;
    console.log('attempting to evaluate', content);
    let answer;
    try {
      answer = math.eval(content);
      console.log(answer);
      msg.channel.send(answer);
    } catch(error){
      console.log('could not evaluate', content);
    }
  }
});

bot.login(auth.token);
