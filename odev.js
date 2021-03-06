import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

document.querySelector("#populationBigger").addEventListener("click", function() {
  const newData  = data.filter((city) => {
    return city.population > 500000;
  });
    createTableElements(newData, "allcities");
});

document.querySelector("#landAreaLess").addEventListener("click", function() {
  const newData  = data.filter((city) => {
    return city.landArea < 1000;
  });
    createTableElements(newData, "allcities");
});


document.querySelector("#isPopulationLess").addEventListener("click", () => {
  createTableElements([], "allcities");
  const populationLess = data.some(city => city.population < 100000);
 alert((populationLess) ? populationLess : false);
});


document.querySelector("#isLandBigger").addEventListener("click", () => {
  createTableElements([], "allcities");
  const landBigger = data.some(city => city.landArea > 100);
 alert((landBigger) ? landBigger : false);
});


const selectOptions = (data) => {
  const selectOptionElement = document.querySelector("#inputGroupSelect01");
  data.forEach((city) => {
    const cityOption = document.createElement("option");
    cityOption.text = city.name;
    cityOption.value = city.name;
    selectOptionElement.appendChild(cityOption);
  });
};

selectOptions(data);
document.querySelector("#inputGroupSelect01").addEventListener("change", (event) => {
  const selected = data.filter(city => event.target.value === city.name);
  createTableElements(selected, "singlecity");
});