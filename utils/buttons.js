
const { Markup } = require('telegraf');
const { CMD_TEXT } = require('../config/consts');


const mainMenu = 
        Markup.keyboard([
                [CMD_TEXT.weatherI],
                [CMD_TEXT.weatherNotI],
        ]).resize();

const backButtonMenu = 
        Markup.keyboard([
                [CMD_TEXT.menu]
        ])

module.exports = {
        mainMenu,
        backButtonMenu
}