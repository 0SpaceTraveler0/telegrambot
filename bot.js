const { Telegraf, session, Scenes } = require("telegraf");
const {
	start,
	backMenu,
	eatbro,
	hey,
	startWhatWeather,
} = require("./controllers/commands.js");
const { CMD_TEXT } = require("./config/consts.js");
const { Markup } = require("telegraf");
const { whatWeatherScene } = require("./controllers/weatherScene.js");

const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([whatWeatherScene]);

const setupBot = () => {
	bot.use((ctx, next) => {
		console.log(ctx.message.chat.type);
		console.log("------------------");
		console.log(ctx);
		return next();
	});

	bot.use(session({ collectionName: "sessions" }));
	bot.use(stage.middleware());

	bot.start(start);
	bot.hears(CMD_TEXT.menu, backMenu);
	bot.hears(CMD_TEXT.weatherI, startWhatWeather);
	// bot.hears('хочу есть', eatbro);
	// bot.hears('Леня',hey)
	/* 	bot.start(async (ctx) => {
		await ctx.reply(
			"Like?",
			Markup.inlineKeyboard([
				[Markup.button.callback("👍", "like")],
				[Markup.button.callback("👎", "dislike")],
			]).resize()
		)
	});
	bot.action("like", (ctx) => ctx.editMessageText("🎉 Awesome! 🎉"));
	bot.action("dislike", (ctx) => ctx.editMessageText("okey")); */

	/* bot.on('text',async (ctx) => {
		await ctx.reply(`Hello world`);
	}) */

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
