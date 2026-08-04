import clearDay from './PNG/1st Set - Color/clear-day.png';
import clearNight from './PNG/1st Set - Color/clear-night.png';
import partlyCloudyDay from './PNG/1st Set - Color/partly-cloudy-day.png';
import partlyCloudyNight from './PNG/1st Set - Color/partly-cloudy-night.png';
import cloudy from './PNG/1st Set - Color/cloudy.png';
import rain from './PNG/1st Set - Color/rain.png';
import snow from './PNG/1st Set - Color/snow.png';
import fog from './PNG/1st Set - Color/fog.png';
import wind from './PNG/1st Set - Color/wind.png';
import hail from './PNG/1st Set - Color/hail.png';
import rainsnowshowerday from './PNG/1st Set - Color/rain-snow-showers-day.png';
import rainsnowshowernight from './PNG/1st Set - Color/rain-snow-showers-night.png';
import rainsnow from './PNG/1st Set - Color/rain-snow.png';
import showerday from './PNG/1st Set - Color/showers-day.png';
import showernight from './PNG/1st Set - Color/showers-night.png';
import sleet from './PNG/1st Set - Color/sleet.png';
import snowshowersday from './PNG/1st Set - Color/snow-showers-day.png';
import snowshowersnight from './PNG/1st Set - Color/snow-showers-night.png';
import thunderrain from './PNG/1st Set - Color/thunder-rain.png';
import thundershowerday from './PNG/1st Set - Color/thunder-showers-day.png';
import thundershowernight from './PNG/1st Set - Color/thunder-showers-night.png';
import thunder from './PNG/1st Set - Color/thunder.png';

// 2. Create the dictionary mapping the API text to your imports


