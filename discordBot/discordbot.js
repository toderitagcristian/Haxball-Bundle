// Some header space for visibility

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(__dirname +'/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};

client.once('ready', () => {
	console.log('Haxball Discord BOT Ready !');
});

client.on('error', error => {
	console.error('The websocket connection encountered an error:', error);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	if ( command.master && message.author.id != "138256255037734912" ) {
		return message.channel.send(`Nu ai acces la comanda **${command.name}**`);
	}

	if ( command.dmOnly && message.channel.type !== 'dm' ) {
		return message.channel.send(`Comanda **${command.name}** functioneaza doar prin DM (Direct Messages).`);
	};

	if ( command.args && !args.length ) {
		let reply = `Nu ai specificat parametrii, ${message.author}!`;
		if ( command.usage ) {
			reply += `\nFolosirea corecta este: \`${prefix}${command.name} ${command.usage}\``;
		};
		return message.channel.send(reply);
	};

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`mai asteapta ${timeLeft.toFixed(1)} seconde inainte de a refolosi comanda \`${command.name}\`.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('A fost o eroare in executarea comenzii !');
	}


});

client.login(token);
