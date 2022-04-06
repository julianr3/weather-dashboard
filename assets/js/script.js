function getWeather(event) {
  event.preventDefault()
  // used to get the weather information for selected city
  var cityName = document.getElementById("new-city").value
  fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=32b827099a291259fd16d985e09fcb8c")
    .then(function (response) {
      return response.json()
    })
    // longitude and latitude retrieval for weather API
    .then(function (data) {
      console.log(data)
      var lat = data[0].lat
      var lon = data[0].lon
      var lastCity = data[0].name
// to display the last city that was searched
      var lastCityEl = document.getElementById("city-button")

      lastCityEl.textContent = lastCity

// weather API 
      fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=32b827099a291259fd16d985e09fcb8c")
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          console.log(data)

          // gets elements
          var currentTempEl = document.getElementById("current-temp");
          var currentHumidityEl = document.getElementById("current-humidity")
          var currentWindEl = document.getElementById("current-wind")
          // get elements for the 5 day forecast 
          var monTempEl = document.getElementById("daily-mon")
          var tuesTempEl = document.getElementById("daily-tues")
          var wedTempEl = document.getElementById("daily-wed")
          var thurTempEl = document.getElementById("daily-thur")
          var friTempEl = document.getElementById("daily-fri")


          // change some properties of the elements
          currentTempEl.textContent = "Temperature: "+data.current.temp+"*F"
          currentHumidityEl.textContent = "Humidity: "+data.current.humidity+"%"
          currentWindEl.textContent = "Wind: "+data.current.wind_speed+" MPH"
          // displays temp, humidity, and windspeed for five day forecast 
          monTempEl.textContent = "Temp: "+data.daily[1].temp.day+ " Humidity: "+data.daily[1].humidity+ " Wind Speed: "+data.daily[1].wind_speed
          tuesTempEl.textContent = "Temp: "+data.daily[2].temp.day+ " Humidity: "+data.daily[2].humidity+ " Wind Speed: "+data.daily[2].wind_speed
          wedTempEl.textContent = "Temp: "+data.daily[3].temp.day+ " Humidity: "+data.daily[3].humidity+ " Wind Speed: "+data.daily[3].wind_speed
          thurTempEl.textContent = "Temp: "+data.daily[4].temp.day+ " Humidity: "+data.daily[4].humidity+ " Wind Speed: "+data.daily[4].wind_speed
          friTempEl.textContent = "Temp: "+data.daily[5].temp.day+ " Humidity: "+data.daily[5].humidity+ " Wind Speed: "+data.daily[5].wind_speed


        })
    })

}
// used for search button 
var cityForm = document.getElementById("user-form")
cityForm.addEventListener("submit", getWeather)
