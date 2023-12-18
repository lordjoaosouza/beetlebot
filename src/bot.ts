import { Client } from 'discord.js'
import ready from './listeners/ready'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intents: [],
})

client
  .login(process.env.DISCORD_BOT_TOKEN)
  .then(() => {
    ready(client)
  })
  .catch((error: Error) => {
    console.error('Error logging in: ' + error.message)
  })
