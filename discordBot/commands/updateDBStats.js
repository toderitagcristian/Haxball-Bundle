const HaxROUsers = require('../../database-init');

module.exports = {
	name: 'updatestats',
    description: `Modify stat-value on database.`,
    role: "master", // Probably I could use bot ownership
    args: true,
	cooldown: 5,
	dmOnly: false,
	usage: '@mention <stat> <value>',
    execute(message, args) {
        if (!message.mentions.users.size) {
			return message.reply('Use @user to modify them !');
		}

		const taggedUser = message.mentions.users.first();

        message.channel.send(`You wanted to modify: ${taggedUser.username}`);
        
        async function updateDBStats(){
            try {
                // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
                const jucator = await HaxROUsers.create({
                    discordId: message.author.id,
                    haxballAuthKey: args[0],
                    discordUsername: message.author.username,
                    haxballName: null,
                });

                return message.reply(`Modificare cu succes: ${jucator.haxballAuthKey}`);
            
            } catch (e) {
                if (e.name === 'SequelizeUniqueConstraintError') {
                    return message.reply('Haxball Public Auth Key / Discord ID este deja inregistrat.');
                }

                return message.reply('A fost o eroare de server. Contacteaza administratorii !');
            }
        };

    }
}