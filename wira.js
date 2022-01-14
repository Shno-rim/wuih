const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const crypto = require('crypto')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');

const Exif = require('./lib/exif');
const exif = new Exif();
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp');

const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { simih } = require('./lib/functionss')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");

const _sewa = require("./lib/sewa");

var kuis = false
hit_today = []
ner = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

const simple = require('./lib/simple.js')
let errorImg = 'https://i.ibb.co/GR4y4Mq/b3ec6b1bd4c4.jpg'
let setting = JSON.parse(fs.readFileSync('./options.json'))
banChats = true;
owner = setting.owner
ownerNNao = setting.ownerNNao
ownerNSagiri = setting.ownerNSagiri
gamewaktu = setting.gamewaktu

let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let nsfw = JSON.parse(fs.readFileSync('./lib/nsfw.json'))
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
let adm = JSON.parse(fs.readFileSync('./database/user/admin.json'))
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))

let tebakanime = JSON.parse(fs.readFileSync('./others/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./others/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./others/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./others/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./others/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./others/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./others/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./others/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./others/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./others/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./others/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./others/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./others/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./others/tebaktebakan.json'))
let family100 = [];

const samih = JSON.parse(fs.readFileSync('./others/simi.json'))

const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}




const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = shino = async (shino, shin) => {
	try {
        if (!shin.hasNewMessage) return
        shin = shin.messages.all()[0]
		if (!shin.message) return
		if (shin.key && shin.key.remoteJid == 'status@broadcast') return
		if (shin.key.id.startsWith('3EB0') && shin.key.id.length === 12) return
		const { Functions }= require('./lib/functions.js');
       global.ner
		global.blocked
		shin.message = (Object.keys(shin.message)[0] === 'ephemeralMessage') ? shin.message.ephemeralMessage.message : shin.message
        const { text, extendedText, contact, location, liveLocation, bin, jimp, thumbnail, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(shin.message)
		const from = shin.key.remoteJid
		const type = Object.keys(shin.message)[0]        
        const cmd = (type === 'conversation' && shin.message.conversation) ? shin.message.conversation : (type == 'imageMessage') && shin.message.imageMessage.caption ? shin.message.imageMessage.caption : (type == 'videoMessage') && shin.message.videoMessage.caption ? shin.message.videoMessage.caption : (type == 'extendedTextMessage') && shin.message.extendedTextMessage.text ? shin.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = '!'
  
			
          body = (type === 'conversation' && shin.message.conversation.startsWith(prefix)) ? shin.message.conversation : (type == 'imageMessage') && shin.message[type].caption.startsWith(prefix) ? shin.message[type].caption : (type == 'videoMessage') && shin.message[type].caption.startsWith(prefix) ? shin.message[type].caption : (type == 'extendedTextMessage') && shin.message[type].text.startsWith(prefix) ? shin.message[type].text : (type == 'listResponseMessage') && shin.message[type].singleSelectReply.selectedRowId ? shin.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && shin.message[type].selectedButtonId ? shin.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(shin.message[type].fileSha256.toString('base64')) !== null && getCmd(shin.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(shin.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? shin.message.conversation : (type === 'extendedTextMessage') ? shin.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
       budy = (type === 'conversation') ? shin.message.conversation : (type === 'extendedTextMessage') ? shin.message.extendedTextMessage.text : ''
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./others/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
  
 global.prefix
  
  
        const botNumber = shino.user.jid
        const ownerNumber = setting.ownerNumber
        const ownerNao = setting.ownerNao
		const ownerSagiri = setting.ownerSagiri
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? shin.participant : shin.key.remoteJid
		let senderr = shin.key.fromMe ? shino.user.jid : shin.key.remoteJid.endsWith('@g.us') ? shin.participant : shin.key.remoteJid
		const totalchat = await shino.chats.all()
		
		const groupMetadata = isGroup ? await shino.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = shin.key.fromMe ? shino.user.jid : shino.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = shin.key.fromMe ? shino.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && shin.message.extendedTextMessage.contextInfo != null ? shin.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && shin.message.extendedTextMessage.contextInfo != null ? shin.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ner){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isBanned = ban.includes(sender)
        const isAdmin = adm.includes(sender)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : false
      const isSimi = isGroup ? samih.includes(from) : false
      
       let d = new Date
       let locale = 'id'
       let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
			let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
			let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })


        selectedButton = (type == 'buttonsResponseMessage') ? shin.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? shin.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { 
            let po = shino.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return shino.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      shino.sendMessage(from, teks, text, {quoted:shin})
        }
        const sendMess = (hehe, teks) => {
           shino.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? shino.sendMessage(from, {text: teks.trim()}, extendedText, { contextInfo: { "mentionedJid": memberr } }) : shino.sendMessage(from, {text: teks.trim()}, extendedText, { quoted: shin, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           shino.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return shino.sendMessage(from, teks, text, {quoted: shin})
        }
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       shino.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await shino.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = shino.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await shino.groupRemove(to, [i])
        } else {
           await shino.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       shino.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       shino.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: shin})
}
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           shino.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:shin})
           fs.unlinkSync(asw)
});
});
});
}

