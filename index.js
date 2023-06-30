require("dotenv").config();

const Discord = require("discord.js-selfbot-v13");

let rpc = new Discord.RichPresence();
var _0x91e0 = [
  "\x53\x54\x52\x45\x41\x4D\x49\x4E\x47",
  "\x73\x65\x74\x54\x79\x70\x65",
  "\x31\x73\x54\x2D\x53\x65\x72\x76\x69\x63\x65\x73",
  "\x73\x65\x74\x4E\x61\x6D\x65",
  "\x73\x65\x74\x44\x65\x74\x61\x69\x6C\x73",
  "\x6E\x6F\x77",
  "\x73\x65\x74\x53\x74\x61\x72\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70",
  "\x31\x30\x32\x34\x39\x34\x34\x38\x31\x35\x35\x36\x37\x32\x38\x32\x31\x37\x36",
  "\x73\x65\x74\x41\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x49\x64",
  "\x67\x65\x74\x55\x55\x49\x44",
  "\x73\x65\x74\x50\x61\x72\x74\x79",
  "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x31\x73\x74\x2D\x64\x65\x76\x2D\x73\x65\x72\x76\x69\x63\x65\x73\x2D\x39\x35\x32\x35\x37\x30\x31\x30\x31\x37\x38\x34\x32\x38\x31\x31\x33\x39",
  "\x61\x64\x64\x42\x75\x74\x74\x6F\x6E",
];
rpc[_0x91e0[1]](_0x91e0[0]);
rpc[_0x91e0[3]](_0x91e0[2]);
rpc[_0x91e0[4]](_0x91e0[2]);
rpc[_0x91e0[6]](Date[_0x91e0[5]]());
rpc[_0x91e0[8]](_0x91e0[7]);
rpc[_0x91e0[10]]({ max: 9, current: 6, id: Discord[_0x91e0[9]]() });
rpc[_0x91e0[12]](_0x91e0[2], _0x91e0[11]);

////////////////////////////////////////////////////////
///////The only thing that you should be touching///////
////////////////////////////////////////////////////////
rpc.setState("some_text_here"); //main heading text
rpc.setAssetsLargeText("some_text_here"); //large text
rpc.setAssetsSmallText("some_text_here"); //small text
rpc.setURL("watch_button_link_here"); //watch button
rpc.addButton("Exmple_button", "button_link_here"); // some button
rpc.setAssetsLargeImage("discord_image_link_here"); //large image
rpc.setAssetsSmallImage("discord_image_link_here"); //small image
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const { joinVoiceChannel } = require("@discordjs/voice");

const express = require("express");
const app = express();
const port = 443;

app.get("/", (req, res) => {
  res.send(
    `\x3C\x6D\x65\x74\x61\x20\x68\x74\x74\x70\x2D\x65\x71\x75\x69\x76\x3D\x22\x72\x65\x66\x72\x65\x73\x68\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x3D\x22\x30\x3B\x20\x55\x52\x4C\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6D\x65\x2E\x31\x73\x74\x2D\x64\x65\x76\x2E\x72\x65\x70\x6C\x2E\x63\x6F\x22\x2F\x3E`
  );
});

app.listen(port, () => console.log(`Web server ready`));

let client = new Discord.Client({ checkUpdate: true, patchVoice: true });

client.login(process.env.Token).catch((err) => {
  console.log(`❌ :: ${err}`);
});

client.on("ready", async () => {
  client.user.setActivity(rpc);
  console.log(`✅ :: Connected as : ${client.user.username}`);

  let channel_id = process.env.Channel;

  if (channel_id) {
    const channel = client.channels.cache.get(channel_id);
    if (channel) {
      const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
        selfMute: false,
        selfDeaf: false,
      });
      if (connection) console.log(`✅ :: Joined ${channel.name}`);
    }
    console.log(`❌ :: Provide a valid channel ID if you want me to join VC`);
  }
});

setInterval(async () => {
  if (!client.isReady()) process.kill(1);
  await client.checkUpdate();
}, 15000);

client.on("update", async (x, y) => {
  if (x !== y) {
    console.log(`> Update required : [ ${x} -> ${y} ] `);
    console.log(`> Run this in shell to update :`);
    console.log(`> npm i discord.js-selfbot-v13@latest`);
  }
});
