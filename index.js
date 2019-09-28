const Discord = require('discord.js')
const TextChannel = Discord.TextChannel
const client = new Discord.Client()
const config = require('./lib/config.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
    if(message.author.id !== config.owner) return;
    if(message.content.startsWith(config.prefix + '공지' || config.prefix + 'notice')) {
        message.channel.send('The notice is being sent...').then(e =>{
            const embed = new Discord.RichEmbed()
              .setTitle('📢**'+config.title+'**')
              .setColor(config.color)
              .setFooter(`${message.author.tag} - Verified.`)
              .setDescription(message.content.slice(message.content.replace('\n', ' ').split(' ')[0].length, message.content.length))
        
        client.guilds.forEach(guild => {
            for(let i in config.channel){
                const gchannel = guild.channels.find(
                    val => (
                        val.name.includes(config.channel[i])) && val instanceof TextChannel
                    )

        if(gchannel instanceof TextChannel) {
            gchannel.send(embed)
        } else return
    }
})
            e.edit(':white_check_mark: Notice has been sent!')
        })
    }
})

client.login(config.token)