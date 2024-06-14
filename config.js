const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94776232803";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923x"
global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_51_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUyLFxuICAgICAgICA1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA4NyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0VkExd2luVXlUV0phRndrbGw1dmUxdzVQOHNZL0sxQ016ejZ3RjQzQSs0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc2MjMyODAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2OEY5MTUwQzVFNTI5MTJENzhFRDNFREM0MDdFQ0M0MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgzMjk4ODdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NjIzMjgwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0Y1M0JCODkzQjUyMjIwRkYyRkNDODY2MUJBN0UyQUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MzI5ODg4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlB3MTVmSkhMU25TdlJnb1R1VDhIMndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWY4ZmRiMDgtNTBmZS00ZDNjLTk0MzAtNzRkNGQ1NTBlM2VjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMzIsXG4gICAgICAxNjEsXG4gICAgICA2NCxcbiAgICAgIDIxOSxcbiAgICAgIDU4LFxuICAgICAgMTc5LFxuICAgICAgNDcsXG4gICAgICA3MCxcbiAgICAgIDIyNixcbiAgICAgIDIzNCxcbiAgICAgIDI1NCxcbiAgICAgIDg4LFxuICAgICAgMjQ3LFxuICAgICAgMTgxLFxuICAgICAgNTQsXG4gICAgICA3NSxcbiAgICAgIDI0NyxcbiAgICAgIDIxNSxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDQwLFxuICAgICAgMjksXG4gICAgICAxNTEsXG4gICAgICAxOTIsXG4gICAgICA0MyxcbiAgICAgIDEsXG4gICAgICAxNDQsXG4gICAgICAxOCxcbiAgICAgIDQxLFxuICAgICAgNzcsXG4gICAgICA3MCxcbiAgICAgIDE2MyxcbiAgICAgIDIyMCxcbiAgICAgIDE0NCxcbiAgICAgIDE4OCxcbiAgICAgIDE1MCxcbiAgICAgIDI1NSxcbiAgICAgIDQzLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0hDMzRLTFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc2MjMyODAzOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDEwNDgxODIxMjA2MzI6NTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTWVtb3J5IE9mIE1vdmllcyDwn5GRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTldYaGJNSEVKWEVyck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjUE5mcVlJaCtYcVBKbGM4dFRDVUdPRjhaZ3M0a1NHRW9sUngzb0ZlakZZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm55RWdTbEN2QlhyOHpIR2R3eXNvQk9ZTkwzK3lQOXpMRWVHMC91QzB0UkJlZTNRSVRLSlY0SW9VSWdmZDllZUNMZ1NaQTVDS2pqT29oZk04Y2szOURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVNTDg1czZMOTVkVDM0ZXJ6UzNGQ0FiTWNqUVVSTkRGcXIzQjRjRzRwZnk3cnBiaDY2bjZaSFlrYmNEVlZQazlwNjhRc09sTlB6eEwzWDVHR043VURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc2MjMyODAzOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzMjk4ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKT0RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpPRC5qc29uIjogIntcImtleURhdGFcIjpcIndNVm15U3FiWG9GZjRwSTNSWnprSngzSENpT0FESVV2WFN4WXUwVDBJYW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4NjA4Nzg5MixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzMjgxNTQzMTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "wenuraᴍᴅ",
  ownername:process.env.OWNER_NAME|| "wenna",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
