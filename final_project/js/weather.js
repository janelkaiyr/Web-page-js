
const btnWeather = document.querySelector(".weather__button")
btnWeather.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(function (position) {

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        /*let  lon = 76.92861;
        let  lat = 43.25667;*/
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=9dd56cd34f6f1ae11f8e76c53869014a`)
            .then(function (response) { return response.json() }).then(function (data) {
                console.log(data);
                document.querySelector('.weather__city-name').innerHTML = data.name;
                document.querySelector('.weather__city-temp').innerHTML = data.main.temp + '&deg';
                document.querySelector('.weather__city-description').textContent = data.weather[0]['description'];
            }).catch(document.querySelector('.weather__city-name').innerHTML = "Weather is underfined")

    })

})
