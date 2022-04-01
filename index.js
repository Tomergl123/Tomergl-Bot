const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTU5MjQ0MjU3MTIwNjQxMDU0.YkZD1A.DJp5mgg4vSRdZSDcI0fKD3OGasQ"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.on("message", message => {
    if (message.content == "Hi"){
        message.reply("Hello!")
    }
})

client.login(process.env.TOKEN)