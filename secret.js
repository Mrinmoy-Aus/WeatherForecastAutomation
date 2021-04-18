const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const url = (city) =>`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

module.exports={
    url:url
}