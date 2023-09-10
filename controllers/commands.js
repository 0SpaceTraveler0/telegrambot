import mainMenu from "../utils/buttons.js" 

const start = ctx => ctx.reply('Погода', {
        ...mainMenu
}) 

const backMenu = ctx => ctx.reply('ты в меню',{
        ...mainMenu
})

export default {
        start, backMenu
}