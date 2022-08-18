const converters = {
  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  },
};

/**
 * Tries to convert temperatures using the converters object.
 *
 * @param {(string|number)} temperature - The temperature to convert from
 * @param {string} conversion - "toCelsius" or "toFahrenheit"
 * @returns {string} The converted temperature or "" if the conversion failed.
 */
export default function tryConvert(temperature, conversion) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }

  const output = converters[conversion](input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
