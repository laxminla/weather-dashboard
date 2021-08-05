
const apiKey = '4a18b5da63049b1fd79c9ec12ae13b97'
var url = 'https://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=4a18b5da63049b1fd79c9ec12ae13b97'
// "http://www.openweather.com/weather?q=" + searchTerm + '&api=' + apiKey;




function displayWeather() {
  var lat;
  var lon;
  var searchTerm = document.querySelector('#cityName').value;
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=" + apiKey;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      lat = data["coord"]["lat"];
      lon = data['coord']["lon"];
      console.log(lat, lon)
      var oneCallUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&appid=' + apiKey;
      console.log(oneCallUrl, lat, lon)

      fetch(oneCallUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          

        });
    });



}






  // moment().format("MMM Do YY");
  // var today = moment();
