const superagent = require('superagent');

exports.run = async (bot, message, _args) => {
    let {body} = await superagent.get(`https://random.dog/woof.json`);
    let dogembed = new bot.discord.MessageEmbed()
    .setColor("#01FF6D")
    .setTitle("dog :dog:")
    .setImage(body.url);
    message.channel.send(dogembed);
}

exports.help = {
    name: "dog"
}