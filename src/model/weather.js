// Represents one day of weather data.
const Weather = (date, condition, high, low, icon) => {
  const _date = date;
  const _condition = condition;
  const _high = high;
  const _low = low;
  const _icon = icon;

  const get = () => {
    return {
      date: _date,
      condition: _condition,
      high: _high,
      low: _low,
      icon: _icon,
    };
  };

  return { get };
};

export default Weather;
