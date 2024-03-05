const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url= 'https://api.openweathermap.org/data/2.5/weather?lat=49.752136736027836&lon=6.750845731812663&appid=0fd9156e83d87c74cc229489054f52be&units=imperial';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            const icon = data.weather[0].icon;
            
            currentTemp.textContent = `${data.main.temp} °F`;
            weatherIcon.setAttribute('src',`https://openweathermap.org/img/wn/${icon}@2x.png`)
            weatherIcon.setAttribute('alt','weather icon');
            captionDesc.textContent = data.weather[0].description;
            console.log(data);

        }else{
            throw Error(await response.text());
        }       
    }catch (error){
        console.log(error);
    }
}
apiFetch();