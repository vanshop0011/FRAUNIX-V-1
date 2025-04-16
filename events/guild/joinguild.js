const config = require("../../botconfig/main")

const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const client = require("../../index")
client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    let embed = new MessageEmbed()
        .setColor('#8b0000')
        .setTitle('<:exe_plus:1304703174656917586> **__CONNECTED TO NEW SERVER__**')
        .setURL('https://discord.gg/mlcafe')
        .setDescription(`> <a:exe_dot:1304701925807357972>  THANKS YOU FOR INVITING ME. MY PREFIX IS wf!`)

        .addFields(
            { name: '<:exe_bot:1304700213872820295> **__CREATORS__**', value: '> <a:exe_dot:1304701925807357972> vanshop01' }
        )

        .setImage('https://media.discordapp.net/attachments/1357045095299420193/1358375586501890229/standard_36.gif?ex=67f39d59&is=67f24bd9&hm=397df5b28b74ade773ae903b31141ff8a5e3a87f26a8dd7eed900051727b5a55&=&width=563&height=225')
        .setTimestamp()
        .setFooter('Fraunix', 'https://discord.gg/mlcafe');
    channel.send({ embeds: [embed] });
}) 
