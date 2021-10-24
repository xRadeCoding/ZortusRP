const discord = require("discord.js");
const { Client, CategoryChannel, MessageEmbed, MessageAttachment } = require("discord.js")

module.exports.run = async (client, message, args) => {
    var joins = new discord.MessageEmbed()
    joins.setAuthor('Hoe join je de stad')
    joins.setColor('RED')
    joins.setTitle('Click hier')
    joins.setURL('https://cfx.re/join/y869km')
    joins.setDescription("");
    joins.setFooter("ZortusRP • © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif");

      message.channel.send(joins);
}

module.exports.help = {
    name: "join"
}