//QUERY SELECTORS
const date = document.querySelector('#weather-date-p');
const weatherInfo = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon-img');

const date1 = document.querySelector('#weather-date-p1');
const weatherInfo1 = document.querySelector('#weather-temp1');

const date2 = document.querySelector('#weather-date-p2');
const weatherInfo2 = document.querySelector('#weather-temp2');

const date3 = document.querySelector('#weather-date-p3');
const weatherInfo3 = document.querySelector('#weather-temp3');

//GETTING AND SETTING THE DATES
let now = new Date()
let current_date = now.toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" });
date.textContent = current_date;

let nowDate = new Date(now);

let next1Day = nowDate;
next1Day.setDate(now.getDate() + 1);
let next1DayFormatted = next1Day.toLocaleDateString('en-us', { weekday: "long" });
let next1DayNumeric = next1Day.toLocaleDateString('en-us', { day: "numeric" });
date1.textContent = next1DayFormatted;

let next2Day = nowDate;
next2Day.setDate(now.getDate() + 2);
let next2DayFormatted = next2Day.toLocaleDateString('en-us', { weekday: "long" });
let next2DayNumeric = next1Day.toLocaleDateString('en-us', { day: "numeric" });
date2.textContent = next2DayFormatted;

let next3Day = nowDate;
next3Day.setDate(now.getDate() + 3);
let next3DayFormatted = next3Day.toLocaleDateString('en-us', { weekday: "long" });
let next3DayNumeric = next1Day.toLocaleDateString('en-us', { day: "numeric" });
date3.textContent = next3DayFormatted;

//25.762288118958942, -80.18792049814361  COORDINATES
//0fd9156e83d87c74cc229489054f52be API KEY


//const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=25.762288118958942&lon=-80.18792049814361&appid=0fd9156e83d87c74cc229489054f52be&units=imperial';
//const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=25.762288118958942&lon=-80.18792049814361&appid=0fd9156e83d87c74cc229489054f52be&units=imperial';

async function getWeatherData() {
    const response = await fetch(urlWeather);
    const data = await response.json();
    weatherInfo.textContent = `${data.main.temp}° F - ${data.weather[0].description}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
}
async function getForecastData() {
    const response = await fetch(urlForecast);
    const data = await response.json();
    console.log(data);


    let next1DayTemp = 0;
    let next1DayDesc = " ";
    let next2DayTemp = 0;
    let next2DayDesc = " ";
    let next3DayTemp = 0;
    let next3DayDesc = " ";

    for (let i = 0; i < data.list.length; i++) {

        let listDate = data.list[i].dt_txt;
        let day = listDate.substring(8, 10);

        if (next1DayNumeric === day) {
            if (data.list[i].main.temp > next1DayTemp) {
                next1DayTemp = data.list[i].main.temp;
                next1DayDesc = data.list[i].weather[0].description;
                weatherInfo1.textContent = `${next1DayTemp}° F - ${next1DayDesc}`;
            }

        }




        if (next2DayNumeric === day) {
            if (data.list[i].main.temp > next2DayTemp) {
                next2DayTemp = data.list[i].main.temp;
                next2DayDesc = data.list[i].weather[0].description
                weatherInfo2.textContent = `${next2DayTemp}° F - ${next2DayDesc}`;
            }

        }



        if (next3DayNumeric === day) {
            if (data.list[i].main.temp > next3DayTemp) {
                next3DayTemp = data.list[i].main.temp;
                next3DayDesc = data.list[i].weather[0].description
                weatherInfo3.textContent = `${next3DayTemp}° F - ${next3DayDesc}`;
            }
        }
    }
}
getWeatherData();
getForecastData();