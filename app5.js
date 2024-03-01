
let city=document.getElementById('city');
let temp=document.getElementById('temp');
let humidity=document.getElementById('humidity');
let wind=document.getElementById('wind');
let weathericon=document.getElementById('weather-icon');

let apikey="52362d0947cea32926f659d9f547fc15";
let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
function searchWeather(){
    let searchCity=document.getElementById('searchCity');
    let url=apiurl+searchCity.value+`&appid=${apikey}`
    // let url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=delhi&appid=52362d0947cea32926f659d9f547fc15"
    let fetchstatus=fetch(url)
    if (fetchstatus==404){
        document.querySelector(".error").style.display="block";
        document.querySelector('.weather').style.display="none";
    }
    else{
        fetchstatus.then((data)=>{
            return data.json();
        }).then((data)=>{
            city.innerText=data.name;
            temp.innerText=data.main.temp + '°C';
            humidity.innerText=data.main.humidity + '%';
            wind.innerText=data.wind.speed + 'km/h';
            if (data.weather[0].main=="Clouds"){
                weathericon.src="images/clouds.png";
            }
            else if (data.weather[0].main=="Haze"){
                weathericon.src="images/clouds.png";
            }
            else if (data.weather[0].main=="Clear"){
                weathericon.src="images/clear.png";
            }
            else if (data.weather[0].main=="Rain"){
                weathericon.src="images/rain.png";
            }
            else if (data.weather[0].main=="Drizzle"){
                weathericon.src="images/drizzle.png";
            }
            else if (data.weather[0].main=="Mist"){
                weathericon.src="images/mist.png";
            }
            document.querySelector('.weather').style.display="block";
            // console.log(data)
        })
    }
    // fetch(url).then((data)=>{
    //     return data.json();
    // }).then((data)=>{
    //     city.innerText=data.name;
    //     temp.innerText=data.main.temp + '°C';
    //     humidity.innerText=data.main.humidity + '%';
    //     wind.innerText=data.wind.speed + 'km/h';
    //     if (data.weather[0].main=="Clouds"){
    //         weathericon.src="images/clouds.png";
    //     }
    //     else if (data.weather[0].main=="Haze"){
    //         weathericon.src="images/clouds.png";
    //     }
    //     else if (data.weather[0].main=="Clear"){
    //         weathericon.src="images/clear.png";
    //     }
    //     else if (data.weather[0].main=="Rain"){
    //         weathericon.src="images/rain.png";
    //     }
    //     else if (data.weather[0].main=="Drizzle"){
    //         weathericon.src="images/drizzle.png";
    //     }
    //     else if (data.weather[0].main=="Mist"){
    //         weathericon.src="images/mist.png";
    //     }
    //     document.querySelector('.weather').style.display="block";
    //     console.log(data)
    // })
    console.log("hello js")
}
searchWeather();