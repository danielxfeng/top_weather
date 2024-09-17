const Controller = () => {
    const _ui = Ui();

    async function getWeather(city) {
        try {
            let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city);
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getIcon(weather) {
        try {
            let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + weather);
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getForecast(city) {
        try {
            let forest = await getWeather(city);
            let icons = forest.weathers.map((weather) => await getIcon(weather));
            _ui.setRes(forest, icons);
        } catch (error) {
            console.log(error);
        }
    }

    return { getForecast };
}

const Ui = () => {
    const setRes = (forest, icons) => {
        console.log(forest);
        console.log(icons);
    }

    return { setRes };
}

const controller = Controller();

export default controller;