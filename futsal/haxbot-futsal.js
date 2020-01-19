const Futsal3v3 = `{"name":"Futsal3v3 ","width":755,"height":339,"spawnDistance":310,"bg":{"type":"hockey","width":665,"height":290,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-290,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":306,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"line"},{"x":0,"y":-306,"trait":"kickOffBarrier"},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":80},{"trait":"line","x":-665,"y":-215},{"trait":"line","x":-500,"y":-50},{"trait":"line","x":665,"y":-215},{"trait":"line","x":500,"y":-50},{"trait":"line","x":-665,"y":215},{"trait":"line","x":-500,"y":50},{"trait":"line","x":665,"y":215},{"trait":"line","x":500,"y":50},{"bCoef":1,"trait":"ballArea","x":665,"y":290},{"bCoef":1,"trait":"ballArea","x":665,"y":-290},{"bCoef":0,"trait":"line","x":0,"y":290},{"bCoef":0,"trait":"line","x":0,"y":-290},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":2,"v1":12,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":6,"v1":13,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":1,"v1":14,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":5,"v1":15,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":12,"v1":14,"x":-585,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":13,"v1":15,"x":585,"color":"FFFFFF","curve":35},{"color":"FFFFFF","trait":"line","v0":16,"v1":17,"curve":90},{"color":"FFFFFF","trait":"line","v0":18,"v1":19,"curve":-90},{"color":"FFFFFF","trait":"line","v0":20,"v1":21,"curve":-90},{"color":"FFFFFF","trait":"line","v0":22,"v1":23,"curve":90},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":17,"v1":21,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":19,"v1":23,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":24,"y":290},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":25,"y":-290},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":26,"v1":27},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":10,"v1":9},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":29,"v1":28},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":30,"v1":31,"cMask":["ball"],"x":614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":32,"v1":33,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":34,"v1":35,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":36,"v1":37,"cMask":["ball"],"x":614}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"discs":[{"pos":[-665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[-665,-80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,-80],"trait":"goalPost","color":"FFFFFF","radius":5}],"planes":[{"normal":[0,1],"dist":-290,"trait":"ballArea"},{"normal":[0,-1],"dist":-290,"trait":"ballArea"},{"normal":[0,1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}`

//Room config
const roomName = "[-HaxRO-] Futsal 3x3 TESTING";
/*  
1 slot for master
1 slot for admin if none
1 slot for bot
*/
const maxPlayers = 5 + 3;
const roomPublic = false;
const playerName = "HaxRO";
const geo = {"code": "RO", "lat": 44, "lon": 26 };
const token = "";

const room = HBInit({
    roomName: roomName,
    playerName: playerName,
    //password:,
    maxPlayers: maxPlayers,
    public: roomPublic,
    geo: geo,
    //token: token,
    noPlayer: false
});

room.setCustomStadium(Futsal3v3);
room.setScoreLimit(3);
room.setTimeLimit(5);
room.setTeamsLock(true);

const credits = "Script realizat de drtoothy | Version 30 | 16.1.2020";

// Pair player.auth and player.id
let pairAuthID = {
    '9999' : '9999'
};

// Assist module
let lastPlayerTouched = "";
let lastTeamTouched = 0;
let assistingTouch = "";
let previousPlayerTouched = "";
let ballRadius = 0;
let playerRadius = 0;
let triggerDistance = 0;

// Functions

let currentMatch = null;

function Match(date, players = {}) {
    this.date = date;
    this.players = players;
};

function getAuth(idjucator) {
    for ( let jucator_auth in pairAuthID ) {
        if ( pairAuthID[jucator_auth] == idjucator ) {
            return jucator_auth
        }
    }
};

async function updateDbStats(haxAuth, stat, value) {
    
    let data = {
        stat: stat,
        value: value
    };
    
    const response = await fetch(`https://localhost:4343/users/${haxAuth}/stats`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
});

return await response.json();
};

