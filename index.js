const Discord = require('discord.js')
const { Intents, Client, Message } = require('discord.js')
const MessageEmbed = require('discord.js');
const myIntents = new Intents();
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const {
    token,
    prefix,
    logo,
    footer
} = require('./commands/config.json')

const payment = require('./commands/payment.js')

client.on('ready', () => {
    console.log(`${client.user.tag} is ready!`)
});

client.on('messageCreate', message => {
    const args = message.content.split(' ')
    if(args[0] === prefix + 'pay') {
        message.delete({setTimeout: 2500})
        payment.payment(message, args)
    }
})

client.login(token);