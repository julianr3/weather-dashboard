// 32b827099a291259fd16d985e09fcb8c API KEY

// https://api.openweathermap.org/data/2.5/onecall?lat=25.8&lon=43.1&appid=32b827099a291259fd16d985e09fcb8c

// fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=25.8&lon=43.1&appid=32b827099a291259fd16d985e09fcb8c")
// .then(function (response){
//   return response.json()
// })
// .then(function(data){
//   console.log (data)
// })

function getWeather(event) {
  event.preventDefault()
  var cityName = document.getElementById("new-city").value
  fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=32b827099a291259fd16d985e09fcb8c")
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      var lat = data[0].lat
      var lon = data[0].lon
      var lastCity = data[0].name

      var lastCityEl = document.getElementById("city-button")

      lastCityEl.textContent = lastCity


      fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=32b827099a291259fd16d985e09fcb8c")
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          console.log(data)

          // get elements
          var currentTempEl = document.getElementById("current-temp");
          var currentHumidityEl = document.getElementById("current-humidity")
          var currentWindEl = document.getElementById("current-wind")

          var monTempEl = document.getElementById("daily-mon")
          var tuesTempEl = document.getElementById("daily-tues")
          var wedTempEl = document.getElementById("daily-wed")
          var thurTempEl = document.getElementById("daily-thur")
          var friTempEl = document.getElementById("daily-fri")

          

          // change some properties of the elements
          currentTempEl.textContent = "Temperature: "+data.current.temp+"*F"
          currentHumidityEl.textContent = "Humidity: "+data.current.humidity+"%"
          currentWindEl.textContent = "Wind: "+data.current.wind_speed+" MPH"
          
          monTempEl.textContent = "Temp: "+data.daily[1].temp.day+ " Humidity: "+data.daily[1].humidity+ " Wind Speed: "+data.daily[1].wind_speed
          tuesTempEl.textContent = "Temp: "+data.daily[2].temp.day+ " Humidity: "+data.daily[2].humidity+ " Wind Speed: "+data.daily[2].wind_speed
          wedTempEl.textContent = "Temp: "+data.daily[3].temp.day+ " Humidity: "+data.daily[3].humidity+ " Wind Speed: "+data.daily[3].wind_speed
          thurTempEl.textContent = "Temp: "+data.daily[4].temp.day+ " Humidity: "+data.daily[4].humidity+ " Wind Speed: "+data.daily[4].wind_speed
          friTempEl.textContent = "Temp: "+data.daily[5].temp.day+ " Humidity: "+data.daily[5].humidity+ " Wind Speed: "+data.daily[5].wind_speed


        })
    })

}

var cityForm = document.getElementById("user-form")
cityForm.addEventListener("submit", getWeather)
















// var userFormEl = document.querySelector('#user-form');
// var languageButtonsEl = document.querySelector('#language-buttons');
// var nameInputEl = document.querySelector('#username');
// var repoContainerEl = document.querySelector('#repos-container');
// var repoSearchTerm = document.querySelector('#repo-search-term');

// var formSubmitHandler = function (event) {
//   event.preventDefault();

//   var username = nameInputEl.value.trim();

//   if (username) {
//     getUserRepos(username);

//     repoContainerEl.textContent = '';
//     nameInputEl.value = '';
//   } else {
//     alert('Please enter a GitHub username');
//   }
// };

// var buttonClickHandler = function (event) {
//   var language = event.target.getAttribute('data-language');

//   if (language) {
//     getFeaturedRepos(language);

//     repoContainerEl.textContent = '';
//   }
// };

// var getUserRepos = function (user) {
//   var apiUrl = 'https://api.github.com/users/' + user + '/repos';

//   fetch(apiUrl)
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           displayRepos(data, user);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert('Unable to connect to GitHub');
//     });
// };

// var getFeaturedRepos = function (language) {
//   var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayRepos(data.items, language);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   });
// };

// var displayRepos = function (repos, searchTerm) {
//   if (repos.length === 0) {
//     repoContainerEl.textContent = 'No repositories found.';
//     return;
//   }

//   repoSearchTerm.textContent = searchTerm;

//   for (var i = 0; i < repos.length; i++) {
//     var repoName = repos[i].owner.login + '/' + repos[i].name;

//     var repoEl = document.createElement('div');
//     repoEl.classList = 'list-item flex-row justify-space-between align-center';

//     var titleEl = document.createElement('span');
//     titleEl.textContent = repoName;

//     repoEl.appendChild(titleEl);

//     var statusEl = document.createElement('span');
//     statusEl.classList = 'flex-row align-center';

//     if (repos[i].open_issues_count > 0) {
//       statusEl.innerHTML =
//         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
//     } else {
//       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
//     }

//     repoEl.appendChild(statusEl);

//     repoContainerEl.appendChild(repoEl);
//   }
// };

// userFormEl.addEventListener('submit', formSubmitHandler);
// languageButtonsEl.addEventListener('click', buttonClickHandler);
