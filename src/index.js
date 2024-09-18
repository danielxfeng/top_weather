import "./style.css";
import controller from "./controller/controller";

let form = document.getElementById("search_form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let city= e.target.elements["city"].value;
  console.log(city);
});

controller.performSearch("New York");