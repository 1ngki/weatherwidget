let widgetForm = document.getElementById('searchForm'),
cityName = document.getElementById('name'),
countryName = document.getElementById('country'),
cloudsDescription = document.getElementById('description'),
cityTemp = document.getElementById('temp'),
cityTempMin = document.getElementById('temp_min'),
cityTempMax = document.getElementById('temp_max'),
cityWind = document.getElementById('wind'),
cityClouds = document.getElementById('clouds'),
cityPressure = document.getElementById('pressure'),
cityCoord = document.getElementById('coord');

widgetForm.addEventListener('submit', function(){
  let searchInput = document.getElementById('search');
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value +
      '&appid=253ad7c65843809561caf083ff2d4465', true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
    let parseText = JSON.parse(xhr.responseText);
    cityName.innerHTML = parseText.name + ',';
    countryName.innerHTML = parseText.sys.country  + ',';
    cloudsDescription.innerHTML = parseText.weather[0].description + '</br>';
    cityTemp.innerHTML = Math.ceil(parseText.main.temp - 273) + '°С';
    cityTempMin.innerHTML = 'temperature from ' + Math.ceil(parseText.main.temp_min - 273) + ' to';
    cityTempMax.innerHTML = Math.ceil(parseText.main.temp_max - 273) + ' °С,';
    cityWind.innerHTML = 'wind ' + parseText.wind.speed + ' m/s.';
    cityClouds.innerHTML = 'clouds ' + parseText.clouds.all + ' %,';
    cityPressure.innerHTML = parseText.main.pressure + ' hpa'  + '</br>';
    cityCoord.innerHTML = 'Geo coords [' + parseText.coord.lat + ', ' + parseText.coord.lon + ']';
  }
})
