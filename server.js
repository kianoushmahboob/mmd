const express = require('express');
const {Nuxt , Builder} = require('nuxt');
const config = require('./nuxt.config.js');

// create new express app
const app = express();

// production mdoe settings
config.dev = false;


async function start(){
    // init nuxt.js
    const nuxt = new Nuxt(config)

    //just Build On Dev Mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build();
    }else{
        await nuxt.ready()
    }

 // Give nuxt middleware to express
 app.use(nuxt.render)

 // Listen the server
 app.listen(process.env.PORT)

}

start();