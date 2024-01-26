const checkTokens = () => {
  const tokenForWeather = process.env.ACCESS_KEY_WEATHER;
  const tokenForMapbox = process.env.ACCESS_KEY_MAP;

  if (tokenForWeather === "default" || tokenForMapbox === "default") {
    return false;
  }

  return true;
};

module.exports = checkTokens;
