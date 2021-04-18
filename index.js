const fetch = require("node-fetch");
const send = require('./wapp');
const key = require('./secret');


let location = process.argv[2];

async function getWeatherByLocation(city) {
    const resp = await fetch(key.url(city), { origin: "cors" });
    const respData = await resp.json();
    send.sendMessage(respData);
}

getWeatherByLocation(location);


