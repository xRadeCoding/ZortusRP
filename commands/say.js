const discord = require("discord.js");

const { Client, CategoryChannel, MessageEmbed, MessageAttachment } = require("discord.js")

module.exports.run = async (client, message, args) => {

    var noperms = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`U kan dit niet`);

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(noperms);

    const sayMessage = args.join(" ");
    message.delete().catch(err => console.log(err));
    let say = new discord.MessageEmbed()
    say.setColor('RED')
    say.setDescription(sayMessage);
    say.setFooter("ZortusRP • © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif");
    message.channel.send(say);


}
module.exports.help = {
    name: "say"
}