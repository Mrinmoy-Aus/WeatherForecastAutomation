const wbm = require('wbm');
let send= function sendMessage(respData){
    let temp = KtoC(respData.main.temp);
    let tempMin = KtoC(respData.main.temp_min);
    let tempMax = KtoC(respData.main.temp_max);
    let message = `Hi I am your personal bot and todays weather  forecast at your place is as follows
            #Name: ${respData.name}
            #Weather Description: ${respData.weather[0].description}
            #Temp: ${temp}
            #Min Temp ${tempMin}
            #Max Temp: ${tempMax}
            #Pressure: ${respData.main.pressure}
            #Humidity: ${respData.main.humidity}
            #Wind Speed: ${respData.wind.speed}`;

    wbm.start().then(async () => {
        const phones = ['918777842107'];
        await wbm.send(phones, message);
        await wbm.end();
    }).catch(err => console.log(err));
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

module.exports={
    sendMessage:send
};