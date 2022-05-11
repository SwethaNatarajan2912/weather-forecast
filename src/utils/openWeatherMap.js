const request = require('request')

const openWeatherMap = (address, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&appid=d016bc53af4a04d471bd95cb8806fa18`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if(Object.keys(body).length===0){
            callback(`Unable to find location`);
        }
        else {
            callback(undefined, `${body.weather[0].description}. ${body.main.temp} degrees out. But it feels like ${body.main.feels_like}`)
        }
    })
}

module.exports = openWeatherMap