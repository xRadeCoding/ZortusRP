const discord = require("discord.js");
const { Client, CategoryChannel, MessageEmbed, MessageAttachment } = require("discord.js")


module.exports.run = async (client, message, args) => {
        const sayMessage = args.join("  ");

        if(!sayMessage) return message.channel.send('Geen bericht opgegeven!')

        const say = new discord.MessageEmbed()
        .setAuthor("ZortusRP Onderwereld | Suggestie","https://i.imgur.com/0WreGHg.gif")
        .setColor("RED")
        .addFields({
            name: ' __Suggestie:__\n',
            value: `> ${sayMessage}`,
            inline: false
          }, {
            name: `__Ingescheven door:__`,
            value: `${message.author}`,
            inline: false
        })
        .setFooter("ZortusRP • © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif");
        client.channels.cache.get("900999478813818880").send(say).then(msg2 => {
            setTimeout(function(){ 
            msg2.react("👍")
            msg2.react("👎")
        }, 0);
        })
        let embed = new discord.MessageEmbed();
        embed.setTitle("Suggestie ingeleverd");
        embed.setDescription("Suggestie is ingeleverd");
        embed.setFooter("ZortusRP • © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif");
        embed.setColor("RED");
        message.channel.send(embed).then(msg => {
            setTimeout(function(){ 
            msg.delete()
            message.delete()
        }, 5000);
    })

}
module.exports.help = {
    name: "suggestie"
}