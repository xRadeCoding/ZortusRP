const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
   
    var errorEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: |  U mag dit niet doen!`)
        .setColor('RED')
        .setFooter(`Test| Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(errorEmbed);
    var banUser = message.guild.member(message.mentions.users.first());
    var errorEmbed2 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | U heeft geen gebruiker opgegeven!`)
        .setColor('RED')
        .setFooter(`Test| Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!banUser) return message.channel.send(errorEmbed2);
    
    var reason = args.join(" ").slice(22);
    var errorEmbed3 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | U heeft geen reden opgegeven!`)
        .setColor('RED')
        .setFooter(`Test| Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!reason) return message.channel.send(errorEmbed3)
    
    var errorEmbed4 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | U mag deze gebruiker niet bannen!`)
        .setColor('RED')
        .setFooter(`Test| Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (banUser.hasPermission("BAN_MEMBERS")) return message.channel.send(errorEmbed4);
    
    var banEmbed2 = new discord.MessageEmbed()
        .setTitle(`U bent verbannen van ${message.guild.name}!`)
        .setColor('RED')
        .setFooter(`Test`, "https://i.imgur.com/0WreGHg.gif")
        .addField("Door:", message.author.tag)
        .addField("Reden:", reason);
    
    
        banUser.send(banEmbed2).then(function () {
            message.guild.member(banUser).ban({days: 0, reason: reason})
            var embed = new discord.MessageEmbed()
                .setTitle("Gebruiker verbannen")
                .setDescription(`:white_check_mark: | ${banUser} is verbannen op de deze server`)
                .setColor('RED')
                .setFooter(`Test| Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
                .setTimestamp();
            return message.channel.send(embed);
        }).catch(function () {
            message.guild.member(banUser).ban({ reason: reason })

            var embed = new discord.MessageEmbed()
                .setTitle("Gebruiker verbannen")
                .setDescription(`:white_check_mark: | ${banUser} is verbannen op de deze server`)
                .setColor('RED')
                .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
                .setTimestamp();
            return message.channel.send(embed);
        });
}

module.exports.help = {
    name: "ban",
    description: "Ban een gebruiker",
    category: "Admin"
}