import { Telegraf } from "telegraf";
import start from "./controllers/commands.js";
import dotenv from "dotenv";
import CMD_TEXT from "./config/conts.js";
const {BOT_TOKEN} = dotenv.config({ path: './config/.env'}).parsed;
const bot = new Telegraf(BOT_TOKEN)

const setupBot = () => {

  bot.use((ctx, next) => {
    //console.log(ctx)
    return next()
  })

  bot.start(start.start);
  bot.start(CMD_TEXT.menu,start.backMenu);
  return bot

}

export default setupBot