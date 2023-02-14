const { REST, Routes } = require('discord.js')
const fs = require('node:fs')

require('dotenv').config()
const token = process.env.BOT_TOKEN
const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID

const commands = []

const commandFiles = fs
    .readdirSync('./src/commands')
    .filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`../${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({ version: '10' }).setToken(token)

;(async () => {
    try {
        console.log(
            `Started refreshing ${commands.length} application (/) commands!`
        )

        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands }
        )

        console.log(`Successfully reloaded ${data.length} application (/)!`)
    } catch (error) {
        console.error(error)
    }
})()
