import { format } from "date-fns";

const UiController = () => {
  let _unit = "°C";

  const init = () => {
    let container = document.getElementById("weather");
    container.innerHTML = "";
    return container;
  };

  const msg = (type, message) => {
    let container = init();
    let div = document.createElement("div");
    div.classList.add("msg");
    div.classList.add(`msg_${type}`);
    div.textContent = message;
    container.appendChild(div);
  };

  const updateRes = (weathers, icons) => {
    let container = init();
    container.appendChild(
      setToday(weathers.address, weathers.curr, weathers.today, icons)
    );
    container.appendChild(setForecast(weathers.forecast, icons));
  };

  const setForecast = (forecast, icons) => {
    let div = document.createElement("div");
    div.classList.add("forecast");
    forecast.forEach((day) => div.appendChild(setOneDay(day, icons)));
    return div;
  };

  const setOneDay = (day, icons) => {
    let div = document.createElement("div");
    div.classList.add("day");
    div.innerHTML = `
      <h3>${format(day.date, "eee, dd-MMM")}</h3>
      <h4>${day.condition}</h4>
      <img src="${icons.get(day.icon)}" alt="${day.icon}">
      <div class="temps">
        <p>Max: <span f=${day.high}>${setTemp(day.high)}</span></p>
        <p>Min: <span f=${day.low}>${setTemp(day.low)}</span></p>
      </div>
      `;
    return div;
  };

  const setToday = (address, curr, today, icons) => {
    let div = document.createElement("div");
    div.classList.add("today");
    div.innerHTML = `
      <h2>${address}</h2>
      <img src="${icons.get(today.icon)}" alt="${today.icon}">
      <h3>${today.condition}</h3>
      <div class="temps">
        <p>Current: <span f=${curr}>${setTemp(curr)}</span></p>
        <p>Max: <span f=${today.high}>${setTemp(today.high)}</span></p>
        <p>Min: <span f=${today.low}>${setTemp(today.low)}</span></p>
      </div>
      `;
    return div;
  };

  const setTemp = (temp) => {
    if (_unit === "°C") {
      const celsius = ((parseFloat(temp) - 32) * 5 / 9).toFixed(1);
      return `${celsius}${_unit}`;
    }
    return `${temp}${_unit}`;
  };

  const changeUnits = () => {
    if (_unit === "°C") {
      _unit = "°F";
    } else {
      _unit = "°C";
    }
    let unit = document.getElementById("change_units");
    unit.textContent = _unit;
    let spans = document.querySelectorAll("span");
    spans.forEach(
      (span) => (span.textContent = setTemp(span.getAttribute("f")))
    );
  };

  return { msg, updateRes, changeUnits };
};

const uiController = UiController();
export default uiController;
