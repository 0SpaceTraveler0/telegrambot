
require ('dotenv').config({path: "config/.env"});

const { setupBot } = require('./bot');

(async function () {
  try {
      await setupBot().launch()
  } catch (error) {
    console.log(error)
  }
}())
 
 /*
import express from 'express'
import dotenv from "dotenv";
import setupBot from './bot.js';
const {PORT, BOT_TOKEN} = dotenv.config({ path: './config/.env'}).parsed

const app = express()
}
/* app.get('/', (req, res) => {
    res.send('Hello. I changed this text')
}) 

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`)) */