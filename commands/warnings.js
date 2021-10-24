const discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {
    const warns = JSON.parse(fs.readFileSync("./moderation.json", "utf8"));

    var user = message.guild.member(message.mentions.users.first());
    var errorEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Kon de gebruiker niet vinden.`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!user) return message.channel.send(errorEmbed);

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };
    let file = warns[user.id]

    let embed = new discord.MessageEmbed()
        .setTitle(`Geschiedenis ${user.user.tag}`)
        .setColor('RED')
        .addField("Waarschuwingen:", file.warns)
        .setFooter(`ZortusRP • © alle rechten voorbehouden.  | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")

        message.channel.send(embed)


}

module.exports.help = {
    name: "warns",
    description: "Bekijk de waarschuwingen van een gebruiker.",
    category: "Admin"
}