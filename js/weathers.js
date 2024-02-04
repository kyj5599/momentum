const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
// https://openweathermap.org/ 에서 API를 받아서 사용해보자 
// API>Current weather data>API doc>Call current weather data>How to make an API call>API call
// API Key를 받아서 사용해보자
// Profile>My API keys>Key
// https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const API_KEY = "3d289892b8f3678145407c5dd1e57edb";

function onGeoOk(position) {
    // 위도
    const lat = position.coords.latitude;
    // 경도
    const log = position.coords.longitude;
    // API를 사용해서 날씨 정보를 가져오자
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    // fetch() : 네트워크 요청을 생성하고 응답을 Promise로 반환 / Promise: 비동기 프로그래밍을 위해 사용되는 객체
    fetch(url)
        .then(response => response.json())
        .then(data => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

// getCurrentPosition(success, error, options)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
