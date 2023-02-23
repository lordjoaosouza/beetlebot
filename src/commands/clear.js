const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clears messages from a channel')
        .addIntegerOption((option) =>
            option
                .setName('amount')
                .setDescription('The amount of messages to clear')
                .setRequired(true)
        ),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount')

        if (amount > 100) {
            await interaction.reply({
                content: 'You can only delete up to 100 messages at a time!',
                ephemeral: true,
            })
        } else if (amount < 1) {
            await interaction.reply({
                content: 'You must delete at least one message!',
                ephemeral: true,
            })
        } else {
            await interaction.channel.bulkDelete(amount, true)
            await interaction.reply({
                content: `Successfully deleted ${amount} messages!`,
                ephemeral: true,
            })
        }
    },
}
