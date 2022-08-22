let formField = document.querySelector("form");
let details = document.querySelector(".details");
let condition = details.firstElementChild.nextElementSibling;
let CityName = details.firstElementChild;
let tmprtr = condition.nextElementSibling.firstElementChild;
let img_time = details.previousElementSibling.previousElementSibling
let icon = details.previousElementSibling.firstElementChild

console.log(icon)
formField.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = formField.city.value.trim();
  updateCity(city).then((data) => {
    
    localStorage.setItem("city", city);
    updateUI(data);
  });
});

let updateCity = async (city) => {
  let place = await getCity(city);
  let weatherForecast = await getWeather(place.Key);
  //console.log(place, weatherForecast)
  return {place, weatherForecast};
  /* {
    place: place,
    weatherForecast: weatherForecast
   }*/
  /*
  return {
     // place: place.LocalizedName,
    // forecast: weatherForecast.WeatherText,
    // temp: weatherForecast.Temperature.Metric.Value,
    // time: weatherForecast.IsDayTime
  }
  */ 


};

let updateUI = (data) => {
//destructuring
let { place, weatherForecast} = data;
  let lugar,
  panahon,
  temp_ = "";  
  temp_ = `${weatherForecast.Temperature.Metric.Value}`;
  panahon = `${weatherForecast.WeatherText}`;
  lugar = `${place.EnglishName}`;
  CityName.innerHTML = lugar;
  condition.innerHTML = panahon;
  tmprtr.innerHTML = temp_;

    let time = null;
    if(weatherForecast.IsDayTime){
        time = 'img/day.svg'
    }else{
        time = 'img/night.svg'
    }
    img_time.setAttribute('src', time);

    const iKonScr =  `img/icons/${weatherForecast.WeatherIcon}.svg`;
    icon.setAttribute('src', iKonScr);

  if (details.parentElement.classList.contains("d-none")) {
    details.parentElement.classList.remove("d-none");
  } else {
    details.parentElement.classList.add("d-none");
  }
};

if (localStorage.getItem("city")) {
  updateCity(localStorage.getItem("city")).then((data) => updateUI(data));
}
