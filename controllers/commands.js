const mainMenu = require('..//utils/buttons.js');
const start = ctx => ctx.reply('Здоров, меня зовут Леня/Кент, откликаюсь только на это', {
        mainMenu
}) 

const backMenu = ctx => ctx.reply('ты в меню',{
        ...mainMenu
})

const eatbro = ctx => ctx.replyWithPhoto({ source: './assets/image/Brother, I brought you something to eat.jpg'}, {caption: 'Братишка, я тебе покушать принёс'});

const hey = ctx => ctx.reply('Чо хочешь?');

module.exports = {
        start, backMenu, eatbro, hey
} 