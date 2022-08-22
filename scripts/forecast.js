const API_key = "G8xT2HdX2cbBHa8QRWWW41ax2S9irS73";

// getting city info
let getCity = async (city) => {
  try {
    const base =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${API_key}&q=${city}`;
    const res = await fetch(base + query);
    const data = await res.json();
    return data[0]; // to return the first output
  } catch (e) {
    console.log("something went wrong", e);
  }
};
// getCity('Mapanas')
//     .then(data =>{
//      //console.log( data)
//       return getWeather(data.Key)
//     }).then(data => data);

//getting current weather condition
let getWeather = async (id) => {
  try {
    let host = "http://dataservice.accuweather.com/currentconditions/v1/";
    let query = `${id}?apikey=${API_key}`;
    let res = await fetch(host + query);
    var data = await res.json();
    //console.log(data)
    return data[0];
  } catch (err) {
    console.log(err);
  }
};
//getWeather('265075')
