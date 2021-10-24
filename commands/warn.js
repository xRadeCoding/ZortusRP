const discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    const warns = JSON.parse(fs.readFileSync("./moderation.json", "utf8"));

    var errorEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | U mag dit niet doen!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed);

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    var errorEmbed2 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Ik de gebruiker niet vinden!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!user) return message.channel.send(errorEmbed2);

    var errorEmbed3 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Je mag deze gebruiker niet waarschuwen!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. `, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed3);

    var reason = args.join(" ").slice(22);

    var errorEmbed4 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Ik kon geen reden vinden!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. `, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!reason) return message.channel.send(errorEmbed4);

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    if (warns[user.id].reason == undefined)
    {
        warns[user.id].reason = reason + ",";
    }
    else {
        warns[user.id].reason += reason + ",";
    }

    fs.writeFile("./moderation.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.MessageEmbed()
            .setTitle("Waarschuwing")
            .setDescription(`:white_check_mark: | ${user} heeft een waarschuwing gekregen.`)
            .addField("Totaal aantal waarschuwingen:", warns[user.id].warns)
            .setColor('RED')
            .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
            .setTimestamp();
    var warnEmbedLog = new discord.MessageEmbed()
        .setDescription("Waarschuwing")
        .setColor('RED')
        .addField("Gebruiker", user)
        .addField("Door", message.author)
        .addField("Aantal waarschuwingen", warns[user.id].warns)
        .addField("Reden", reason);

    var warnChannel = message.member.guild.channels.cache.get('901518892768301067');
    if (warnChannel) warnChannel.send(warnEmbedLog);

    message.channel.send(warnEmbed);

}

module.exports.help = {
    name: "warn",
    description: "Waarschuw een gebruiker.",
    category: "Admin"
}