export async function displayweather(data) {
         const weatherdata = data;
         console.log(weatherdata)

    if (!weatherdata || !weatherdata.days) {
        console.error("No data was passed to displayweather!" ,weatherdata);
        return; 
    }

        const container = document.getElementById('container');

        const weatherIcons = {
    'clear-day': clearDay,
    'clear-night': clearNight,
    'partly-cloudy-day': partlyCloudyDay,
    'partly-cloudy-night': partlyCloudyNight,
    'cloudy': cloudy,
    'rain': rain,
    'snow': snow,
    'fog': fog,
    'wind': wind,
    'hail': hail,
    'rain-snow-showers-day': rainsnowshowerday,
    'rain-snow-showers-night': rainsnowshowernight,
    'rain-snow': rainsnow,
    'showers-day': showerday,
    'showers-night': showernight,
    'sleet': sleet,
    'snow-showers-day': snowshowersday,
    'snow-showers-night': snowshowersnight,
    'thunder-rain': thunderrain,
    'thunder-showers-day': thundershowerday,
    'thunder-showers-night': thundershowernight,
    'thunder': thunder
};

        
   
        const maincontainer = document.getElementById('maincontainer');
        maincontainer.classList.add('main-container');
        maincontainer.innerHTML = '';

        const datecontainer = document.createElement('div');
        datecontainer.classList.add('date-container');

        const daycontainer = document.createElement('div');
        daycontainer.classList.add('day-container');

        const hourscontainer = document.createElement('div');
        hourscontainer.classList.add('hours-container')
        
        const all48hours = [
            weatherdata.days[0].hours,
            weatherdata.days[1].hours,
        ]
        const citytimestring = weatherdata.currentConditions.datetime;
        const curentHour = citytimestring.slice(0 ,2);
        const screentoshow = 6;
        const next24hours = all48hours.flat().slice(curentHour, curentHour + 24);

        if (weatherdata) {  
        console.log(weatherdata);
      
        const divmain = document.createElement('div');
        divmain.classList.add('div-main');

        const divmaintop = document.createElement('div');
        divmaintop.classList.add('div-main-top');

        const cityname = document.createElement('h2');
        cityname.classList.add('city-name');
        cityname.textContent = weatherdata.resolvedAddress;

        const divweather = document.createElement('div');
        divweather.classList.add('div-weather');

        const currentweather = weatherdata.currentConditions.icon;

        const icon = document.createElement('img');
        icon.classList.add('weather-icon');
        icon.src = weatherIcons[currentweather] || clearDay; // Fallback to clearDay if condition is not found
        icon.alt = currentweather;
    

        const temp = document.createElement('p');
        temp.classList.add('temperature');
        temp.textContent = `${weatherdata.currentConditions.temp}°C`;
      
        const celcius = document.createElement('span');
        celcius.classList.add('celcius');
        celcius.textContent = '°C';

        const fahrenheit = document.createElement('span');
        fahrenheit.classList.add('fahrenheit');
        fahrenheit.textContent = '°F';

        const CelciusTemp = weatherdata.currentConditions.temp;
        const FahrenheitTemp = (CelciusTemp * 9/5) + 32;

        const divtempt = document.createElement('div');
        divtempt.classList.add('div-temp');
        divtempt.addEventListener('click', () => {

            if (temp.textContent.includes('°C')) {
                const fahrenheitTemp = FahrenheitTemp.toFixed(1);
                temp.textContent = `${fahrenheitTemp}°F`;
            
            
            const temps= document.querySelectorAll('.hours-temp');
            temps.forEach((hourdata) => {
            // Grab the secret numbers we stored in dataset and do the math
            const temprs = Math.round((hourdata.dataset.temperature * 9/5) + 32);
            hourdata.textContent = `${temprs}°F `;
        });
    // 2. Update Daily Temps
            const dailyTemps = document.querySelectorAll('.day-temp');
            dailyTemps.forEach((dayElement) => {
            // Grab the secret numbers we stored in dataset and do the math
            const maxF = Math.round((dayElement.dataset.tempmax * 9/5) + 32);
            const minF = Math.round((dayElement.dataset.tempmin * 9/5) + 32);
            dayElement.textContent = `${maxF}°F | ${minF}°F`;
        });


            } else {
                const celsiusTemp = CelciusTemp.toFixed(1);
                temp.textContent = `${celsiusTemp}°C`;

            const temps= document.querySelectorAll('.hours-temp');
                 temps.forEach((hourdata) => {
            // Just use the secret numbers exactly as they are!
            const temprs = hourdata.dataset.temperature;
            hourdata.textContent = `${temprs}°C`;
        });
            const dailyTemps = document.querySelectorAll('.day-temp');
            dailyTemps.forEach((dayElement) => {
            // Just use the secret numbers exactly as they are!
            const maxC = dayElement.dataset.tempmax;
            const minC = dayElement.dataset.tempmin;
            dayElement.textContent = `${maxC}°C | ${minC}°C`;
        });

            }
        });

        const divdetail = document.createElement('div');
        divdetail.classList.add('div-detail');

        const humidity = document.createElement('p');
        humidity.classList.add('humidity');
        humidity.textContent = `Humidity: ${weatherdata.currentConditions.humidity}%`;

        const windspeed = document.createElement('p');
        windspeed.classList.add('windspeed');
        windspeed.textContent = `Wind Speed: ${weatherdata.currentConditions.windspeed} km/h`;

        const pressure = document.createElement('p');
        pressure.classList.add('pressure');
        pressure.textContent = `Pressure: ${weatherdata.currentConditions.pressure} hPa`;

        const divdesc = document.createElement('div');
        divdesc.classList.add('div-desc');

        const desctext1 = document.createElement('p');
        desctext1.classList.add('desctext1');
        desctext1.textContent = `Feels Like: ${weatherdata.currentConditions.feelslike}°C`;

        const desctext2 = document.createElement('p');
        desctext2.classList.add('desctext2');
        desctext2.textContent = weatherdata.description;

        const desctext3 = document.createElement('p');
        desctext3.classList.add('desctext3');
        desctext3.textContent = `Visibility: ${weatherdata.currentConditions.visibility} km`;

        const desctext4 = document.createElement('p');
        desctext4.classList.add('desctext4');
        desctext4.textContent = `${weatherdata.currentConditions.conditions}`;

        const desctext5 = document.createElement('p');
        desctext5.classList.add('desctext5');
        desctext5.textContent = `${weatherdata.days[0].datetime}`;


        weatherdata.days.forEach((day) => {
            // Skip the first day as it's already displayed

            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day-div');

            const timeday = new Date(day.datetime);
            const options = { weekday: 'short' };
            const dayName = timeday.toLocaleDateString('en-US', options);


            const dayDate = document.createElement('p');
            dayDate.textContent = dayName;
            
            const dayIcon = document.createElement('img');
            dayIcon.src = weatherIcons[day.icon] || clearDay;
            dayIcon.alt = day.icon;

            const dayTemp = document.createElement('p');
            dayTemp.classList.add('day-temp');
            dayTemp.dataset.tempmax = day.tempmax;
            dayTemp.dataset.tempmin = day.tempmin;

            dayTemp.textContent = `${day.tempmax}°C|${day.tempmin}°C`;


            dayDiv.append(dayDate, dayIcon, dayTemp);
            daycontainer.append(dayDiv);
        });

        for(let i = 0; i<screentoshow; i++){
            const hourdata = next24hours[i];

            const divhours= document.createElement('div');
            divhours.classList.add('div-hours');

            const hourstime = document.createElement('p');
            hourstime.textContent= hourdata.datetime;

            const houricon = document.createElement('img');
            houricon.classList.add('hours-icon');
            houricon.src = weatherIcons[hourdata.icon] || clearDay ;
            houricon.alt = hourdata.icon;
            
            const hourstemp = document.createElement('p');
            hourstemp.classList.add('hours-temp');
            hourstemp.dataset.temperature = hourdata.temp;

            hourstemp.textContent=`${hourdata.temp}°C`;

            


            divhours.append(hourstime,houricon,hourstemp);
            hourscontainer.append(divhours)
        }
            
        
        
        divmain.append(divmaintop,divweather);
        divtempt.append(celcius, ' |' ,fahrenheit);
        divmaintop.append(cityname , divtempt);
        divweather.append(temp,icon , divdetail , divdesc);
        divdetail.append(humidity, windspeed, pressure,desctext2);
        divdesc.append('weather',desctext5,desctext4, desctext3, desctext1);
        maincontainer.append(divmain);
        }

        const divinfo = document.createElement('div');
        divinfo.classList.add('div-info');
        
        const divinfo1 = document.createElement('div');
        divinfo1.classList.add('div-info1');
        
        const textinfo1 = document.createElement('p');
        textinfo1.classList.add('text-info1');
        textinfo1.textContent = 'Weather App by: ';
        divinfo.append(textinfo1);
        
        console.log(all48hours);
        console.log(curentHour);
        console.log(next24hours);

        
        datecontainer.append(daycontainer,hourscontainer);
        maincontainer.append(datecontainer);
        maincontainer.append(divinfo);
        container.append(maincontainer);

}
