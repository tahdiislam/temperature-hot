// load data from api

const weatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86ca62e126398bde164b6872bbb8968a&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayWeather(data));
}

// load current weather by city

const displayWeather = data => {
    console.log(data)
    const temperature = document.getElementById("temperature");
    temperature.innerText = data.main.temp;
    document.getElementById("city-name").innerText = ''
}

// show weather by search 

document.getElementById("search-btn").addEventListener('click', ()=>{
    const searchArea = document.getElementById("search-field");
    const searchValue = searchArea.value;
    weatherData(searchValue)
})

// weatherData()