module.exports = {
  apps: [{
    name: 'HaxballDiscordBot',
    script: './discordBot/discordbot.js',
    watch: false,
    watch_delay: 1000,
    watch_options: {
      followSymlinks: false
    },
    error_file: './discordBot/DiscordLogs/errDiscord.log',
    out_file: './discordBot/DiscordLogs/outDiscord.log',
    time: true
  },
  {
    name: 'ExpressApi',
    script: './expressApi/bin/www',
    watch: false,
    watch_delay: 1000,
    watch_options: {
      followSymlinks: false
    },
    error_file: './expressApi/err.log',
    out_file: './expressApi/out.log',
    time: true
  },
  {
    name: 'FutsalBot',
    script: './futsal/StartFutsal.js',
    watch: false,
    error_file: './futsal/err.log',
    out_file: './futsal/out.log',
    time: true
  }]
};
