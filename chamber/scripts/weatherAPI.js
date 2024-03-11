const date = document.querySelector('#weather-date-p');

let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
console.log(now);

date.textContent = now;

//25.762288118958942, -80.18792049814361
//0fd9156e83d87c74cc229489054f52be

const weatherInfo = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon-img');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=25.762288118958942&lon=-80.18792049814361&appid=0fd9156e83d87c74cc229489054f52be&units=imperial';

async function getWeatherData(){
    const response = await fetch(url);
    const data = await response.json();
    weatherInfo.textContent = `${data.main.temp}° F - ${data.weather[0].description}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); 
    weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
}
getWeatherData();