async function findUserDb(jucator_auth) {
    return await fetch(`https://localhost:4343/users/${jucator_auth}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Either null or object
        return response.json();
    });
};

// Assist module
function pointDistance(p1, p2) {
    let d1 = p1.x - p2.x;
    let d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
};

function getLastTouchTheBall() {
    let ballPosition = room.getBallPosition();
    let players = room.getPlayerList().filter((player) => player.team != 0)
    for(let i = 0; i < players.length; i++) {
        let distanceToBall = pointDistance(players[i].position, ballPosition);
        if ( distanceToBall < triggerDistance ) {
            if ( lastPlayerTouched != players[i].name ) {
                if ( lastTeamTouched == players[i].team ) {
                    assistingTouch = lastPlayerTouched;
                }
                else assistingTouch = "";
            }
            lastTeamTouched = players[i].team;
            previousPlayerTouched == lastPlayerTouched;
            lastPlayerTouched = players[i].name;
        }
        
    }
    return lastPlayerTouched;
};

// Room triggers
room.onPlayerJoin = function(player) {
    
    room.sendAnnouncement("Bine ai venit " + player.name + " !", player.id, 0x002B7F, "bold", 2);
    room.sendAnnouncement(credits, player.id, 0xFCD116, "bold", 0);
    room.sendAnnouncement("Discord Haxball Romania : https://discord.gg/rQSB7nv", player.id, 0xFF0000, "bold", 0);
    
    // Can be "null" if not in DB
    findUserDb(player.auth)
    .then((jucator) => {
        // Either null or object
        console.log('Success findUserDb(): ', jucator);
        
        if ( jucator != null ) {
            // Allow or Deny player on room
            let allowJoin = true;
            
            // Ban attribute control
            if ( jucator.banned === 1 ) {
                room.kickPlayer(player.id, "You are banned !", true);
                allowJoin = false;
            }
            
            // Check for master slot reservation
            if ( room.getPlayerList().length == maxPlayers ) {
                if ( jucator.role != "master" ) {
                    room.kickPlayer(player.id, "Master slot reserved !", false);
                    allowJoin = false;
                }
            }
            
            // Check for admin slot reservation
            if ( room.getPlayerList().length == (maxPlayers - 1) ) {
                let anyAdminOn = room.getPlayerList().filter((player) => player.id != 0).find((player) => player.admin) != undefined;
                if ( !anyAdminOn && jucator.role == "player" ) {
                    room.kickPlayer(player.id, "Admin slot reserved !", false);
                    allowJoin = false;
                }
            }
            
            if ( allowJoin ) {
                // Duplicate online control
                if ( jucator.online === 1 && pairAuthID[player.auth] ) {
                    let oldPlayerID = pairAuthID[player.auth];
                    room.kickPlayer(oldPlayerID, `New entry detected! ${player.name}`, false);     
                }
                
                if ( jucator.role != "player" ) {
                    room.setPlayerAdmin(player.id, true);
                }
                
                pairAuthID[player.auth] = player.id;
                
                updateDbStats(player.auth, "online", 1)
                .then((dataJson) => {
                    console.log(dataJson);
                })
                .catch((error) => {
                    console.error('Error fetch post updateDbStats:', error);
                });
                
                room.sendChat(`Autentificare cu succes ${jucator.discordUsername}`);
                console.log(`[FutsalLog] : Auth ${jucator.haxballAuthKey} - ${jucator.discordUsername} - ${jucator.discordId}`);
            }
            
        } else {
            pairAuthID[player.auth] = "neinregistrat";
            room.sendChat(`Jucator neinregistrat ${player.name} !`);
            const kickTimeout = 10 * 1000;
            room.sendChat(`Pentru a putea juca, intra pe Discord pentru a te inregistra cu botul Haxball-Bot`, player.id);
            room.sendChat(`Vei primi kick in 10 secunde !`, player.id);
            setTimeout(()=>{
                if ( player.id ) {
                    room.kickPlayer(player.id, false)
                }
            }, kickTimeout);
        }
        
    })
    .catch((error) => {
        console.error('Error findUserDb() onPlayerJoin:', error);
    });
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    if ( byPlayer.id != 0 && newStadiumName != "Futsal3v3" ) {
        room.setCustomStadium(Futsal3v3);
        room.sendAnnouncement("Pe aceasta camera se joaca doar FUTSAL !", null, 0x002B7F, "bold", 2);
    }
};

room.onPlayerLeave = function (player) {
    if ( pairAuthID[getAuth(player.id)] ) {
        updateDbStats(getAuth(player.id), "online", 0).then((dataJson) => {
            console.log(dataJson);
        })
        .catch((error) => {
            console.error('Error fetch post updateDbStats onPlayerLeave:', error);
        });
    }
};

room.onTeamVictory = function (scores) {
    let playersOnField = room.getPlayerList().filter((player) => player.team != 0);
    for ( let onField of playersOnField ) {
        currentMatch.players[getAuth(onField.id)].matches += 1;
    };
    // Add win and loose stats ?
};

room.onTeamGoal = function (team) {
    let players = room.getPlayerList().filter((player) => player.team != 0);
    
    for( let i = 0; i < players.length; i++ ) {
        if ( players[i].name == lastPlayerTouched ) {
            if( players[i].team == team ) {
                if ( players[i].name != assistingTouch && assistingTouch != "") {
                    room.sendAnnouncement("GOL GOL GOOOOOOOOOOL GOLAZZO dat de " + players[i].name + " || Assist de " + assistingTouch, null, 0xFFFF00, "bold", 1);
                    currentMatch.players[getAuth(players[i].id)].goals++;
                    let assistPlayer = players.find(player => player.name == assistingTouch);
                    currentMatch.players[getAuth(assistPlayer.id)].assist++;
                    assistingTouch = "";
                    lastPlayerTouched = "";
                    
                } else {
                    room.sendAnnouncement("GOL GOL GOOOOOOOOOOL GOLAZZO dat de " + players[i].name, null, 0xFFFF00, "bold", 1);
                    currentMatch.players[getAuth(players[i].id)].goals++;
                    assistingTouch = "";
                    lastPlayerTouched = "";
                }
            } else {
                room.sendAnnouncement("INCREDIBIL  - Autogol dat de " + players[i].name + " || Assist de ..." + assistingTouch, null, 0xFFFF00, "bold", 1);
                assistingTouch = "";
                lastPlayerTouched = "";
            }
        }
    }
    
}

room.onGameStart = function(byPlayer) {
    let playersOnField = room.getPlayerList().filter((player) => player.team != 0);
    
    if ( playersOnField.length > 0) {
        playerRadius = room.getPlayerDiscProperties(playersOnField[0].radius) || 15;
        ballRadius = room.getDiscProperties(0).radius || 10;
        triggerDistance = ballRadius + playerRadius + 0.01;
        
        currentMatch = new Match(Date.now());
        for ( let onField of playersOnField ) {
            currentMatch.players[getAuth(onField.id)] = {
                goals : 0,
                assists: 0,
                matches: 0
            }
        };
    } else {
        room.stopGame();
        room.sendChat("Nu se poate incepe meciul fara jucatori !");
    };
};

room.onGameStop = function(byPlayer) {
    if ( currentMatch != null ) {
        // Update stats on database
        for (let [key, value] of Object.entries(currentMatch.players)) {
            for (let [key2, value2] of Object.entries(value)) {
                findUserDb(key)
                .then(jucator => {
                    if ( jucator != null ) {
                        let newValue = value2 + jucator[key2]
                        updateDbStats(key, key2, newValue);
                    };
                })
                .catch((error) => {
                    console.error('Error findUserDb() onGameStop:', error);
                });
            }
        }
    }
};

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
    // Prevent "neinregistrat" from playing && moving HaxRO
    if ( changedPlayer.id == 0 || pairAuthID[getAuth(changedPlayer.id)] == "neinregistrat" ) {
        room.setPlayerTeam(changedPlayer.id, 0);
    };    
};

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
    let kickedAuth = getAuth(kickedPlayer.id);
    
    if ( byPlayer.id != 0 && kickedAuth && kickedAuth != "neinregistrat" ) {
        findUserDb(kickedAuth)
        .then(jucator => {
            if ( jucator.role != "player" ) {
                let violation = {
                    byPlayer: [getAuth(byPlayer.id), byPlayer.name],
                    kickedPlayer: [getAuth(kickedPlayer.id), kickedPlayer.name]
                };
                console.log(`Admin violation onPlayerKicked: `, violation);
                room.clearBan(kickedPlayer.id);
                room.kickPlayer(byPlayer.id, 'Cannot KICK / BAN Admins !', false);
            } else {
                updateDbStats(kickedAuth, "banned", 1);
                room.kickPlayer(kickedPlayer.id, 'Permanently Banned !', true);
            }
            
        })
        .catch(error => {
            console.error('Error findUserDb() onPlayerKicked:', error);
        });
    }
};

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
    let changedAuth = getAuth(changedPlayer.id);
    
    if ( byPlayer.id != 0 && changedAuth == "neinregistrat" ) {
        room.setPlayerAdmin(changedPlayer.id, false);
        room.sendChat(`Membru neinregistrat: nu poate fi admin !`);
    };
    
    if ( byPlayer.id != 0 && changedAuth && changedAuth != "neinregistrat" ) {
        findUserDb(changedAuth)
        .then(jucator => {
            if ( jucator.role == "player" ) {
                room.setPlayerAdmin(changedPlayer.id, false);
                let violation = {
                    byPlayer: [getAuth(byPlayer.id), byPlayer.name],
                    changedPlayer: [getAuth(changedPlayer.id), changedPlayer.name]
                };
                console.log(`Admin violation onPlayerAdminChange: `, violation);
            } else {
                room.setPlayerAdmin(changedPlayer.id, true);
                let violation = {
                    byPlayer: [getAuth(byPlayer.id), byPlayer.name],
                    changedPlayer: [getAuth(changedPlayer.id), changedPlayer.name]
                };
                console.log(`Admin violation onPlayerAdminChange: `, violation);
            }
        })
        .catch(error => {
            console.error('Error findUserDb() onPlayerAdminChange:', error);
        });
    };
};

room.onPlayerBallKick = function(player) {
    if ( player.name != lastPlayerTouched ) {
        if ( lastTeamTouched == player.team ) {
            assistingTouch = lastPlayerTouched;
        } else assistingTouch = "";
    }
    previousPlayerTouched = lastPlayerTouched;
    lastPlayerTouched = player.name;
    lastTeamTouched = player.team;
};

room.onGameTick = function() {
    getLastTouchTheBall();
};

room.onPlayerChat = function(player, message) {
    message = message.split(/ +/);
    //Mute "neinregistrat" + prevent spam bots
    if ( pairAuthID[getAuth(player.id) == "neinregistrat" ] ) {
        room.sendChat("You are muted. Register first !", player.id);
        return false;
    }
    else if (["!help"].includes(message[0].toLowerCase())) {
        room.sendChat("Comenzi player : !stats, !version", player.id);
        player.admin ? room.sendChat("Comenzi admin : !admin", player.id) : null;
    }
    else if (["!version"].includes(message[0].toLowerCase())) {
        room.sendChat(credits, player.id);
    }
    
    else if (["!stats"].includes(message[0].toLowerCase())) {
        findUserDb(getAuth(player.id))
        .then(jucator => {
            room.sendChat(`GamesPlayed / Goals / Assists : ${jucator.matches} / ${jucator.goals} / ${jucator.assists}`, player.id);
        })
        .catch(error => {
            console.error('Error findUserDb() onPlayerChat:', error);
        });
        
    }
    
    if ( player.admin ) {
        if (["!admin"].includes(message[0].toLowerCase())) {
            room.sendChat("Admin Tools : !password <password> / Sets room password", player.id);
            room.sendChat("Admin Tools : !clearpass / Removes room password", player.id);
            room.sendChat("Admin Tools : !teamcolor <red/blue> <angle> <textColor> <color1> <color2> <color3> / Set team color. 1 to 3 colors can be used", player.id);		
        }
        else if (["!password"].includes(message[0].toLowerCase())) {
            if (message.length != 2) {
                room.sendChat("[RS] Comanda incorecta. Vezi !admin.",player.id);
            }
            else {
                room.setPassword(message[1]);
                room.sendAnnouncement(`[RS] Room password is set to ${message[1]}!`, null, 0x03FCDB, "bold", 1);
            }
        }
        else if (["!clearpass"].includes(message[0].toLowerCase())) {
            room.setPassword(null);
            room.sendAnnouncement("[RS] Room password is cleared !", null, 0x03FCDB, "bold", 1);
        }
        else if (["!teamcolor"].includes(message[0].toLowerCase())) {
            if (message.length < 4) {
                room.sendChat("[RS] Comanda incorecta. Vezi !admin.", player.id);
            } else {
                let arg1 = 0;
                if ( message[1] == "red" ) {
                    arg1 = 1;
                } else {
                    arg1 = 2;
                }
                let arg2 = [];
                for (let i =4 ; i< message.length; i++) {
                    arg2.push(parseInt(message[i], 16));
                }
                room.setTeamColors(arg1, parseFloat(message[2]), parseInt(message[3],16), [...arg2]);
            }
        }
    }
};