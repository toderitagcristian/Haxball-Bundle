# Haxball-Bundle

### Introduction
This is a boilerplate for Haxball game to build a full stack web application using React, Node.js, Express, Sequelize(sqlite) and Webpack. It is also configured with webpack-dev-server, eslint, prettier and babel.

It is based on Haxball API and enhances gameplay, statistics and adds an authentication system (not provided by haxball API).
More API info : https://github.com/haxball/haxball-issues/wiki/Headless-Host

0Auth implemented with Discord API.

I am using [pm2](https://www.npmjs.com/package/pm2) to run discord bot, express backend and also run puppeteer to open a haxball room.
Check out the **ecosystem.config.js** file

### Development mode
Front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading.
Other modules run as before with [pm2](https://www.npmjs.com/package/pm2).
### Production mode
All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.
Make sure to use **npm run build** to bundle client files.
### Dependencies
I think 2-3 of them are not required, but rather optional.
### Installation
> #Clone the repository
>git clone https://github.com/ToderitaGeorgeCristian/Haxball-Bundle.git

> #Install dependencies
npm install

> #Start client development
>npm run client

> #Build for production
>npm run build

> #Other options
> Look in **package.json** file

### Warning
Careful when switching between production and development.
Links, "proxy" attribute in package.json etc ...