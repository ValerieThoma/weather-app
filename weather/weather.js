const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/f032ba1bfdc2183a0b1d654a6f182c19/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io');
    }else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    }else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
