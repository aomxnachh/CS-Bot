const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    cooldown:5,
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Replies to user with Hello!'),
        async execute(interaction){
            await interaction.reply(`Hello ${interaction.user.tag}!`);
        }
}