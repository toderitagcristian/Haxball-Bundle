module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Ping!',
	master: false,
	args: false,
	cooldown: 5,
	dmOnly: false,
	usage: '',
	execute(message) {
		message.channel.send('Poooong.');
		console.log(`Ping-ed by ${message.author.username} ${message.author.id}`);
	},
};