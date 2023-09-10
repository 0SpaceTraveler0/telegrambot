import { Markup } from "telegraf";
import CMD_TEXT from "../config/conts.js";


const mainMenu = 
        Markup.keyboard([
                [CMD_TEXT.weatherI],
                [CMD_TEXT.weatherNotI],
        ]).resize();

const backButtonMenu = 
        Markup.keyboard([
                [CMD_TEXT.menu]
        ])

export default {
        mainMenu,
        backButtonMenu
}