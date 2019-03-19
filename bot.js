let discord = require('discord.js');
//let auth = require('./auth.json');
let math = require('mathjs');
let coolAsciiFaces = require('cool-ascii-faces')

let authToken;

let bot = new discord.Client();
let faces = coolAsciiFaces.faces;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`, 'at', new Date());
});

bot.on('message', msg => {
  if (!msg.author.bot && msg.content){
    console.log('attempting to evaluate "' + msg.content + '" from user ' + msg.author.tag);
    try {
      let answer = math.eval(msg.content);
      console.log(msg.content + ' = ' + answer);
      msg.channel.send('yo ' + msg.author.username + "! ```" + msg.content + ' = ' + answer + '```');
      let i = Math.floor(Math.random() * faces.length)
      msg.channel.send(faces[i]);
    } catch(error){
      console.log('could not evaluate "' + msg.content + '"');
    }
  }
});

try {
  let auth = require('./auth.json');
  authToken = auth.token;
} catch (err) {
  authToken = process.env.DISCORD_AUTH_TOKEN
}

bot.login(authToken);
