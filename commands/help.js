const discord = require("discord.js");


module.exports.run = async (client, message, args) => {
  if (message.member.roles.cache.has("901228961877610588")){
  var helpEmbed = new discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Help Command")
    .addFields(
      { name: "**?help**", value: "Zie alle commandos." },
      { name: "**?melding Titel $ Text $ Kleur**", value: "Maak een mededeling." },
      { name: "**?say 'Bericht'**", value: "Stuur een embed in het kanaal van het command." },
      { name: "**?saycl 'Bericht'**", value: "Verstuur een changelog bericht."},
      { name: "**?suggestie '(Suggestie)'**", value: "Via hier kun je suggestie toevoegen wat jij graag wil toegevoegd hebben", },
      { name: "**?clear Hoeveelhijd**", value: "Verwijder berichten. (max 100)"},
      { name: "**?ban (Speler-TAG) (Reden)**", value: "Verban iemand van deze discord server!", },
      { name: "**?kick (Speler-TAG) (Reden)**", value: "Kick iemand van deze discord server!", },
      { name: "**?warn (Speler-TAG) (Reden)**", value: "Warn iemand van deze discord server!", },
      { name: "**?mute (Speler-TAG) (Reden)**", value: "Mute iemand van deze discord server!", },
      { name: "**?warns (Speler-TAG)**", value: "Bekijk de warns op de persoon zijn naam!", },
      { name: "**?unwarn (Speler-TAG)**", value: "Haal iemand zijn warn weg!", }


    )

    .setFooter("ZortusRP • © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif");

  return message.channel.send(helpEmbed);
    }
  else{
    var helpEmbed = new discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Help Command")
    .addFields(
      { name: "**?help**", value: "Zie alle commandos.",},
      { name: "**?suggestie '(Suggestie)'**", value: "Via hier kun je suggestie toevoegen wat jij graag wil toegevoegd hebben", },
      { name: "**?join**", value: "Kun zonder wat te doen de stad binnen komen!", }

    )
    .setFooter("ZortusRP • © alle rechten voorbehouden.","https://i.imgur.com/0WreGHg.gif","https://i.imgur.com/0WreGHg.gif");

  return message.channel.send(helpEmbed);
  }
}

module.exports.help = {
  name: "help"
}