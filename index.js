const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
const { join } = require("path");


fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {

        console.log("Kon geen bestanden vinden! (commands)")
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`Het bestand ${f} is ingeladen!`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});

 const client = new discord
     .Client();
 client.commands = new discord.Collection();
client.login(botConfig.token);

client.on("ready", async () => {
  console.log(`${client.user.username} is in ${client.guilds.cache.size} Discord Servers.`);

    client.user.setStatus('dnd')
    var statuses = [
        "Members",
        "Regels",
        "?help",
    ];
    setInterval(function () {
        var status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "WATCHING"
        });
    }, 10500);
    
});

client.on('guildMemberAdd', member => {

    var joinMessage = new discord.MessageEmbed()
        .setColor('RED')
        .setTitle('👋 **Welkom bij ZortusRP Onderwereld | Discord Server**')
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Welkom **${member.user}** leuk dat je __ZortusRP Onderwereld__ | Discord gejoined bent!`)
    .addFields(
      { name: "👤 **Members:**", value: `Wij hebben nu: **${member.guild.memberCount}** leden!` })
        .setFooter("ZortusRP • © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif")

    client.channels.cache.get("901789765412741130").send(joinMessage);

});

 client.on("message", async message => {

   if (message.author.bot) return;

  var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

     var command = messageArray[0];
    
     if (!message.content.startsWith(prefix)) return;

    var args = messageArray.slice(1);
     var commands = client.commands.get(command.slice(prefix.length));

     if (commands) commands.run(client, message, args);
  })
