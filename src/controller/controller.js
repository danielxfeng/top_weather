import api from "./api";
import Weathers from "../model/weathers";
import uiController from "./ui_controller";
import icons from "../model/icons";

const Controller = () => {
  let _weathers = Weathers();

  const performSearch = async (city) => {
    try {
      const data = await api.visualcrossing(city);
      _weathers.fromVisualCrossing(data);
      let weathers = _weathers.get();
      const iconKeys = [
        weathers.today.icon,
        ...weathers.forecast.map((day) => day.icon),
      ];
      await Promise.allSettled(iconKeys.map(async (key) => addIcon(key)));
      icons.serialize();
      uiController.updateRes(weathers, icons.get());
    } catch (error) {
      uiController.msg("err", error);
    }
  };

  const addIcon = async (key) => {
    if (icons.exist(key)) {
      return;
    }
    const data = await api.giphy(key);
    if (!data.data || data.data.length <= 0) {
      throw new Error(`No icon found for key: ${key}`);
    }
    const value = data.data[0].images.original.url;
    if (!value) {
      throw new Error(`No icon found for key: ${key}`);
    }
    icons.add(key, value);
  };

  const changeUnit = () => {
    uiController.changeUnits();
  };

  return { performSearch, changeUnit };
};

const controller = Controller();

export default controller;
