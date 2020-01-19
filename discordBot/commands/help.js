const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Lista cu toate comenzile sau informatii despre o comanda',
	master: false,
	args: false,
	cooldown: 3,
	dmOnly: false,
	usage: '<nume comanda>',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Aici e lista cu toate comenzile mele');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nPoti scrie \`${prefix}help [nume comanda]\` pentru detalii despre comanda.`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Ti-am trimis prin DM toate comenzile mele');
				})
				.catch(error => {
					console.error(`Nu am putut trimite DM lui ${message.author.tag}.\n`, error);
					message.reply('nu pot sa iti dau DM. Ai dezactivat Direct Messages ?');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name);

		if (!command) {
			return message.reply(`Nu exista comanda ${name}`);
		}

		data.push(`**Nume:** ${command.name}`);
		data.push(`**Descriere:** ${command.description}`);
		data.push(`**Master role only:** ${command.master}`);
		data.push(`**Folosire:** ${prefix}${command.name} ${command.usage}`);
		data.push(`**Cooldown:** ${command.cooldown} secunde`);
		data.push(`**Doar prin mesaj privat (DM):** ${command.dmOnly}`);
		data.push(`**Argumente obligatorii:** ${command.args}`);

		message.channel.send(data, { split: true });


	},
};
