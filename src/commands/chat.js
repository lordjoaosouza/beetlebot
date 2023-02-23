const { SlashCommandBuilder } = require('discord.js')
const { openai } = require('openai')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chat')
        .setDescription('Chat with ChatGPT')
        .addStringOption((option) =>
            option
                .setName('message')
                .setDescription('Message to send to ChatGPT')
                .setRequired(true)
        ),
    async execute(interaction) {},
}
