const HaxROUsers = require('../../database-init');

module.exports = {
	name: 'register',
    description: `Inregistrare cu Haxball Auth Key pentru a putea juca pe camerele HaxRO.
    Gasiti Haxball Public Auth Key pe https://www.haxball.com/playerauth.
    Sa faceti backup intr-un fisier la Public ID si Private Key !
    **Exemplu**: !register 2394891739402`,
    master: false,
    args: true,
	cooldown: 5,
	dmOnly: true,
	usage: '<haxball public auth key>',
	execute(message, args) {
        message.channel.send(`Se incearca inregistrarea ${args[0]} ...`);
        
        async function newRegister(){
            try {
                // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
                const jucator = await HaxROUsers.create({
                    discordId: message.author.id,
                    haxballAuthKey: args[0],
                    discordUsername: message.author.username,
                });

                return message.reply(`Inregistrarea cu succes: ${jucator.haxballAuthKey}`);
            
            } catch (e) {
                if (e.name === 'SequelizeUniqueConstraintError') {
                    return message.reply('Haxball Public Auth Key / Discord ID este deja inregistrat.');
                }
                console.log(`Catch error la register: `,e);
                return message.reply('A fost o eroare de server. Contacteaza administratorii !');
            }
        };
        
        newRegister();
    } 
};
