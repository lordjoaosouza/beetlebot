const { SlashCommandBuilder } = require('discord.js')

const axios = require('axios')

require('dotenv').config()
const API_KEY = process.env.ALPHA_VANTAGE_API_KEY

module.exports = {
    // TODO: Add graph
    data: new SlashCommandBuilder()
        .setName('market')
        .setDescription('Get the price and graph of a ticket')
        .addStringOption((option) =>
            option
                .setName('ticket')
                .setDescription('The ticket to get the price and graph of')
                .setRequired(true)
        ),
    async execute(interaction) {
        const ticket = interaction.options.getString('ticket').toUpperCase()
        const response = await axios.get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticket}&outputsize=full&apikey=${API_KEY}`
        )
        const timeSeriesData = response.data['Time Series (Daily)']
        const latestDate = Object.keys(timeSeriesData)[0]
        const latestData = timeSeriesData[latestDate]
        const price = latestData['4. close']

        interaction.reply(`The price of ${ticket} is $${price}`)
    },
}
