const Scraper = require('@yimura/scraper').default;
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const youtube = new Scraper();

module.exports = {
    name: "youtube",
    description: "Search Videos On Youtube!",
    options: [
        {
            name: "name",
            description: "The Search Query",
            required: true,
            type: "STRING"
        }
    ],
    ephemeral: true,

    run: async(client, interaction)=> {
        try {
            const q = interaction.options.getString("name");
            const array = await youtube.search(q);
            
            if (!array || !array.videos || array.videos.length === 0) {
                return interaction.followUp({ 
                    content: "No videos found for your search query!", 
                    ephemeral: true 
                });
            }

            const next = new MessageButton()
                .setStyle("SUCCESS")
                .setLabel("Next")
                .setCustomId("next");
            const row = new MessageActionRow().addComponents(next);
            
            let index = 0;
            const makeEmbed = (ind) => {
                const video = array.videos[ind];
                if (!video) {
                    throw new Error("Video data not found");
                }
                
                const embed = new MessageEmbed()
                    .setColor("#8b0000");
                
                if (video.link) embed.setURL(video.link);
                if (video.title) embed.setTitle(video.title);
                
                let description = [];
                if (video.views) description.push(`Views: ${video.views}`);
                if (video.uploaded) description.push(`Uploaded: ${video.uploaded}`);
                
                embed.setDescription(description.join(" | ") || "No additional information available");
                
                if (video.thumbnail) embed.setImage(video.thumbnail);
                
                return embed;
            }

            try {
                await interaction.followUp({ 
                    content: `Showing result 1/${array.videos.length}`, 
                    embeds: [makeEmbed(index)], 
                    components: [row], 
                    ephemeral: true 
                });
            } catch (error) {
                console.error('Error sending initial response:', error);
                return interaction.followUp({
                    content: "An error occurred while displaying the search results. Please try again.",
                    ephemeral: true
                });
            }

            const filter = i => i.customId === 'next' && i.user.id === interaction.member.user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: 50000 });

            collector.on('collect', async i => {
                try {
                    if (i.customId === 'next') {
                        index++;
                        if (index >= array.videos.length) {
                            return i.update({ 
                                content: "You've Reached The End!", 
                                embeds: [], 
                                components: [], 
                                ephemeral: true 
                            });
                        }
                        await i.update({ 
                            content: `Showing result ${index + 1}/${array.videos.length}`, 
                            embeds: [makeEmbed(index)], 
                            components: [row], 
                            ephemeral: true 
                        });
                    }
                } catch (error) {
                    console.error('Error updating search results:', error);
                    await i.update({
                        content: "An error occurred while updating the results. Please try searching again.",
                        embeds: [],
                        components: [],
                        ephemeral: true
                    });
                }
            });

            collector.on('end', () => {
                try {
                    interaction.editReply({ 
                        content: "Search session ended!", 
                        components: [], 
                        ephemeral: true 
                    }).catch(() => {});
                } catch (error) {
                    console.error('Error ending search session:', error);
                }
            });

        } catch (error) {
            console.error('YouTube search error:', error);
            try {
                await interaction.followUp({ 
                    content: "An error occurred while searching for videos. Please try again later.", 
                    ephemeral: true 
                });
            } catch (e) {
                console.error('Error sending error message:', e);
            }
        }
    }
}