var download = function(uri, filename, callback) {
var request = require('request');
request.head(uri, function(err, res, body) {
console.log('content-type:', res.headers['content-type']);
console.log('content-length:', res.headers['content-length']);
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};

const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await shino.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
shino.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await shino.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
shino.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const isRegistered = checkRegisteredUser(sender)

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      shino.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    

       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           shino.sendMessage(to, media, type, {quoted: shin, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       shino.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       shino.sendMessage(from, hasil, type, options).catch(e => {
	       shino.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await shino.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = shino.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await shino.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
}
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            }) 
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await shino.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = shino.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await shino.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = shino.contacts[from] != undefined ? shino.contacts[from].vname || shino.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
const isImage = (type === 'imageMessage')
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
        
        shino.chatRead(from, "read")

       
        if (isGroup && !shin.key.fromMe && !level.isGained(sender)) {
       try {
        level.addCooldown(sender)
        const checkATM = atm.checkATMuser(sender, _uang)
        if (checkATM === undefined) atm.addATM(sender, _uang)
        const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
        atm.addKoinUser(sender, uangsaku, _uang)
        const currentLevel = level.getLevelingLevel(sender, _level)
        const amountXp = Math.floor(Math.random() * (437 - 49 + 39) + 98)
        const requiredXp = 1200 * Math.pow(currentLevel, 2) + 2912 * currentLevel + 1988
        level.addLevelingXp(sender, amountXp, _level)
        if (requiredXp <= level.getLevelingXp(sender, _level)) {
        level.addLevelingLevel(sender, 1, _level)
        const userLevel = level.getLevelingLevel(sender, _level)
        const fetchXp = 1200 * Math.pow(userLevel, 2) + 2912 * userLevel + 1988
        reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} \n *Note* : yang spam level nya tidak akan masuk ke database`)
 } 
        } catch (err) {
        console.error(err)
 }
 }
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const { quotedMsg, isQuotedMsg, isBaileys } = shin
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isVideo = (type === 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isListMsg = (type == 'listResponseMessage')
       const isQuotedemage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
        const isQuotediudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
        const isQuotedoideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
        const isQuotedpticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false

      const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                shino.groupRemove(from, [sender])
            }
        }
        
             _sewa.expiredCheck(shino, sewa)
             
 
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
    
             game.cekWaktuFam(shino, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                shino.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./others/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./others/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./others/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./others/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./others/tebakata.json", JSON.stringify(tebakata))
                }
            }
            const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./others/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					shino.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			
		
			let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 1200 * Math.pow(Levelnye, 2) + 2912 * Levelnye + 1988
			ind = {
				wait: `⌛ Sedang di Prosess ⌛`,
				success: `✔️ Berhasil ✔️`,
				levelnol: `*LEVEL KAKAK KOK MASIH * 0 >_<`,
				me: `「 *REMOTE* 」Fitur Ini khusus Nomor Yang Di Scan.`,
				error: {
					stick: `❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌`,
					Iv: `❌ Link tidak valid ❌`
				},
				only: {
					}
			}
			

let neor = await getBuffer(`https://telegra.ph/file/a45f7cce2bf49de22937e.jpg`)
fakelink = (tekslink) => { 
	return {"externalAdReply": { "title": tekslink, "thumbnail": neor, "sourceUrl": "https://wa.me/qr/UCVMNO2VLMDBK1" }}
}

	if (isGroup) {
		if (!shin.key.fromMe && banChats === false) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./others/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
        shino.chatRead(from, "read")
        
        
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
        if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./others/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    shino.sendMessage(from, teks, text, {quoted: shin })
}          if (!shin.key.fromMe && banChats === false) return
	              
           
switch (command) {

case 'ytmp3':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
           
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
if (Number(res[0].size) >= 10) return sendMediaURL(from, res, 
`
*Data Berhasil Didapatkan!*
Title : ${title}
Kualitas* : 720p
Size* : ${filesizeF}
Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)
            result = `
*Data Berhasil Didapatkan!*
Title : ${res[0].judul}
Ext : MP3
Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: shin}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: shin, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
            
        case 'antilink':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('anti link berhasil di aktifkanl')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('anti link berhasil di nonaktifkan')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
           
     case 'ytmp4':
     case 'ythd':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
           
            if (args.length === 0) return reply(`Kirim perintah !ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 15000) return sendMediaURL(from, thumb, 
`
*Data Berhasil Didapatkan!*
Title : ${title}
Kualitas* : 720p
Size* : ${filesizeF}
Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`
*Data Berhasil Didapatkan!*
Title : ${title}
Kualitas : 720p
Size : ${filesizeF}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break

 case 'owner':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				teks = 'This is list of owner number :\n'
				for (let benn of ownerNumber) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
				shino.sendMessage(from, teks.trim(), extendedText, {quoted: shin, contextInfo: {"mentionedJid": ownerNumber}})
				break
	
        case 'ownernero':
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    sendKontak(from, `${owner}`, `${ownerName}`, 'Owner Bot Ｎｅｒｏ')
               await sleep(1000)
               break      
               
               case 'wiryy':
            waifu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/pinsearch?q=waifu&apikey=dappakntlll`)
            await shino.sendMessage(from, waifu, image, { quoted: shin, caption: 'bruh' })
            break
               
               case 'ownernao':
         if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    sendKontak(from, `${ownerNNao}`, `${ownerNao}`, 'Owner Bot Nao')
               await sleep(1000)
               break      
               
             case 'getpic':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (shin.message.extendedTextMessage === null || shin.message.extendedTextMessage === undefined) {
               linkpp = await shino.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               shino.sendMessage(from, buffer, image, {caption: "Nih", quoted: shin })
               } else if (shin.message.extendedTextMessage.contextInfo.mentionedJid === null || shin.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = shin.message.extendedTextMessage.contextInfo.participant
               linkpp = await shino.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               shino.sendMessage(from, buffer, image, { quoted: shin, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (shin.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = shin.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await shino.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               shino.sendMessage(from, buffer, image, { quoted: shin, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
               
               case 'google':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=6f71d29574a942c4a13fa2c00062d5f2&url=http://google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
} 
               shino.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : shin})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
               
           case 'get':
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
               
            case 'ban':
				if (!isAdmin) return reply('*ONLY BOT ADMIN*')
				mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = body.slice(5)
				ban.push(mentioned[0])
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : ${mentioned[0]}`)
				break
		case 'unban':
				if (!isAdmin) return reply('*ONLY BOT ADMIN*')
				mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = body.slice(7)
				ban.splice(mentioned[0])
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor ${mentioned[0]} telah di unban!`)
				break
				
				case 'admin':
				if (!isOwner) return reply(mess.only.owner)
				mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
				admm = body.slice(7)
				adm.push(mentioned[0])
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot ${mentioned[0]}`)
				break
                case 'unadmin':
                mentioned = shin.message.extendedTextMessage.contextInfo.mentionedJid
				if (!isOwner) return reply(mess.only.owner)
				admm = body.slice(9)
				adm.splice(mentioned[0])
				fs.writeFileSync('./database/user/admin.json', JSON.stringify(adm))
				reply(`Berhasil menghapus admin bot ${mentioned[0]}`)
				break
                case 'linkgroup':
                 case 'linkgc':
                  case 'linkgrup':
                   case 'gruplink':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await shino.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'banlist':
                case 'listban':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				shino.sendMessage(from, teks.trim(), extendedText, {quoted: shin, contextInfo: {"mentionedJid": ban}})
				break
				
				 case 'BA':
				 case 'botadmin':
				 case 'listadmin':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				teks = 'This is list of bot admin number :\n'
				for (let benn of adm) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${adm.length}`
				shino.sendMessage(from, teks.trim(), extendedText, {quoted: shin, contextInfo: {"mentionedJid": adm}})
				break
				
				case 'listuser':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				shino.updatePresence(from, Presence.composing) 
				teks = 'This is list of user number :\n'
				for (let benn of register) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${register.length}`
				shino.sendMessage(from, teks.trim(), extendedText, {quoted: shin, contextInfo: {"mentionedJid": register}})
				break
				
	case 'unblock':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isAdmin) return reply('*Only Admin bot*')
				if (!'628') return reply ('nomor?')
				    shino.blockUser (`${body.slice(10)}@c.us`, "remove")
					shino.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
     case 'block':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isAdmin) return reply('*Only Admin bot*')
					if (!'628') return reply ('nomor?')
				if (!isAdmin) return reply('*Only Admin bot*')
				    shino.blockUser (`${body.slice(10)}@c.us`, "add")
					shino.sendMessage(from, `*Perintah Diterima, MemBlockir* ${body.slice(9)}@c.us`, text)
					break
               	
               	case 'ongoing':              
               o = await onGoing()
               console.log(o)
               ot = '*Ｏｔａｋｕｄｅｓｕ Ｏｎｇｏｉｎｇ*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n*Judul :* ${o[i].judul}\n*Url :* ${o[i].url}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n=_=_=_=_=_=_=_=_=_=_=_=_=\n`
}
               buff = await getBuffer(o[0].thumb)
               await shino.sendMessage(from, buff, "imageMessage", { thumbnail,bin,jimp,image: buff, caption: ot, quoted: shin})
                   break
              
        case 'mediafire':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `
*Data Berhasil Didapatkan!*

Nama : ${res[0].nama}
Ukuran : ${res[0].size}
Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: shin})
             break
               
                   case 'tovideo':
               if ((isMedia && !shin.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(shin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : shin
               mediaaa = await shino.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               shino.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: shin, caption: `seiko shita`})
               fs.unlinkSync(mediaaa)
               } else {
               reply('terjadi kesalahan')
}
               break
               
               case 'tictactoe':
        case 'ttt':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (shin.message.extendedTextMessage === undefined || shin.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = shin.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ner.push({player1,player2,id,angka,gilir})
           shino.sendMessage(from, 
`Memulai Game Tictactoe

@${player2.split('@')[0]} Anda di tantang bertanding tictactoe
ketik y untuk menerima atau ketik n untuk menolak`, text, {contextInfo: {mentionedJid: [player2]}})
     
     gameAdd(sender, glimit)
               break
               case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await shino.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              shino.sendMessage(from, await getBuffer(pic), image, {quoted: shin, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*TAG ALL*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall': // Anti Banned
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              shino.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':                
       if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(shino.chats.get(ido).presences), shino.user.jid]
             shino.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: shin, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'sider':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await shino.messageInfo(from, shin.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, false)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
               
               
        case 'd':
        case 'del':
        case 'delete':
if (isBanned) return reply('Maaf kamu sudah terbenned!') // MR.CYSER
               try {
               if (shin.message.extendedTextMessage === undefined || shin.message.extendedTextMessage === null) return reply('Reply chat bot')
               shino.deleteMessage(from, {id: shin.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
               
          case 'welcome':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`_sukses mengaktifkan mode mute di group ini_`)
               break
               case 'unmute':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               anu = mute.indexOf(from)              
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`_sukses menonaktifkan mode mute di group ini_`)
               break
               
               case 'swm':
if (isMedia && !shin.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : shin
if(!q)return reply(`Example : ${prefix + command} nama|author`)
let media = await shino.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = q.split('|')[0]
var author = q.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
shino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: shin})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && shin.message.videoMessage.fileLength < 10000000 || isQuotedVideo && shin.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : shin
var pembawm = body.slice(9)
let media = await shino.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(monospace(mess.wait))
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
shino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: shin})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else{
reply(`Format Error!*\n\n*Example :*\n*_Reply gambar/video dengan Caption ${prefix + command} Nama|Author_`)
}
break 
               
               case 'ownersagiri':
         
                    sendKontak(from, `${ownerNSagiri}`, `${ownerSagiri}`, 'Owner Bot Sagiri')
               await sleep(1000)
               break      
               
               case 'owner':
               if (isBanned) return reply('Maaf kamu sudah terbenned!')
               list = []
               listmenu = [`ownernero`,`ownernao`,`ownersagiri`]
               listmenuu = [`Owner Nero`,`Owner Nao`,`Owner Sagiri`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Mastah ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `*Owner*`,  `list mastah`, list)
               break
               
            case 'random':
           const ran = Math.floor(Math.random() * (437 - 49 + 39) + 98)
           
              reply(`${ran}`)
              break
               
      case 'groupshino':
      case 'groupserina':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
      reply ('https://chat.whatsapp.com/IfJzQDoD9DO9CpDe9bXqSy')
      break
      
     case 'level': 
              if (!isGroup) return reply(mess.only.group)
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 1200 * Math.pow(userLevel, 2) + 2912 * userLevel + 1988
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await shino.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=${setting.lolkey}&img=${profilePic}&background=https://telegra.ph/file/cd8132a44e735bb7e3d9f.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `=_=_=_=_=_=_=_=_=_=_=_=_=\n*Nama :* ${pushname}\n*Xp :* ${userXp} / ${requiredXp}\n*Level :* ${userLevel}\n*Rank*: *${userRank}*\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              buttons = [{buttonId: `!shop`,buttonText:{displayText: `SHOP🛒`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText: `${teks}`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
         break
         
        case 'mh':
        if (isBanned) return reply('Maaf kamu sudah terbenned!')
   reply('fitur Monster Hunter belum tersedia')
   break
       case 'me':
       case 'profile':
       if (isBanned) return reply('Maaf kamu sudah terbenned!')
              try {
              profil = await shino.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await shino.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = shino.user
              uptime = process.uptime()
              profile = `\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* !\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\n*Double XP* : Undefined \n*Gold* : Undefined\n*Level Petualang* : Undefined\n*Rank Petualang* : Undefined\n*Nama Party* : Undefined\n*Level Party* : Undefined\n`
              buff = await getBuffer(profil)
              shino.sendMessage(from, buff, "imageMessage", { thumbnail,bin,jimp,image: buff, caption: profile, quoted: shin})
              break
       case 'afk': 
       if (isBanned) return reply('Maaf kamu sudah terbenned!')
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Kak kalau sedang afk jangan nimbrung di group ini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
  case 'shino':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
 buffer = await getBuffer(`https://telegra.ph/file/f7870353e725da523d3ae.jpg`)
 shino.sendMessage(from, buffer, image, {quoted: shin}) 
 break
      
             
            case 'not':
            eweww = await fetchJson(`https://hadi-api.herokuapp.com/api/pinterest?q=waifu`, {method: 'get'})
           ter = eweww
           te = ter.hasil
           pr = te[Math.floor(Math.random() * te.length)];
         reply(pr)            
break
           
           
           case 'neko':
           
             eweww = await fetchJson(`https://api.waifu.pics/sfw/neko`, {method: 'get'})
               ter = eweww
               te = ter.url
      
         rei = await getBuffer(`${ter.url}`)
         
         
   repl = `_pictures from waifu pics_
url: _${te}_`


              await shino.sendMessage(from, rei, "imageMessage", { thumbnail,bin,jimp,image: rei, caption: repl, quoted: shin})
                   break
             
             case 'loli':
           
            rei = await getBuffer(`https://hadi-api.herokuapp.com/api/loli`)

              await shino.sendMessage(from, rei, "imageMessage", { thumbnail,bin,jimp,image: rei, quoted: shin})
                   break
             
        case 'menu':
        case 'help':
					
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					
			eweww = await fetchJson(`https://api.waifu.pics/sfw/waifu`, {method: 'get'})
               ter = eweww
               te = ter.url
      
         rei = await getBuffer(`${ter.url}`)
					
       thu = await shino.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
       groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
       menubeta =`
┏════════════════════════
├⊱  *Hit Today* : ${hit_today.length}
├⊱  *Total Hit* : ${totalhit}
├⊱  *Prefix* : _!_
├⊱  *Ping* : ${latensie.toFixed(4)} 
├⊱  *NodeJs* : 17.0.1
├⊱  *Pm2* : 5.1.2
╰════════════════════════
  *Nama Bot* : Ｎｅｒｏ
  *Season* : _5_
  *Version* : _3.4.1_
  *Ram Usage* : _${ram2}_
  *Owner* : Wira.
┏════════════════════════
├➛ *!level*
├➛ *!join*
├➛ *!shino*
├➛ *!stats*
├➛ *!profile*
├➛ *!leaderboard*
╰════════════════════════
ketik !allmenu atau !command untuk menampilkan semua menu

_auto take pictures from waifu pics_
url: _${te}_

*NOTE* : _Kalian Bisa Menambahkan Bot Ke Dalam Group Dengan !join_`
          await shino.sendMessage(from, rei, "imageMessage", { thumbnail,bin,jimp,image: rei, caption: menubeta, quoted: shin})
                   break
case 'nhentaisearch':
case 'nhentais':
case 'ns':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Shin`)

query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${setting.lolkey}&query=${query}`)
get_result = get_result.result
for (var nero of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${nero.title_english}\n`
ini_txt += `Title Japanese : ${nero.title_japanese}\n`
ini_txt += `Native : ${nero.title_native}\n`
ini_txt += `Upload : ${nero.date_upload}\n`
ini_txt += `Page : ${nero.page}\n`
ini_txt += `Favourite : ${nero.favourite}\n\n`
}
reply(ini_txt)
break

case 'nsfw':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('pilih enable atau disable')
				if ((args[0]) === 'enable') {
				if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
				nsfw.push(from)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukses mengaktifkan fitur nsfw')
				} else if ((args[0]) === 'disable') {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes menonaktifkan fitur nsfw')
				} else {
				reply(ind.satukos())
				}
				break 
				
	       case 'join': 
if (isBanned) return reply('Maaf kamu sudah terbenned!')
             if (!q) return reply('link?')
             if (!isUrl(args[1]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Link Invalid')
             link = args[1].replace('https://chat.whatsapp.com/','')
             fak = shino.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Chottomatte')
             break
				
case 'allmenu':
case 'command':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
groups = shino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = shino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              
           uptime = process.uptime();
              timestamp = speed();
              totalChat = await shino.chats.all()
              latensie = speed() - timestamp
              total = math(`${groups.length}*${privat.length}`)
  
 		eweww = await fetchJson(`https://api.waifu.pics/sfw/waifu`, {method: 'get'})
               ter = eweww
               te = ter.url
      
         rei = await getBuffer(`${te}`)
         
kntrl = `┏─⬡「𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔」
├⊱ *Hari* : ${week} ${weton} 
├⊱ *Group Chats* : ${groups.length}
├⊱ *Private Chats* : ${privat.length}
├⊱ *Total Chats* : ${totalChat.length}
├⊱ *Speed* : *${latensie.toFixed(4)} _Second_*
╰────────────────────╯
=_=_=_=_=_=_=_=_=_=_=_=_=
┏════════════════════════
├⊱  !groupmenu
├⊱  !nsfwmenu
├⊱  !gamemenu
├⊱  !animemenu
├⊱  !infomenu
╰════════════════════════
=_=_=_=_=_=_=_=_=_=_=_=_=
┏════════════════════════
├⊱  !level
├⊱  !donate
├⊱  !grupinfo
├⊱  !owner
├⊱  !groupserina
╰════════════════════════

_auto take pictures from waifu pics_
url: _${te}_
`
await shino.sendMessage(from, rei, "imageMessage", { thumbnail,bin,jimp,image: rei, caption: kntrl, quoted: shin})
             break
case 'groupmenu':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
ehe =`┏═══════════════════
├⊱  !add _[628+++++++]_
├⊱  !kick _[@hilmy]_
├⊱  !simi _[enable/disable]_
├⊱  !tictactoe _[@rizqi]_
├⊱  !nsfw _[enable/disable]_
├⊱  !cg _[coming soon]_
├⊱  !shop _[coming soon]_
├⊱  !mh _[coming soon]_
├⊱  !getpic _[@wira]_
├⊱  !grup _[open/close]_
├⊱  !antilink _[enable/disable]_
├⊱  !welcome _[enable/disable]_
├⊱  !tagall _[optimization]_
├⊱  !ytsearch _[optimization]_
├⊱  !play _[optimization]_
├⊱  !sticker _[reply/caption !sticker]_
├⊱  !swm _[reply !swm nero|id]_
├⊱  !mediafire _[link mediafire]_
├⊱  !playstore _[optimization]_
├⊱  !ns _[optimization]_
├⊱  !brainly _[optimization]_
├⊱  !google _[optimization]_
├⊱  !ytmp3 _[link youtube]_
├⊱  !ytmp4 _[link youtube]_
├⊱  !ythd _[link youtube]_
├⊱  !igdl _[link Instagram]_
├⊱  !igstalk _[optimization]_
╰═══════════════════`
   reply(ehe)
   break
   
   case 'animemenu':
   if (isBanned) return reply('Maaf kamu sudah terbenned!')
   vruh = `┏═══════════════════
├⊱  !anime _[optimization]_
├⊱  !waifu _[optimization]_
├⊱  !manga _[optimization]_
├⊱  !otakudesu _[optimization]_
├⊱  !ongoing
├⊱  !loli 
├⊱  !oneesan
├⊱  !milf
├⊱  !neko
╰═══════════════════`
   reply(vruh)
   break
   
   case 'infomenu':
   if (isBanned) return reply('Maaf kamu sudah terbenned!')
   bruh = `┏═══════════════════
├⊱  !level
├⊱  !stats
├⊱  !infobot
├⊱  !profile
├⊱  !owner
├⊱  !donasi
╰═══════════════════`

 reply(bruh)
 break
 
 case 'nsfwmenu':
 if (isBanned) return reply('Maaf kamu sudah terbenned!')
 if (!isNsfw) return reply('nsfw belum aktif')
 sange = `┏═══════════════════
├⊱  !chiisaihentai
├⊱  !blowjob
├⊱  !yaoi
├⊱  !ecchi
├⊱  !hentai
├⊱  !ahegao
├⊱  !hololewd
├⊱  !sideoppai
├⊱  !animefeets
├⊱  !animebooty
├⊱  !animethighss
├⊱  !hentaiparadise
├⊱  !animearmpits
├⊱  !hentaifemdom
├⊱  !lewdanimegirls
├⊱  !biganimetiddies
├⊱  !animebellybutton
├⊱  !lewd
├⊱  !cum
├⊱  !futanari
├⊱  !cum
├⊱  !hentai4everyone
├⊱  !cum
├⊱  !feet
├⊱  !yuri
├⊱  !trap
├⊱  !lewd
├⊱  !anal
├⊱  !lewdk
├⊱  !pussy
├⊱  !femdom
├⊱  !cuddle
├⊱  !hentai
├⊱  !eroyuri
├⊱  !cum_jpg
├⊱  !blowjob
├⊱  !futanari
├⊱  !lewdkemo
├⊱  !pussy_jpg
├⊱  !nsfw_neko_gif
├⊱  !random_hentai_gif
╰═══════════════════`
   reply(sange)
   break 
   
   case 'gamemenu':
   if (isBanned) return reply('Maaf kamu sudah terbenned!')
   reh = `┏═══════════════════
├⊱  !caklontong
├⊱  !gelud
├⊱  !family100
├⊱  !tebakgambar
├⊱  !tebaklirik
├⊱  !tebaklagu
├⊱  !siapaakum
╰═══════════════════`
   reply(reh)
   break 
   
   case 'add':
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						shino.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					
					case 'kick':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             reply('wokeh')
             break
             
          case 'demote':
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					demoteAdmin(from, mentionUser)
             reply('wokeh')
					break
   
   case 'promote':
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					promoteAdmin(from, mentionUser)
             reply('wokeh')
					break
					
		case 'opromote':
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.owner)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					promoteAdmin(from, mentionUser)
             reply('wokeh')
					break
		
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')     
if ((isMedia && !shin.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : shin
            const media = await shino.downloadAndSaveMediaMessage(encmedia)
                kay = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                shino.sendMessage(from, fs.readFileSync(kay), sticker, {quoted: shin})
                 fs.unlinkSync(media)
                fs.unlinkSync(kay)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(kay)
                } else if ((isMedia && shin.message.videoMessage.seconds < 11 || isQuotedVideo && shin.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(shin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : shin
                const media = await shino.downloadAndSaveMediaMessage(encmedia)
            kay = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            shino.sendMessage(from, fs.readFileSync(kay), sticker, {quoted: shin})
            fs.unlinkSync(media)
            fs.unlinkSync(kay)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(kay)
            } else {
                reply(`Reply Gambar/Video dengan durasi 7-9 sec`)
            }
            break       
             
       case 'randomcode':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (!isGroup) return reply(mess.only.group)
             if (!isNsfw) return reply('nsfw belum aktif')
              const xoden =['233888','290065','286493','276518','137716','331399','233547','251489','258212','262870','250029','211519','256097','163478','220376','240330','320732','332157','327052','259828','37659','313456','166126','120759','287963','311929','310502','233370','311423','280662','109745','226861','272298','286003','178968','255129','258212','221711','211648','236128','228708','192310','220958','243790','262158','255129','227675','234818','199425','259497','239595','199310','241254','322136','319529','232747','261928','110094','160556','209519','318370','34619','164043','232747','300508','306088','259433','195873','188469','197423','304192','216942','232976','204958','257892','236297','216039','221711','245304','166174','175220','244327','191049','220882','244859','227446','259328','259532','259634','259610','259348','258669','256097','118282','260028','260058','259557','259497','122220','260111','260088','259880','258977','260097','259765','259359','260138','259617','107965','197255','260276','260209','260210','260203','191360','191390','248933','257567','227913','211648','210240','260626','259622','257991','213966','260623','149112','257168','198203','114783','220958','244387','243734','223315','118069','136188','260686','241777','260912','142154','119798','261174','258301','256808','169134','220354','260271','261725','261378','252174','261928','114427','187003','147577','249458','157767','224316','175294','258450','233864','236128','261162','174036','187205','210873','193318','110232','199310','193816','220376','193814','193815','219068','220386','177642','188269','181837','220377','119293','257528','258926','262384','105951','259904','208174','268281','155850','297974','139577','298547','149809','118282','236157','290886','109745','177503','102659','303655','182843','173808','265918','212548','303893','304307','278832','210510','77054','275485','249743','280509','269673','103269','241790','255308','281709','211648','278153','269542','151436','109851','273447','60449','147746','195117','271062','255662','204958','250647','222798','250647','260605','114750','139732','222855','261174','206409','226861','245503','264298','179305','220901','92807','86879','148080','223146','223147','227020','243520','201704199827','271048','67462','255744','245737','170727','253993','272768','272298','151165','246448','182290','268793','179687','175852','187343','245131','234167','266987','123361','272129','277677','268920','129281','217727','218398','178468','277324','155365','274917','239463','245135','280297','253993','261063','267300','228708','112597','286003','209775','221287','285588','285627','285396','129071','16316','285275','116513','214054','182674','284566','178968','62287','284935','284907','263066','260217','240543','233321','245341','218162','218148','203367','233878','245942','246144','242056','255772','253992','283737','280890']
              const xok = xoden[Math.floor(Math.random() * xoden.length)]
              shino.sendMessage(from, 'Nih kak : '+ xok, text, { quoted: shin })
              break
   
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
					if (isBanned) return reply('Maaf kamu sudah terbenned!')          
   if (!isNsfw) return reply('nsfw belum aktif')
                reply (mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${setting.lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
       
                    break
       case 'pussy':
       case 'blowjob':
       case 'hentai':    
       case 'cum':
       case 'trap':
       case 'nsfw_avatar':
                case 'lewd':
             if (!isNsfw) return reply('nsfw belum aktif')
       reply (mess.wait)
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${setting.lolkey}`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        
                    break
                case 'bj':
                case 'ero':
                case 'feet':
                case 'yuri':
                case 'feetg':
                case 'lewdk':
                case 'femdom':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'erofeet':
                case 'holoero':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
			if (isBanned) return reply('Maaf kamu sudah terbenned!')
                reply (mess.wait)
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${setting.lolkey}`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await shino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Shino', imageMessage: imageMsg,
              contentText:`;-;`,buttons,headerType:4}
              prep = await shino.prepareMessageFromContent(from,{buttonsMessage},{quoted: shin})
              shino.relayWAMessage(prep)
        
                    break
                    
                    case 'playvideo':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply(mess.wait)
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
		 shino.sendMessage(from, buffer, image, { quoted: shin, caption: infomp3 })
				shino.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:shin, caption: `*${anu.result.title}*`})
					break  
					
	 case 'play':
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
try{
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Yang Anda Cari Tidak Ada_')
})
let thumbInfo = ` *Youtube Play*

 *Judul :* ${res.all[0].title}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
 
*File Sedang Di Kirim........*
`
sendFileFromUrl(res.all[0].image, image, {quoted: shin, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error,Mungkin Karena Server Sedang Down')
})
sendFileFromUrl(res[0].link, audio, {quoted: shin, mimetype: 'audio/mp4', filename: res[0].output}) }
   } catch (e) {
     reply('yang anda cari tidak di temukan')
 }
break
                    
case 'waifu':

query = args.join(" ")
 if (isBanned) return reply('Maaf kamu sudah terbenned!')
 if (args.length == 0) return reply(`Example: ${prefix + command} shino`)
                    try {
 buff = await getBuffer(`https://hadi-api.herokuapp.com/api/waifusrc?nama=${query}`)
 await shino.sendMessage(from, buff, "imageMessage", { bin: buff, caption: `*${query}*`, quoted: shin})
  } catch (e) {
  try{
             await shino.sendMessage(from, buff, "imageMessage", { image: buff, caption: `*${query}*`, quoted: shin})
  } catch (e) {
  try{
  await shino.sendMessage(from, buff, "imageMessage", { jimp: buff, caption: `*${query}*`, quoted: shin})
   } catch (e) {
   reply(`*${query}* tidak di temukan`)
}}}
break
   
 default:

if (budy.includes(`Cekprefix`)) {
                  reply(`prefix : !`)
                  }


if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ner.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*Game Tictactoe *

Player @${tty.player1.split('@')[0]}=❎

Player @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  shino.sendMessage(from, ucapan, text, {quoted: shin, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ner.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ner.filter(toek => !toek.id.includes(from)) 
ner = naa
shino.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:shin,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ner.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ner.filter(hhg => !hhg.id.includes(from))
ner = naa
pop = main[0]
ner.push(pop)
tto = ner.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*ame Tictactoe *

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*Game Tictactoe*

*Hasil Akhir:*

${ttt}`
shino.sendMessage(from, ucapan1, text, {quoted: shin, contextInfo:{mentionedJid: [tty.player1]}})
naa = ner.filter(hhg => !hhg.id.includes(from))
return ner = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*Game Tictactoe*

*_Permainan Seri ??👌_*`
ucapan2 = `*Game Tictactoe*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ner.filter(hhg => !hhg.id.includes(from))
return ner = naa
}
ucapan = `*Game Tictactoe*

Player @${tty.player2.split('@')[0]}=⭕

Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
shino.sendMessage(from, ucapan, text, {quoted: shin, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ner.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ner.filter(hhg => !hhg.id.includes(from))
ner = naa
pop = main[0]
ner.push(pop)
tto = ner.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*Game Tictactoe*

*Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*Game Tictactoe*

*Hasil Akhir:*

${ttt}`
shino.sendMessage(from, ucapan1, text, {quoted:shin, contextInfo:{mentionedJid: [tty.player2]}})
naa = ner.filter(hhg => !hhg.id.includes(from))
return ner = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*Result Game Tictactoe*

*_Permainan Seri*`
ucapan2 = `*Game Tictactoe*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ner.filter(hhg => !hhg.id.includes(from))
return ner = naa
}
ucapan = `*Game Tictactoe*

Player @${tty.player1.split('@')[0]}=⭕

Player @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 shino.sendMessage(from, ucapan, text, {quoted: shin, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || shin.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

} catch(e){



 return reply(require('util').format(e))


                  }


		if (budy.includes(`Cekprefix`)) {

                  reply(`Prefix : !`)
             }
                  }
if (isCmd){
teks = `Maaf *${pushname}*, command ${prefix + command} tidak ada dalam menu`
shino.sendMessage(from, teks, text, {quoted: shin, contextInfo:{mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'cyan'))
        }
	}
}


