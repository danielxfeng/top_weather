import "./style.css";

let form = document.getElementById("search_form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let city= e.target.elements["city"].value;
  console.log(city);
});





