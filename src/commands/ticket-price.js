const { SlashCommandBuilder } = require('discord.js')
const { yahooFinance } = require('yahoo-finance')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket-price')
        .setDescription('See ticket price')
        .addStringOption((option) =>
            option
                .setName('ticket')
                .setDescription('Ticket to see the price')
                .setRequired(true)
        ),
    async execute(interaction) {},
}
