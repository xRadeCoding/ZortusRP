const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //!announce title $ message $ color

    var serverIcon = message.guild.iconURL();

    var noperms = new discord.MessageEmbed()
        .setColor("You have no permissions for this command!")

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noperms);

    var seperator = "$";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Use")
            .setColor("#00ee00")
            .setDescription(`Maak een melding met:\n !melding titel ${seperator} bericht ${seperator} HexKleur`);
        return message.reply(embed);


    }


    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "#ff9100";

    var options = {

        title: argsList[0],
        message: argsList[1] || "Niks is ingevuld",
        color: argsList[2].trim(),


    }

    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`${options.title}`)
        .setColor(`${options.color}`)
        .setDescription(`${options.message}`)
        .setFooter("ZortusRP • © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif", "https://i.imgur.com/0WreGHg.gif")
        .setThumbnail("https://i.imgur.com/0WreGHg.gif");

    client.channels.cache.get("901053234569961472").send(announceEmbed);

}

module.exports.help = {
    name: "melding"
}