
// function getWeather() {
//     const key = '4a18b5da63049b1fd79c9ec12ae13b97'
//     const url = 'api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}'

    // fetch(url).then(resp => resp.json()).then(data => console.log(data))



const apiKey = '4a18b5da63049b1fd79c9ec12ae13b97'
var searchTerm = document.querySelector('#cityName').value;
var url = "http://www.openweather.com/weather?q=" + searchTerm + '&api=' + apiKey;


fetch('https://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=4a18b5da63049b1fd79c9ec12ae13b97')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


var lat = 38.4666
var lon = -121.3177
var oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&appid=4a18b5da63049b1fd79c9ec12ae13b97'


fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&appid=4a18b5da63049b1fd79c9ec12ae13b97')
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });