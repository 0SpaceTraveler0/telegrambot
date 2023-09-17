const {Scenes} = require('telegraf');
const {backButtonMenuAndLocation} = require("../utils/buttons.js")
const {getWeatherLocationCoord} = require("../services/getWeatherLocation.js");
const { CMD_TEXT } = require('../config/consts.js');
const { backMenu } = require('./commands.js');

const whatWeatherScene = new Scenes.BaseScene('weather');

whatWeatherScene.enter(ctx => ctx.reply('Где ты, кто ты?', {
        ...backButtonMenuAndLocation
}));

whatWeatherScene.on('location', async ctx => {
        try {
                const msg = ctx.message;
                ctx.reply('Ищу информацию ')

                const {
                        latitude,
                        longitude
                } = ms.location
                const data = await getWeatherLocationCoord({ longitude, latitude});
                ctx.reply(`Погода у тебя ${data.current_weather.temperature}${data.hourly_units.temperature_2m}\nВетер ${data.current_weather.windspeed} ${data.hourly_units.windspeed_10m}`)
        } catch (error) {
                console.log(error)
                ctx.reply('Упс, какая то ошибка')
        }
})

whatWeatherScene.hears(CMD_TEXT.menu, ctx => {
        ctx.scene.leave();
        return backMenu(ctx)
})

module.exports = {
        whatWeatherScene
}