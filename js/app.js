// load data from api

const weatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86ca62e126398bde164b6872bbb8968a&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayWeather(data));
}

// load current weather by city

const displayWeather = data => {
    // console.log(data)
    setValueById("temperature", data.main.temp);
    setValueById("city-name", data.name);
    setValueById("weather", data.weather[0].main)
    setValueById("country", data.sys.country);
}

const setValueById = (id, text) =>{
    document.getElementById(id).innerText = text;
}

// show weather by search 

document.getElementById("search-btn").addEventListener('click', ()=>{
    showResult();
})

const showResult = () =>{
    const searchArea = document.getElementById("search-field");
    const city = searchArea.value;
    weatherData(city)
    searchArea.value = '';
}

document.getElementById("search-field").addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        // console.log('Enter')
        showResult();
    }
})

weatherData('dhaka')