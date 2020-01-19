module.exports = {
	name: 'kick',
	description: 'Mentioneaza cu @ pentru kick',
	args: true,
	cooldown: 3,
	dmOnly: false,
	usage: '<@username>',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
}; 