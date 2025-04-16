const { TicTacToe } = require('discord-gamecord');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'tictactoe',
    description: "Play a game of Tic-Tac-Toe with another user!",
    aliases: ['ttt'],
    run: async (client, message, args) => {
        const opponent = message.mentions.users.first();
        
        if (!opponent) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor('#8b0000')
                        .setDescription('❌ Please mention a user to play against!')
                ]
            });
        }

        if (opponent.bot) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor('#8b0000')
                        .setDescription('❌ You cannot play against a bot!')
                ]
            });
        }

        if (opponent.id === message.author.id) {
            return message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor('#8b0000')
                        .setDescription('❌ You cannot play against yourself!')
                ]
            });
        }

        new TicTacToe({
            message: message,
            opponent: opponent,
            embed: {
                title: 'Tic Tac Toe',
                color: '#8b0000',
                statusTitle: 'Status',
                overTitle: 'Game Over'
            },
            emojis: {
                xButton: '❌',
                oButton: '⭕',
                blankButton: '➖'
            },
            turnMessage: '{emoji} | It\'s now **{player}**\'s turn!',
            winMessage: '{emoji} | **{winner}** won the game!',
            gameEndMessage: 'The game went unfinished :(',
            drawMessage: 'It was a draw!',
            askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
            cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. :(',
            timeEndMessage: 'Since the opponent didn\'t answer, I dropped the game!',
            othersMessage: 'You are not allowed to use buttons for this message!'
        }).startGame();
    }
};