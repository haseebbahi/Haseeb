const fs = require("fs");
module.exports.config = {
  name: "gnd",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gand de") ||
     react.includes("GAND DE") || react.includes("GND DO") || react.includes("Gand de") ||
react.includes("gnd do") ||
react.includes("GAND DO")) {
    var msg = {
        body: `CAHAL BOSDIKE SALE TU KHUD GANDU HAI TO KYA MUJHE BHI APNA THARA SAMJHA KHOSRY KAHI KA😐😒👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }