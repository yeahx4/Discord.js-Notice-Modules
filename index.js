const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./lib/config.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if(msg.content.startsWith(config.prefix + '공지' || config.prefix + 'notice')) {
    msg.reply('Test!')
  }
})

client.login(config.token)