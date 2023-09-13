const { Telegraf, session } = require("telegraf");
const { start, backMenu, eatbro, hey } = require("./controllers/commands.js");
const { CMD_TEXT } = require("./config/consts.js");
const { Markup } = require("telegraf");
const { mainMenu } = require("./utils/buttons.js");
const bot = new Telegraf(process.env.BOT_TOKEN);

const setupBot = () => {
	bot.use((ctx, next) => {
		console.log(ctx);
		return next();
	});
	// bot.start(start);

	bot.start(async (ctx) => {
		await ctx.reply(
			"Like?",
			Markup.inlineKeyboard([
				[Markup.button.callback("👍", "like")],
				[Markup.button.callback("👎", "dislike")],
			]).resize()
		)
	});
	bot.action("like", (ctx) => ctx.editMessageText("🎉 Awesome! 🎉"));
	bot.action("dislike", (ctx) => ctx.editMessageText("okey"));

	/* bot.command('weather',async (ctx) => {
		await ctx.reply(`Hello ${ctx.state.role}`,
			mainMenu
		);
	}) */
	bot.hears(CMD_TEXT.menu, backMenu);
	// bot.hears('хочу есть', eatbro);
	// bot.hears('Леня',hey)

	/*   bot.use(session())
  bot.on('message', async ctx => {    
    if (ctx.session === undefined) {
      const { update_id } = ctx.update
      ctx.session = { update_id }
      debug('Defaulting session to', ctx.session)
    } else {
      debug('Session already set to', ctx.session)
    }
  }) */
	bot.action("yes", (ctx) => {
		return ctx.answerCbQuery("Option 1 selected!");
	});

	bot.action("no", (ctx) => {
		return ctx.answerCbQuery("Option 2 selected!");
	});
	return bot;
};
/* function sendLiveLocation(ctx) {
	let lat = 42.0;
	let lon = 42.0;
	// @ts-ignore
	ctx.replyWithLocation(lat, lon, { live_period: 60 }).then(message => {
		const timer = setInterval(() => {
			lat += Math.random() * 0.001;
			lon += Math.random() * 0.001;
			ctx.telegram
				.editMessageLiveLocation(lat, lon, message.chat.id, message.message_id)
				.catch(() => clearInterval(timer));
		}, 1000);
	});
} */
module.exports = {
	setupBot,
};
