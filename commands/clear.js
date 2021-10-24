const discord = require("discord.js");
const { Client, CategoryChannel, MessageEmbed, MessageAttachment } = require("discord.js")


module.exports.run = async (client, message, args) => {

    var noperms = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`U kan dit niet`);

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(noperms); 
    let ammount = args.join(" ");
    message.channel.messages.fetch({ limit:ammount }).then(async fetched => {
        fetched = fetched.array().reverse();
        let channel = message.channel;
        message.channel.bulkDelete(fetched);
        let embed = new discord.MessageEmbed();
        embed.setTitle("Berrichten verwijdert");
        embed.setDescription(ammount + " Berrichten zijn verwijdert");
        embed.setFooter("ZortusRP • © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif");
        embed.setColor("RED");
        let msg = message.channel.send(embed).then(msg => {
            setTimeout(function(){ 
            msg.delete()
        }, 5000);
    })
    });

}
module.exports.help = {
    name: "clear"
}