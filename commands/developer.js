const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.reply(`Привет я бот ${bot.user.username}, меня сделал MCArTyR (Идея от _vaenyX_#7280)!`);
}

module.exports.help = {
    name: "developer"
}
