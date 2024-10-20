
# Weather API

The weather-api application here gives an application of using "fetch()" keyword which is used in JavaScript for API calls. The application here gives information regarding the weather conditions of a particular place which the user enters. In this application, the API call is being sent to Open Weather API, this being widely used weather API.


## API Reference

#### Get the weather information of a place by passing latitude and longitude corresponding to that place

```http
  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API key` | `string` | **Required**. Your API key |
| `lat`     | `number` | **Required**. Latitude of the place|
|  `lon`    | `number` | **Required**. Longitude of the place| 

#### Get the longitude and latitude of the place

```http
 http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `API key` | `string` | **Required**. Your API key |
| `city name`|`string`| **Required**. City name|
| `state code`|`string`|**Optional**. State code|
| `country code`| `string`|**Optional**. Country name|
| `limit`| `number`|**Optional**. Number of locations in API response|

Among the city name, state code and country code, atleast one of the fields must be present.



## Documentation

[Open Weather API](https://openweathermap.org/api)

The Open Weather API is a widely used weather API, which gives the weather reports of various places.

#### Working

1. The application here first makes the API call to Geocoding API to get the details of the latitude and longitude of the place given by the user.

2. Further, the values of latitude and longitude are passed as parameters to Current Weather Data API which provides the data in JSON format. This JSON data has details like temperature,  rain, clouds, desciption, pressure, humidity etc.

3. To retrive the information from JSON, use object retriving methods, as JSON File is similar to a Javascript object.

4. According to the requirement, use the weather details provided in JSON.

5. The application here gives information like maximum temperature, minimum temperature, feels like temperature, humidity, pressure, current temperature, sunrise and sunset.
