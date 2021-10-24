const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const warns = JSON.parse(fs.readFileSync("./moderation.json", "utf8"));

    var user = message.guild.member(message.mentions.users.first());

    var errorEmbed = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | U mag dit niet doen!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed);

    var errorEmbed2 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Ik de gebruiker niet vinden!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!user) return message.channel.send(errorEmbed2);

    var errorEmbed3 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Deze gebruiker heeft nog geen waarschuwingen ontvangen!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (!warns[user.id]) return message.channel.send(errorEmbed3)

    var errorEmbed4 = new discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`:x: | Deze gebruiker heeft geen waarschuwingen!`)
        .setColor('RED')
        .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
        .setTimestamp();
    if (warns[user.id].warns == 0) return message.channel.send(errorEmbed4)

    warns[user.id].warns--;


    fs.writeFile("./moderation.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var unwarnEmbed = new discord.MessageEmbed()
        .setDescription("Waarschuwing verwijderd")
        .setColor('RED')
        .addField("Gebruiker", user)
        .addField("Door", message.author)
        .addField("Waarschuwingen", warns[user.id].warns)

        var warnChannel = message.member.guild.channels.cache.get('901510382227705908');
        if (warnChannel) warnChannel.send(unwarnEmbed);

        var embed = new discord.MessageEmbed()
            .setTitle("Waarschuwing verwijderd")
            .setDescription(`:white_check_mark: | ${user.user.tag} zijn waarschuwing is succesvol verwijderd`)
            .setColor('RED')
            .setFooter(`ZortusRP • © alle rechten voorbehouden. | Uitgevoerd door: ${message.author.username}`, "https://i.imgur.com/0WreGHg.gif")
            .setTimestamp();
    message.channel.send(embed);


}
module.exports.help = {
    name: "unwarn",
    description: "Verwijder de waarschuwing van een gebruiker",
    category: "Admin"
}