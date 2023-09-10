import express from 'express'
import dotenv from "dotenv";
import setupBot from './bot.js';
const {PORT, BOT_TOKEN} = dotenv.config({ path: './config/.env'}).parsed

const app = express()
try {
  setupBot().launch()
} catch (error) {
  
}
/* app.get('/', (req, res) => {
    res.send('Hello. I changed this text')
}) */
/* bot.start(ctx => {
  ctx.reply('Welcome, bro')
})

bot.hears('хочу есть', ctx => {
  ctx.reply('Так передохни и покушай')
})

bot.command('time', ctx => {
  ctx.reply(String(new Date()))
}) */
//app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))