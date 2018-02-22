const yargs = require('yargs')

const weather = require('./weather/weather');
const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// console.log(argv)

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.temperature}.`);
      }
    });
  }
});

// weather.getWeather(33.723039, -84.3436881, (errorMessage, weatherResults) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   }else{
//     console.log(JSON.stringify(weatherResults, undefined, 2));
//   }
// });


 
