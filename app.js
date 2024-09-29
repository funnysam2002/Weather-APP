
function getWeather() {
    const city = document.getElementById("cityName").value; 
    //Checking input
    if (city) {
        fetchWeather(city); 
    } else {
        alert('Please enter a city name');
    }
}
function fetchWeather(city){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=545024f0ea9acdf9948a6d7381ec0ba2`)
    .then((res)=> res.json())
    .then((data)=>{
        const lat = data[0].lat
        const lon = data[0].lon
        const cord = {"latitude":lat,"longitude":lon}
        return cord;
    })
    .then((cord)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cord["latitude"]}&lon=${cord["longitude"]}&appid=545024f0ea9acdf9948a6d7381ec0ba2`)
        .then((res1)=> res1.json())
        .then((data1)=>{
            const details ={"maxTemp":data1["main"]["temp_max"],"minTemp":data1["main"]["temp_min"],
                "feelsLikeTemp":data1["main"]["feels_like"],"humidity":data1["main"]["humidity"],
                "Temp":data1["main"]["temp"],"Pressure":data1["main"]["pressure"],
                "description":data1["weather"][0]["description"],"Sunrise":new Date(data1["sys"]["sunrise"]*1000).toLocaleTimeString(),
                "Sunset":new Date(data1["sys"]["sunset"]*1000).toLocaleTimeString(),"Icon":data1["weather"][0]["icon"]} ;

    
                // document.getElementById('city-name').textContent = city;
                let cityDisplay = city[0].toUpperCase()+city.slice(1);
                document.getElementById('descicon').src = `http://openweathermap.org/img/w/${details.Icon}.png`;
                document.getElementById('description').innerText = `${details.description}`;
                document.getElementById('temp').innerText = `${details.Temp} K`;
                document.getElementById('feelslike').innerText = `${details.feelsLikeTemp} K`;
                document.getElementById('maxtemp').innerText = `${details.maxTemp} K`;
                document.getElementById('mintemp').innerText = `${details.minTemp} K`;
                document.getElementById('humidity').innerText = `${details.humidity}%`;
                document.getElementById('pressure').innerText = `${details.Pressure} hPa`;
                document.getElementById('sunrise').innerText = `${details.Sunrise}`;
                document.getElementById('sunset').innerText = `${details.Sunset}`;
                document.getElementById('discity').innerText = `${cityDisplay}`

                document.querySelector("#searchBox").style.border='none'
                document.getElementById("cityName").style.display = 'none' ;
                document.getElementById("detailsbtn").style.display = 'none' ;

                
        })
    })
    .catch(error=>console.error("error"))
}

document.getElementById('detailsbtn').addEventListener('click', getWeather);

// // Event listener for Enter key
// document.getElementById('city').addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         getWeather(); // Call the same function when Enter is pressed
//     }
// });

// 
document.querySelector("#reset").addEventListener('click',()=>{
    document.getElementById('descicon').src = "";
    document.getElementById('description').innerText = ``;
    document.getElementById('temp').innerText = ``;
    document.getElementById('feelslike').innerText = ``;
    document.getElementById('maxtemp').innerText = ``;
    document.getElementById('mintemp').innerText = ``;
    document.getElementById('humidity').innerText = ``;
    document.getElementById('pressure').innerText = ``;
    document.getElementById('sunrise').innerText = ``;
    document.getElementById('sunset').innerText = ``;
    document.getElementById("cityName").value= '' ;
    document.getElementById('discity').innerText = '';

 
    document.getElementById("cityName").style.display = 'block' ;
    document.getElementById("detailsbtn").style.display = 'block' ;
})

