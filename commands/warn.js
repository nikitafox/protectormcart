const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Вы не администратор!");
    let fpm = message.guild.member(message.mentions.members.first());
    if(!fpm) return message.channel.send(`Участник не найден!`);
    message.channel.send(`${fpm}, вы были предупреждены`);
}



module.exports.help ={
    name: "warn"
}
