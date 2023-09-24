const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923405614773'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://niluqueen8:M.Arslan78600@cluster0.gswawn9.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "923405614773"
global.devs = '923405614773';
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dfbe4b86af34d3f9a3a57.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0YvblRKV01VN1hMb2kwd0NYMjlCYmVUMFFtb2sxY1pkNmRTaUdXT1NYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlVwZ0VTdk95Vm1nWXZlU0Y0a0RtcEJxR0dLS1dBZlFwWkp1Mm9TYWlUZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT1hGa2pGTTlWQjZSSVFkbzhpdTJMSXFTZmE4NmR2V2xKblIyai85cFhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0cGdObFFxdG9pdkFrbm1FMzVJN29NYmpIWjhrcnQzbTFTM1ZQNzllTFNnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBeE1mNzFOYUxLMmlxUHpUck1Yd0tibklHSUxDK1JnRjJWYVhDbWtBbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR2RGRWVE4xL0xiSnZqNiszQXErelJRRGZKL0lzUTRVeWc0NzBlUU1VQVE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYaUVVaWQ4bXZNT09iTlIwU1RFSGh5dHBXU0VKNk1YL2JhTVJXcndmaGNCS0d4YkFTd3d5OGlDMWF3ci9TaXFJbmcvZjh6WS9UYlVSQmhLSnBGZmFodz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjQ2LCJhZHZTZWNyZXRLZXkiOiJjeHlzOFF0UHl0bGZsdmFOcE1rSUd0dVVWOTF5cklPMXdka2NwY0dXYU84PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCVEg2dnpZVFQ5cU03Mnc1bWQwZHRBIiwicGhvbmVJZCI6ImIyMTEzNzUxLTk1MzAtNDczMS1iZTI4LTZjOTI1OWM3NzVkYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwVUlOTnltaEhtaVIxeVFvczNITFFhdHR2UDA9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDdGdsSWozSGZ0dlhOenExT2RsQWtsL0xKTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BDcm9EWVF4N3ZBcUFZWUJnPT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicVN2cThnb3BNRElVWFgwWStNbTVydUJFcGF6YVhoRXA4WDI3ckliR0FqQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoick9haG9UNkhJOTJxZU9ybUZQdmltMzhWanIzR214REJOSmMwb0VuRzgrM2I3ZHBHak9PQkZLSUNtQTdSMnZuWldoa1hwVEhLUG54dWpyUUlnYUc5RHc9PSIsImRldmljZVNpZ25hdHVyZSI6IndxY1hvZnV4czB5aDdKK1d6dHlkdnRRcEt2WXNqVHdRZ2J1TmZQZERhTjB4TWJBeHdkU2wzNjNmMG40Q0JyUWJnZ2dQL3J5NXo3VW95dU1zL3Y1MGpnPT0ifSwibWUiOnsiaWQiOiI5MjM0MDU2MTQ3NzM6MTlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDA1NjE0NzczOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFrcjZ2SUtLVEF5RkYxOUdQakp1YTdnUktXczJsNFJLZkY5dTZ5R3hnSXcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTU1NTUwMTh9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '𝑴.𝑨𝒓𝒔𝒍𝒂𝒏',
  packname:  process.env.PACK_NAME || '𝑭𝒐𝒍𝒍𝒐𝒘👑𝑭𝒃:𝑴.𝑨𝒓𝒔𝒍𝒂𝒏 𝑴.𝑨𝒃𝒃𝒂𝒔',
  
  botname:   process.env.BOT_NAME === undefined ? "𝑭𝒐𝒍𝒍𝒐𝒘👑𝑭𝒃:𝑴.𝑨𝒓𝒔𝒍𝒂𝒏 𝑴.𝑨𝒃𝒃𝒂𝒔" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝑴.𝑨𝒓𝒔𝒍𝒂𝒏' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'sex,sexy,boobs,mia' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '𝑭𝒐𝒍𝒍𝒐𝒘👑𝑭𝒃:𝑴.𝑨𝒓𝒔𝒍𝒂𝒏 𝑴.𝑨𝒃𝒃𝒂𝒔' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•𝑭𝒐𝒍𝒍𝒐𝒘👑𝑭𝒃:𝑴.𝑨𝒓𝒔𝒍𝒂𝒏 𝑴.𝑨𝒃𝒃𝒂𝒔•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
