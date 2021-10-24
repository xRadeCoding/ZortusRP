const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
   
    var mutePerson = message.guild.member(message.mentions.users.first());

    var errorEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | U heeft hiervoor geen permissies!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed);

    var errorEmbed2 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Geen gebruiker gevonden`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();

    if (!args[0] || !mutePerson) return message.reply(errorEmbed2);

    var errorEmbed3 = new discord.MessageEmbed()
    .setTitle("Error")
    .setDescription(`:x: | U kunt deze gebruiker niet muten`)
    .setColor('RED')
    .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
    .setTimestamp();

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply(errorEmbed3);

    var muteRole = message.guild.roles.cache.get('901519078060073000');

    mutePerson.roles.add(muteRole.id);

    var embed = new discord.MessageEmbed()
        .setTitle("Gebruiker gemute")
        .setDescription(`:white_check_mark: | ${mutePerson} is gemuted`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "mute",
    description: "Mute een gebruiker",
    category: "Admin"
}