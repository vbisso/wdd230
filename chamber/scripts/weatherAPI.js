//QUERY SELECTORS
const date = document.querySelector('#weather-date-p');
const weatherInfo = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon-img');

const date1 = document.querySelector('#weather-date-p1');
const weatherInfo1 = document.querySelector('#weather-temp1');
const weatherIcon1 = document.querySelector('#weather-temp1-img');

const date2 = document.querySelector('#weather-date-p2');
const weatherInfo2 = document.querySelector('#weather-temp2');
const weatherIcon2 = document.querySelector('#weather-temp2-img');

const date3 = document.querySelector('#weather-date-p3');
const weatherInfo3 = document.querySelector('#weather-temp3');
const weatherIcon3 = document.querySelector('#weather-temp3-img');

//GETTING AND SETTING THE DATES
let now = new Date()
let current_date = now.toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" });
date.textContent = current_date;

let nowDate = new Date(now);

let next1Day = nowDate;
next1Day.setDate(now.getDate() + 1);
let next1DayFormatted = next1Day.toLocaleDateString('en-us', { weekday: "short" });
let next1DayNumeric = next1Day.toLocaleDateString('en-us', { day: "numeric" });
date1.textContent = next1DayFormatted;

let next2Day = nowDate;
next2Day.setDate(now.getDate() + 2);
let next2DayFormatted = next2Day.toLocaleDateString('en-us', { weekday: "short" });
let next2DayNumeric = next2Day.toLocaleDateString('en-us', { day: "numeric" });
date2.textContent = next2DayFormatted;

let next3Day = nowDate;
next3Day.setDate(now.getDate() + 3);
let next3DayFormatted = next3Day.toLocaleDateString('en-us', { weekday: "short" });
let next3DayNumeric = next3Day.toLocaleDateString('en-us', { day: "numeric" });
date3.textContent = next3DayFormatted;

//25.762288118958942, -80.18792049814361  COORDINATES
//0fd9156e83d87c74cc229489054f52be API KEY


const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=25.762288118958942&lon=-80.18792049814361&appid=0fd9156e83d87c74cc229489054f52be&units=imperial';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=25.762288118958942&lon=-80.18792049814361&appid=0fd9156e83d87c74cc229489054f52be&units=imperial';

async function getWeatherData() {
    const response = await fetch(urlWeather);
    const data = await response.json();
    weatherInfo.textContent = `${data.main.temp}° F - ${data.weather[0].description}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
}

const next1Daylist = [];
const next2Daylist = [];
const next3Daylist = [];

async function getForecastData() {
    const response = await fetch(urlForecast);
    const data = await response.json();
    console.log(data);

    
    for (let i = 0; i < data.list.length; i++) {
        let listDate = data.list[i].dt_txt;
        let day = listDate.substring(8, 10);

        if (next1DayNumeric === day) {
            next1Daylist.push(data.list[i].main.temp);
        }

        if (next2DayNumeric === day) {
            next2Daylist.push(data.list[i].main.temp);
        }

        if (next3DayNumeric === day) {
            next3Daylist.push(data.list[i].main.temp);
        }
    }

    //DISPLAY DATA
    const fetchIconUrl = (temp) => {
        const item = data.list.find(item => item.main.temp === temp);
        return `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        //console.log( item.weather[0].icon);
        
    };
    
    let next1MaxDayTemp = Math.max(...next1Daylist);
    let next1MinDayTemp = Math.min(...next1Daylist);
    let next1Daysum = next1Daylist.reduce((total, temp) => total + temp, 0); //calculating the avg temp
    let next1DayAvgTemp = next1Daysum / next1Daylist.length ;
    let iconUrl1 = fetchIconUrl(next1MaxDayTemp);
    weatherInfo1.innerHTML = `<p>${Math.ceil(next1MinDayTemp)}°</p> <meter id="avgTemp1" min="${next1MinDayTemp}" max="${next1MaxDayTemp}"></meter> <p>${Math.ceil(next1MaxDayTemp)}°</p>`;
    const meter1Element= document.querySelector('#avgTemp1');
    let meter1Range = next1MaxDayTemp - next1MinDayTemp;
    let meter1Left = ((next1DayAvgTemp - next1MinDayTemp) / meter1Range)*100;
    meter1Element.style.setProperty('--leftPosition1', `${meter1Left}%`);
    weatherIcon1.innerHTML = `<img src="${iconUrl1}" alt="forecast weather icon 1">`;


    let next2MaxDayTemp = Math.max(...next2Daylist);
    let next2MinDayTemp = Math.min(...next2Daylist);
    let next2Daysum = next2Daylist.reduce((total, temp) => total + temp, 0); //calculating the avg temp
    let next2DayAvgTemp = next2Daysum / next2Daylist.length;
    let iconUrl2 = fetchIconUrl(next2MaxDayTemp);
    weatherInfo2.innerHTML = `<p>${Math.ceil(next2MinDayTemp)}°</p> <meter id="avgTemp2" min="${next2MinDayTemp}" max="${next2MaxDayTemp}"></meter> <p>${Math.ceil(next2MaxDayTemp)}°</p>`;
    const meter2Element= document.querySelector('#avgTemp2');
    let meter2Range = next2MaxDayTemp - next2MinDayTemp;
    let meter2Left = ((next2DayAvgTemp - next2MinDayTemp) / meter2Range)*100;
    meter2Element.style.setProperty('--leftPosition2', `${meter2Left}%`);
    weatherIcon2.innerHTML = `<img src="${iconUrl2}" alt="forecast weather icon 2">`;


    let next3MaxDayTemp = Math.max(...next3Daylist);
    let next3MinDayTemp = Math.min(...next3Daylist);
    let next3Daysum = next3Daylist.reduce((total, temp) => total + temp, 0); //calculating the avg temp
    let next3DayAvgTemp = next3Daysum / next3Daylist.length;
    let iconUrl3 = fetchIconUrl(next3MaxDayTemp);
    weatherInfo3.innerHTML = `<p>${Math.ceil(next3MinDayTemp)}°</p> <meter id="avgTemp3" min="${next3MinDayTemp}" max="${next3MaxDayTemp}"></meter> <p>${Math.ceil(next3MaxDayTemp)}°</p>`;
    const meter3Element= document.querySelector('#avgTemp3');
    let meter3Range = next3MaxDayTemp - next3MinDayTemp;
    let meter3Left = ((next3DayAvgTemp - next3MinDayTemp) / meter3Range)*100;
    meter3Element.style.setProperty('--leftPosition3', `${meter3Left}%`);
    weatherIcon3.innerHTML = `<img src="${iconUrl3}" alt="forecast weather icon 3">`;
    
}

getWeatherData();
getForecastData();