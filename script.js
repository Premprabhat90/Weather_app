const apiKey = "f26fa9abb87d2a4414b2c80ac6156752";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=matric&q=";

const searchBox = Document.querySelector(".search input");
const searchBtn = Document.querySelector(".search button");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response .json();

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";


}
searchBtn.addEventListener('click',() => {
    checkWeather(searchBox.value);
})
checkWeather()





