// API - open weather map

// catch the DOM elements to subsequently amend them


const searchForm = document.getElementById("search-form");
const searchbox = document.getElementById("searchbox");
const  weatherCard = document.getElementById("weather-card")



const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const range = document.getElementById('range');
const imgIcon = document.getElementById("temp-img");







searchForm.addEventListener('submit', onSubmit, true);

const api = {
 key: '3650296c7ff08dc422f8f58487837722',                          /*API key*/ 
 url: 'https://api.openweathermap.org/data/2.5/weather'            /* API URL */ 
}



 function displayBackground(obj) {
 console.log(obj)
 if (obj <= 14) {
    weatherCard.classList.toggle("night-landscape")
 }
    weatherCard.classList.toggle("sunny-landscape")

 }

async function search(query) {    
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`); 
        const data = await response.json();
      
       

         
        

        
        city.innerHTML =`${data.name}, ${data.sys.country}`;
        data.innerHTML = (new Date()).toLocaleDateString();
    
        temp.innerHTML = `${toCelsius(data.main.temp)}°C`;
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `${toCelsius(data.main.temp_min)}°C / ${toCelsius(data.main.temp_max)}°C` 

        displayBackground(toCelsius(data.main.temp))
    } catch (error) {
        console.log(error)
        alert('hubo un error')
    }
  


    

} 



function toCelsius(kelvin) {
    return  Math.round(kelvin - 273.15);
}

function onSubmit(e) {
event.preventDefault();
search(searchbox.value);
}




