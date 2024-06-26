const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/ec6ea1aef6f229cf76909.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cypherilerioluwa@gmail.com"
global.location="Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8fed3725a6d912aedc601.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349121881343" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349151066117";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/8fed3725a6d912aedc601.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "typing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_07_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2LFxuICAgICAgICAxNixcbiAgICAgICAgNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQQWMrWW05dkVvVlNoVGpRN2ZsTWU4Sy91bHV5dFUxRDBFejJXUyt1NWVFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTEwNjYxMTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQTc3QkFCMzAzRkQyOTMzQzQxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzE2ODA0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1ZFdWUXdETlNXT216QVFrZUhyS0FnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk5Y2Q2MWQ2LThiNTMtNGM5Mi04ZjVkLTBiMDg0NzRhNzlhY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDE5MSxcbiAgICAgIDE2NCxcbiAgICAgIDkwLFxuICAgICAgMzMsXG4gICAgICA4NyxcbiAgICAgIDI0OCxcbiAgICAgIDExMSxcbiAgICAgIDE5NixcbiAgICAgIDE0NSxcbiAgICAgIDc2LFxuICAgICAgMjA1LFxuICAgICAgNjcsXG4gICAgICAxODEsXG4gICAgICAxNjksXG4gICAgICAyMTUsXG4gICAgICAxMDQsXG4gICAgICA4NSxcbiAgICAgIDExNSxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAxNDcsXG4gICAgICAxODIsXG4gICAgICAyMTMsXG4gICAgICAxOTIsXG4gICAgICA1MCxcbiAgICAgIDExOCxcbiAgICAgIDE4NSxcbiAgICAgIDIxLFxuICAgICAgOTAsXG4gICAgICAzLFxuICAgICAgOTUsXG4gICAgICA3NixcbiAgICAgIDYwLFxuICAgICAgMjEzLFxuICAgICAgMjA2LFxuICAgICAgMTk4LFxuICAgICAgMjMxLFxuICAgICAgMTYsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMajdFMFFxcy9uc2dZWUN5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU2tqK2FHdjdtQnRYRDFSOUpEWmxZN09pN3htTzV4RFRqSk9CaWl2SjhtQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmbnBLQ1NFSU9KY3JPYVgxbE9UUSsxTXJ0cHhaT2NDVHVNTitNaU9rS0g2RlN3dzdMZERIdTY0ajd3dTdaZUpZcWd0enlqcTh6T1VXK1RrZjJzOE5DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjWFg1dU9FczlqYXR1WkYyUjVNbW8xRWZFQ2RmZkJGMW9FZHkzSmE5Q0hrZFVHcjlzQnU1ZzdmaG4vTFVMWWVxQmJhV2F5eElGK25NUWtCVU1MazJCdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTEwNjYxMTc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MjAzMjg1MzI3OTIxOjMwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkN5cGhlciDDjGzDqXLDrW9sw7p3YSDwn42A8J+SjuKdpO+4j/Cfk4xcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTEwNjYxMTc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MTY4MDQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0NWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQ0UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyb0xpTlRNNFFQdVRLSVgxdXE2TFVmUVpTZzlJZkJ4clN5QlYxS0RRbTdjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzI2Mjg5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE1NTg4ODM1NTYzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0NHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRTRkM2tGZnJYYWtQSUV0Rk12VnFUdFlobC9oNnNEbzlBRTNEMDdFcjRudz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjMyNjI4OTgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE1OTU1MzA3OTA2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0NILmpzb24iOiAie1wia2V5RGF0YVwiOlwidnFneUovcmJZZHUwYWJLYVhYNkcxM1h0QnFHNERXS2tkc2pYL1lMcDRybz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjMyNjI4OTgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOls0LDAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE2MTU0NDIwOTczXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0NKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRlpJYTdFZm5zK2d2cDNaa1dvU00zL1QyNjhDQXFOWUdLRDJrQ2JYK0gzaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjMyNjI4OTgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNF19LFwidGltZXN0YW1wXCI6XCIxNzE2MzAzNjY4NjI5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0NLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWFpuYlZqZWowQUhqUG1GUjRaMi9WdUFoSVgzNXgyWWJ1M2hXZ2RXYXN5cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjMyNjI4OTgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjMwMzY5MTcxNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtDTC5qc29uIjogIntcImtleURhdGFcIjpcIlkxRUpxcVJjQ1Vib0ZVOGpxdXFjM2NTLzY5NlVsUjRMSHRoNmtnVHNpcWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYzMjYyODk4LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3Mjk2NDE5NDlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQ04uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEYUpkcjB0MzRNc3FxZlpwcGwrTElNeTh1c0hNa2RPOWNlZ2FMZ0xUVEtrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzI2Mjg5OCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcxNjM0ODYyNjhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQ1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkcm80cDgxV2VGRGpIekN6V3FFbEpEa0YxZllGcTlodC9GT3BrNEhEQk9VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzI2Mjg5OCxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzgsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcxNjQ3MjIzNTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQ1IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHSnJyL1ZxUUQrTnhKSWp6bE95TmdTVGNIZ2VRcjZOWXFnbXRKRkFWR0ZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzI2Mjg5OCxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzIsMCw5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcxNjYwODAyMTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQ1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNZlk0UzJoaVFUQ0hMMUFPK2NmeTArang5cm5rUjBaYjJkTVdXYXVENFlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzI2Mjg5OCxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEwLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzE2ODAxNTcwMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtDVS5qc29uIjogIntcImtleURhdGFcIjpcIkc1V1paQm9Ic1NJK3dxYmdxSzRNU29IMGUwUTd5cnF0SGt5dG80L0V5Q289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYzMjYyODk4LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzEwLDIsMF19LFwidGltZXN0YW1wXCI6XCIxNzE3MTY4MDIzMTExXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0NWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNm4reEJ0YzZsdGNReHV1S2NJNWFTMzNxcmFrR01ZSjlGR2JTU0VYZEdQRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjMyNjI4OTgsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcxNjgwMzI0NDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "bOT",
  packname: process.env.PACK_NAME || "bOT",
  botname : process.env.BOT_NAME  || "ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀",
  ownername:process.env.OWNER_NAME|| "It'x Ìléríolúwa",


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
