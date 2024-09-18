const UiController = () => {
  const msg = (type, message) => {
    console.log(type, message);
  };

  const updateRes = (weathers, icons) => {
    console.log("weathers", weathers);
    console.log("icons", icons);
  };

  return { msg, updateRes };
};

const uiController = UiController();
export default uiController;
