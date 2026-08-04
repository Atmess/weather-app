export async function getweather(location, date) {

  
    location = location ? location : 'London';


    const cachekey = `weather_${location}`;
    const timekey = `time_${location}`;
    
    const cachedData = localStorage.getItem(cachekey);
    const cachedTime = localStorage.getItem(timekey);
    const currentTime = new Date().getTime();

    if(cachedData && cachedTime && (currentTime - parseInt(cachedTime) < 3600000)) {
        return JSON.parse(cachedData);
    }

    try{
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date.today}/${date.fourdaylater}?key=7LGUQYKLGPE3AC4CNY39DB2Z9&unitGroup=metric`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    localStorage.setItem(cachekey, JSON.stringify(data));
    localStorage.setItem(timekey, currentTime.toString());
    console.log(data);

    return data;
    }
    catch (error){ 
      console.error(error);
    };
} 
