const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
   
    var errorEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | U mag dit niet doen!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(errorEmbed);

    var kickUser = message.guild.member(message.mentions.users.first());
    var errorEmbed2 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Ik kan de gebruiker niet vinden!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!kickUser) return message.channel.send(errorEmbed2);

    var reason = args.join(" ").slice(22);
    var errorEmbed3 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Geen reden opgegeven!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!reason) return message.channel.send(errorEmbed3)

    var errorEmbed4 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | U kunt deze gebruiker niet kicken`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (kickUser.hasPermission("KICK_MEMBERS")) return message.channel.send(errorEmbed4);

    var banEmbed2 = new discord.MessageEmbed()
        .setTitle(`U bent verwijderd uit ${message.guild.name}!`)
        .setColor('RED')
        .addField("Door:", message.author.tag)
        .addField("Reden:", reason);

    kickUser.send(banEmbed2).then(function () {
        message.guild.member(kickUser).kick(reason);
        var embed = new discord.MessageEmbed()
                .setTitle("Gebruiker verwijderd")
                .setDescription(`:white_check_mark: | ${kickUser} is verwijderd uit de server`)
                .setColor('RED')
                .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
                .setTimestamp();
            return message.channel.send(embed);
    }).catch(function () {
        message.guild.member(kickUser).kick(reason);
        var embed = new discord.MessageEmbed()
                .setTitle("Gebruiker verwijderd")
                .setDescription(`:white_check_mark: | ${kickUser} is verwijderd uit de server`)
                .setColor('RED')
                .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
                .setTimestamp();
            return message.channel.send(embed);
    });
}

module.exports.help = {
    name: "kick",
    description: "Kick een gebruiker",
    category: "Admin"
}