
//43.82347938036331, -111.79453520977242    COORDINATES
//0fd9156e83d87c74cc229489054f52be API KEY

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82347938036331&lon=-111.79453520977242&appid=0fd9156e83d87c74cc229489054f52be&units=imperial';
const temp = document.querySelector('#temp');
const tempImg = document.querySelector('#tempImg');

async function getWeatherData(){
    const response = await fetch(url);
    const data = await response.json();
    temp.textContent = `${data.main.temp}° F - ${data.weather[0].description}`;
    tempImg.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); 
}
getWeatherData();