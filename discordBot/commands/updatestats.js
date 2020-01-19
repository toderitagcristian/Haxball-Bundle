const HaxROUsers = require('../../database-init');

module.exports = {
	name: 'updatestats',
    description: `Modify stat-value on database.`,
    master: true, 
    args: true,
	cooldown: 5,
	dmOnly: false,
	usage: '@mention <stat> <value>',
    execute(message, args) {
        if (!message.mentions.users.size) {
			return message.reply('Use @user to modify them !');
		}

        const taggedUser = message.mentions.users.first();
        let values = {};
        values[args[1]] = args[2];
        console.log(values);

        message.channel.send(`You wanted to modify: ${taggedUser.username} - ${taggedUser.id}`);
        
        async function updateDBStats(){
            try {
                const affectedRows = await HaxROUsers.update(values, { where: { discordId: taggedUser.id } });
                if (affectedRows > 0) {
	                return message.reply(`Jucatorul modificat: ${taggedUser.username} - ${args[1]} - ${args[2]}`);
                }
                return message.reply(`Jucator inexistent: ${taggedUser.username} - ${taggedUser.id}.`);

            } catch (e) {
                console.log(`Catch error la updatestats: `,e);     
                return message.reply('A fost o eroare de server. Contacteaza administratorii !', e);
            }
        };

        updateDBStats();

    }
}