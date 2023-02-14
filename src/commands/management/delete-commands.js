const { REST, Routes } = require('discord.js')

require('dotenv').config()
const token = process.env.BOT_TOKEN
const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID

const rest = new REST({ version: '10' }).setToken(token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
    .then(() => console.log('Successfully deleted all guild commands!'))
    .catch(console.error)

rest.put(Routes.applicationCommands(clientId), { body: [] })
    .then(() => console.log('Successfully deleted all application commands!'))
    .catch(console.error)
