const fs = require("fs");
module.exports.config = {
	name: "idname",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by Arun", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bot ki id ko mention kro ya uska naam lo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hanzu")==0 || event.body.indexOf("HANZALA")==0 || event.body.indexOf("hanzala")==0 || event.body.indexOf("𓆩𝐇𝐀𝐍𝐙𝐔𓆪 𓆣 »❯")==0) {
		var msg = {
				body: "✨● Hy ☆ मे एक बोट हु  𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱. 👈🏻 use #help2 for commands ✨\n🌹𝐌𝐚𝐝𝐞 𝐛𝐲─━━◉❖ ⃝𝐎𝐖𝐍𝐄𝐑 ⸙𓆩𝐇𝐀𝐍𝐙𝐔𓆪 𓆣 »❯❖◉━━─😊💫",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
