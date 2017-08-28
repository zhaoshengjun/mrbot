// import builder from "botbuilder";
const builder = require("botbuilder");

const connector = new builder.ConsoleConnector();

connector.listen();
const bot = new builder.UniversalBot(connector, session => {
  session.send("You said: " + session.message.text);
});
