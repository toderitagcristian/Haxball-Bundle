const fs = require('fs');

module.exports = {
	name: 'reload',
	description: 'Reload all commands',
	master: true,
	args: false,
	cooldown: 5,
	dmOnly: false,
	usage: '',
	execute(message) {
		message.client.commands.forEach((value, key) => {
			delete require.cache[require.resolve(`./${key}.js`)];
		});

		let newCommandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));
		
		for (const file of newCommandFiles) {
			try {
				const newCommand = require(`./${file}`);
            	message.client.commands.set(newCommand.name, newCommand);
			} catch (error) {
				console.log(error);
				message.channel.send(`Eroare la incarcarea \`${file}\`:\n\`${error.message}\``);
			}
		}

		message.channel.send(`Reload all commands **succes** !`);
	},
};