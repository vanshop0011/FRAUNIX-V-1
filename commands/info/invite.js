const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
  name: "invite",
  run: async (client, message, args) => {

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel("Youtube")

          .setStyle("LINK")
          .setEmoji("<:exe_youtube:1304700222999363645>")
          .setURL("https://discord.gg/mlcafe"),
        new MessageButton()
          .setLabel("Support Server")

          .setStyle("LINK")
          .setEmoji("<:exe_ticket:1304700220675850240>")
          .setURL("https://discord.gg/mlcafe"),
        new MessageButton()
          .setLabel("Vote me")

          .setStyle("LINK")
          .setEmoji("<:exe_like:1304700217677053952>")
          .setURL("https://discord.gg/mlcafe")
      )

    let embed = new MessageEmbed()
      .setTitle(`Fraunix Invite & Support `)
      .setURL("https://discord.com/api/oauth2/authorize?client_id=1357774114999505106&permissions=8&scope=bot")
      .setDescription(`Invite ${client.user.username} to your server`)
      .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
      .setColor("#8b0000")
      .setTimestamp()



    message.channel.send({ embeds: [embed], components: [row] })
  }
}