const discord = require("discord.js");

const { Client, CategoryChannel, MessageEmbed, MessageAttachment } = require("discord.js")

module.exports.run = async (client, message, args) => {

    var noperms = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`U kan dit niet`);

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(noperms);

    const sayclMessage = args.join(" ");
    message.delete().catch(err => console.log(err));
    let saycl = new discord.MessageEmbed()
    saycl.setTitle('**ChangeLog**');
    saycl.setColor('RED')
    saycl.setDescription(sayclMessage);
    saycl.setFooter("ZortusRP • 2020 - © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif","https://i.imgur.com/0WreGHg.gif");
    saycl.setThumbnail("https://i.imgur.com/0WreGHg.gif");
    saycl.setTimestamp();
    message.channel.send(saycl);


}
module.exports.help = {
    name: "saycl"
}