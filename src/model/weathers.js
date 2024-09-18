import { startOfDay } from "date-fns";
import Weather from "./weather";

const Weathers = () => {
  let _address = "";
  let _curr = "0";
  let _today = null;
  let _forecast = [];

  const get = () => {
    return {
      address: _address,
      curr: _curr,
      today: _today,
      forecast: _forecast,
    };
  };

  const fromVisualCrossing = (data) => {
    _forecast = [];
    if (!data.resolvedAddress) {
      throw new Error("No address found.");
    }
    _address = data.resolvedAddress;
    const length = data.days.length;
    if (length <= 0) {
      throw new Error("No weather data found.");
    }
    if (length > 6) {
         length = 6; 
    }
    _curr = data.days[0].temp;
    _today = Weather(
      startOfDay(new Date(data.days[0].datetime)),
      data.days[0].conditions,
      data.days[0].tempmax,
      data.days[0].tempmin,
      data.days[0].icon
    );
    for (let i = 1; i < length; i++) {
      _forecast.push(
        Weather(
          startOfDay(new Date(data.days[i].datetime)),
          data.days[i].conditions,
          data.days[i].tempmax,
          data.days[i].tempmin,
          data.days[i].icon
        )
      );
    }
  };

  return { get, fromVisualCrossing };
};

export default Weathers;
