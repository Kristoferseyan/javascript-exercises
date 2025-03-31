const convertToCelsius = function(fahTemp) {
  let convertedTemp = (fahTemp - 32) * 5/9;
  return roundedTemp = Math.round(convertedTemp * 10 ) / 10;
};

const convertToFahrenheit = function(celTemp) {
  let convertedTemp = (celTemp * 9/5) + 32;
  return roundedTemp = Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
