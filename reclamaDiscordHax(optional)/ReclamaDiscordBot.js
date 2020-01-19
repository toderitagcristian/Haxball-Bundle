//Room config
const roomName = "[-HaxRO-] Haxball Romania Discord";
const maxPlayers = 5;
const roomPublic = true;
const playerName = "HaxRO";
const geo = {"code": "RO", "lat": 44, "lon": 26 };
const token = "thr1.AAAAAF4cdmard-HSLjS-bA.TvUMmFpAQeg";

const room = HBInit({
	roomName: roomName,
	playerName: playerName,
	//password:,
	maxPlayers: maxPlayers,
	public: roomPublic,
	geo: geo,
	token: token,
	noPlayer: false
	});
	
room.setScoreLimit(3);
room.setTimeLimit(5);
room.setTeamsLock(true);

const timeout = 2 * 60 * 1000;

room.onPlayerJoin = function(player) {
    console.log(`${player.name} - ${player.auth}`);
    setTimeout(function(){
        if ( player.id ) {
            room.kickPlayer(player.id, "https://discord.gg/rQSB7nv", false);
        }
    }, timeout);
    room.sendAnnouncement("Bine ai venit " + player.name + " !", player.id, 0xFF0000, "bold", 1);
    room.sendChat("Haxball Romania Discord Server : https://discord.gg/rQSB7nv", player.id);
    room.sendChat("Vei fi dat afara in 2 minut !", player.id);
    room.sendChat("Script realizat de **drtoothy**", player.id);
}

