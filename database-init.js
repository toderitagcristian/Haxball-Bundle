const path = require('path');

const Sequelize = require('sequelize');

const sequelize = new Sequelize('HaxROdatabase', 'HaxROsuperAdmin', 'HaxROuberpassword312@', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  // SQLite only
  storage: path.join(__dirname, 'HaxROdb.sqlite'),
});

sequelize
  .authenticate()
  .then(() => {
    console.log('[Express] Connection to database has been established successfully.');
  })
  .catch((err) => {
    console.error('[Express] Unable to connect to the database:', err);
  });

const HaxROUsers = sequelize.define('haxrojucatori', {
  discordId: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false
  },
  haxballAuthKey: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: false
  },
  discordUsername: Sequelize.TEXT,
  banned: {
    type: Sequelize.INTEGER,
    defaultValue: 0 // Sqlite boolean to numbers
  },
  role: {
    type: Sequelize.TEXT,
    defaultValue: 'player'
  },
  goals: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  assists: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  matches: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  online: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

sequelize.sync().then(() => {
  console.log('[Sequelize] All tables / models synced !');
}).catch((error) => {
  console.log('[Sequelize] Error on sync !', error);
});

module.exports = HaxROUsers;
