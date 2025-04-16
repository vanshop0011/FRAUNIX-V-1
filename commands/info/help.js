const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js")
const { version: discordjsVersion } = require("discord.js")
const config = require("../../botconfig/main")
module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Fraunix Menu')

          .addOptions([
            {
              label: 'Main Menu',
              description: 'Shows the main menu',
              emoji: "<:exe_01:1304700251067781161>",
              value: '0',
            },
            {
              label: 'Config Commands',
              description: 'Shows all the config commands',
              emoji: "<:exe_02:1304700248693805067>",
              value: '1',
            },

            {
              label: 'Fun Commands',
              description: 'Shows all the fun commands',
              emoji: "<:exe_03:1304700245866709022>",
              value: '3',
            },
            {
              label: 'Games Commands',
              description: 'Shows all the game commands',
              emoji: "<:exe_04:1304700242624647258>",
              value: '4',
            },

            {
              label: 'Information Commands',
              description: 'Shows all the information commands',
              emoji: "<:exe_05:1304700239445229569>",
              value: '5',
            },
            {
              label: 'Moderation Commands',
              description: 'Shows all the moderation commands',
              emoji: "<:exe_06:1304700237197348874>",
              value: '6',
            },
            {
              label: 'Uptimer Commands',
              description: 'Shows all the uptimer commands',
              emoji: "<:exe_08:1304700232390541412>",
              value: '9',
            },
            {
              label: 'Utility Commands',
              description: 'Shows all the utility commands',
              emoji: "<:exe_09:1304700229576036434>",
              value: '7',
            },
            {
              label: 'Image Commands',
              description: 'Shows all the image commands',
              emoji: "<:exe_10:1304700227181350943>",
              value: '10',
            },
            {
              label: 'Economy Commands',
              description: 'Shows all the economy commands',
              emoji: "<:exe_11:1304700225058766868>",
              value: '11',
            },
          ]),
      );
    const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel("Youtube")

          .setStyle("LINK")
          .setEmoji("<:exe_youtube:1304700222999363645>")
          .setURL("https://www.youtube.com/@vansh_gamerz_09"),
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

    const embed = new MessageEmbed()
      .setTitle("**HELP MENU**")
      .setDescription(`<:exe_bot:1304700213872820295> __**BOT INFO**__
> <a:exe_dot:1304701925807357972>  Prefix: \` ${config.prefix}\`

<:exe_bulb:1304700255924781056> __**BOT'S COMMANDS**__
>  <a:exe_dot:1304701925807357972> Config Commands
>  <a:exe_dot:1304701925807357972> Fun Commands
>  <a:exe_dot:1304701925807357972> Games Commands
>  <a:exe_dot:1304701925807357972> Information Commands
>  <a:exe_dot:1304701925807357972> Moderation Commands
>  <a:exe_dot:1304701925807357972> Uptimer Commands
>  <a:exe_dot:1304701925807357972> Utility Commands
>  <a:exe_dot:1304701925807357972> Image Commands
>  <a:exe_dot:1304701925807357972> Economy Commands

<:exe_ppl:1304700253307670538> __**BOT'S STATUS**__
> <a:exe_dot:1304701925807357972> Current Ping  ${client.ws.ping}ms
> <a:exe_dot:1304701925807357972> Discord.js Version: ${discordjsVersion}
> <a:exe_dot:1304701925807357972> Running on Node ${process.version} on ${process.platform} ${process.arch}`)
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("#8b0000")


    let sendmsg = message.channel.send({ embeds: [embed], components: [row, row2] })

    let embed1 = new MessageEmbed()
      .setColor('#8b0000')
      .setTitle('**HELP MENU**')
      .addFields(
        { name: "**CONFIG COMMANDS**", value: "`set-countingchannel`, `setwelcomechannel`, `setleavechannel`" })
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225")
      .setColor("#8b0000")
      .setFooter('Page 1')




    let embed3 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#8b0000')
      .addFields(
        { name: "**FUN COMMANDS**", value: "`8ball`, `activity`, `pixelize`, `meme`" })
      .setColor("#8b0000")
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225")
      .setFooter('Page 3')

    let embed4 = new MessageEmbed()

      .setTitle('**Help Menu**')
      .setColor('#8b0000')
      .addFields(
        { name: "**GAMES COMMANDS**", value: "`c4`, `tictactoe`, `roadrace`, `snake`, `quickclick`, `catchthefish`" })
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225")
      .setColor("#8b0000")
      .setFooter('Page 4')

    let embed5 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#8b0000')
      .addFields(
        { name: "**INFO COMMANDS**", value: "`help`, `cmdhelp`, `botinfo`, `ping`, `invite`, `embed`" })
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225")
      .setColor("#8b0000")
      .setFooter('Page 5')

    let embed6 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#8b0000')
      .addFields(
        { name: "**MOD COMMANDS**", value: "`ban`, `addroleall`, `removeroleall`, `softban`, `purge`, `mute`, `kick`, `tempmute`, `nuke` `stealemoji`" })
      .setFooter('Page 6')
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225")
      .setColor("#8b0000")
    let embed9 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#8b0000')
      .addFields({ name: "**UTILITY COMMANDS**", value: "`addtag`, `edittag`, `removetag`, `afk`, `rolelist`, `snipe`, `timer`, `calculator`, `avatar`, `serverinfo`, `ss`, `dump`" })
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225")
      .setFooter('Page 7')

    let embed8 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#8b0000')
      .addFields({ name: "**UPTIMER COMMANDS**", value: "`add-monitor`" })
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225f")
      .setColor("#8b0000")
      .setFooter('Page 9')

    let embed11 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#8b0000')
      .addFields({ name: "**ECONOMY COMMANDS**", value: "`balance`, `deposit`, `withdraw`, `search`, `shop`, `inv`, `pet`, `adopt`, `buy`, `sell`, `use`, `gamble`, `multi`, `beg`, `daily`, `fish`, `hunt`, `rob`, `rich` `postmeme`" })
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225")
      .setColor("#8b0000")
      .setFooter('Page 11')

    let embed10 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#FFFFFF')
      .addFields({ name: "**UTILITY COMMANDS**", value: "`anime`, `art`, `banner`, `cat`, `color`, `dog`, `gif`, `ss`" })
      .setImage("https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225")
      .setColor("#8b0000")
      .setFooter('Page 10')
    const filter = i => i.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({
      filter,
      time: 40000000,
      componentType: "SELECT_MENU"
    });

    collector.on("collect", async (collected) => {
      const value = collected.values[0]
      if (value === "0") {
        collected.update({ embeds: [embed], components: [row, row2] })
      }
      if (value === "1") {
        collected.update({ embeds: [embed1], components: [row, row2] })
      }
      if (value === "3") {
        collected.update({ embeds: [embed3], components: [row, row2] })
      }
      if (value === "4") {
        collected.update({ embeds: [embed4], components: [row, row2] })
      }
      if (value === "5") {
        collected.update({ embeds: [embed5], components: [row, row2] })
      }
      if (value === "6") {
        collected.update({ embeds: [embed6], components: [row, row2] })
      }
      if (value === "7") {
        collected.update({ embeds: [embed9], components: [row, row2] })
      }
      if (value === "9") {
        collected.update({ embeds: [embed8], components: [row, row2] })
      }
      if (value === "10") {
        collected.update({ embeds: [embed10], components: [row, row2] })
      }
      if (value === "11") {
        collected.update({ embeds: [embed11], components: [row, row2] })
      }
    })
  }
}