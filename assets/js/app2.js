/* API Flickr para imagen de fondo */
fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=c60c3fa5fe3d5aec17baf1cc7495e1db&per_page=10&format=json&nojsoncallback=1')
  .then(function (response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function (data) {
    //console.log(data);
    let backgroundImage = document.getElementById('backgroundImage');
    let ID = '22831598717';
    let FARM = '1';
    let SERVER = '581';
    let SECRET = 'ff62d48a3c'; 
      let image = document.createElement('img');
      image.setAttribute('class', 'imagen')
      image.setAttribute('src', 'http://farm'+FARM+'.static.flickr.com/'+SERVER+'/'+ID+'_'+SECRET+'.jpg');
      backgroundImage.appendChild(image);
})

/* Revisando si mi navegador soporta geolocalización */
 if ("geolocation" in navigator) {
  //alert('Tu navegador soporta geolocalización');
} else {
  //alert('Tu navegador no soporta geolocalización');
}

/* Buscando mi ubicación */
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

/* API Darksky Predicción del clima */
fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9cdb8119e61f583c61178e5b9359792d/'+pos.lat+','+pos.lng)
.then(function(respuesta) {
  // Convertir a JSON
  return respuesta.json();
})
.then(function(resp) {
  // Ahora 'j' es un objeto JSON
  console.log(resp);

/* Imagen del contenedor de los datos del clima */





//Palabra Monday
let Monday = document.getElementById('Monday');
let pMonday = document.createElement('p');
let divMonday = document.createElement('div');
let titleMonday = document.createTextNode('Monday');
pMonday.appendChild(titleMonday);
divMonday.className='divMonday';
Monday.appendChild(divMonday);

let mondayImage = resp.daily.data[0].icon;
console.log(mondayImage);

for (let i = 0; i < weather.length; i++) {
  if (mondayImage === weather[i].time){
    let iconWeather = document.createElement('img');
    iconWeather.setAttribute('src', weather[i].image);
    let divImageweather = document.createElement('div');
    divImageweather.appendChild(iconWeather);
    divMonday.appendChild(divImageweather);
    divMonday.appendChild(pMonday);

  }
}


let divValmonday= document.createElement('div');
let pValmonday = document.createElement('p');
let valuehighMonday = (((((resp.daily.data[0].apparentTemperatureHigh) - 32))*5)/9).toFixed(0);
let valuelowMonday = (((((resp.daily.data[0].apparentTemperatureLow) - 32))*5)/9).toFixed(0);
let expresionMonday = (valuelowMonday+'°-'+valuehighMonday+'°');
let textValmonday = document.createTextNode(expresionMonday);
pValmonday.appendChild(textValmonday);
divValmonday.appendChild(pValmonday);
Monday.appendChild(divValmonday);

//Palabra Tuesday

let Tuesday = document.getElementById('Tuesday');
let pTuesday = document.createElement('p');
let divTuesday = document.createElement('div');
divTuesday.className='divTuesday';
let titleTuesday = document.createTextNode('Tuesday');
pTuesday.appendChild(titleTuesday);

Tuesday.appendChild(divTuesday);

let tuesdayImage = resp.daily.data[1].icon;
console.log(tuesdayImage);

for (let i = 0; i < weather.length; i++) {
  if (tuesdayImage === weather[i].time){
    let iconWeather = document.createElement('img');
    iconWeather.setAttribute('src', weather[i].image);
    let divImageweather = document.createElement('div');
    divImageweather.appendChild(iconWeather);
    divTuesday.appendChild(divImageweather);
    divTuesday.appendChild(pTuesday);
  }
}

let divValtuesday= document.createElement('div');
let pValtuesday = document.createElement('p');
let valuehighTuesday = (((((resp.daily.data[1].apparentTemperatureHigh) - 32))*5)/9).toFixed(0);
let valuelowTuesday = (((((resp.daily.data[1].apparentTemperatureLow) - 32))*5)/9).toFixed(0);
let expresionTuesday = (valuelowTuesday+'°-'+valuehighTuesday+'°');
let textValtuesday = document.createTextNode(expresionTuesday);
pValtuesday.appendChild(textValtuesday);
divValtuesday.appendChild(pValtuesday);
Tuesday.appendChild(divValtuesday);

//Palabra Wednesday

let Wednesday = document.getElementById('Wednesday');
let pWednesday = document.createElement('p');
let divWednesday = document.createElement('div');
divWednesday.className = 'divWednesday';
let titleWednesday = document.createTextNode('Wednesday');
pWednesday.appendChild(titleWednesday);
Wednesday.appendChild(divWednesday);

let wednesdayImage = resp.daily.data[2].icon;
console.log(wednesdayImage);

for (let i = 0; i < weather.length; i++) {
  if (wednesdayImage === weather[i].time){
    let iconWeather = document.createElement('img');
    iconWeather.setAttribute('src', weather[i].image);
    let divImageweather = document.createElement('div');
    divImageweather.appendChild(iconWeather);
    divWednesday.appendChild(divImageweather);
    divWednesday.appendChild(pWednesday);
  }
}

let divValwednesday= document.createElement('div');
let pValwednesday = document.createElement('p');
let valuehighWednesday = (((((resp.daily.data[2].apparentTemperatureHigh) - 32))*5)/9).toFixed(0);
let valuelowWednesday = (((((resp.daily.data[2].apparentTemperatureLow) - 32))*5)/9).toFixed(0);
let expresionWednesday = (valuelowWednesday+'°-'+valuehighWednesday+'°');
let textValwednesday = document.createTextNode(expresionWednesday);
pValwednesday.appendChild(textValwednesday);
divValwednesday.appendChild(pValwednesday);
Wednesday.appendChild(divValwednesday);

//Palabra Thursday

let Thursday = document.getElementById('Thursday');
let pThursday = document.createElement('p');
let divThursday = document.createElement('div');
let titleThursday = document.createTextNode('Thursday');
pThursday.appendChild(titleThursday);
divThursday.appendChild(pThursday);
divThursday.className = 'divThursday';
Thursday.appendChild(divThursday);

let thusrdayImage = resp.daily.data[3].icon;
console.log(thusrdayImage);

for (let i = 0; i < weather.length; i++) {
  if (thusrdayImage === weather[i].time){
    let iconWeather = document.createElement('img');
    iconWeather.setAttribute('src', weather[i].image);
    let divImageweather = document.createElement('div');
    divImageweather.appendChild(iconWeather);
    divThursday.appendChild(divImageweather);
    divThursday.appendChild(pThursday);
  }
}

let divValthursday= document.createElement('div');
let pValthursday = document.createElement('p');
let valuehighThursday = (((((resp.daily.data[3].apparentTemperatureHigh) - 32))*5)/9).toFixed(0);
let valuelowWThursday = (((((resp.daily.data[3].apparentTemperatureLow) - 32))*5)/9).toFixed(0);
let expresionThursday = (valuelowWThursday+'°-'+valuehighThursday+'°');
let textValthursday = document.createTextNode(expresionThursday);
pValthursday.appendChild(textValthursday);
divValthursday.appendChild(pValthursday);
Thursday.appendChild(divValthursday);


//Palabra Friday

let Friday = document.getElementById('Friday');
let pFriday = document.createElement('p');
let divFriday = document.createElement('div');
let titleFriday = document.createTextNode('Friday');
pFriday.appendChild(titleFriday);
divFriday.className = 'divFriday';
Friday.appendChild(divFriday);

let fridayImage = resp.daily.data[4].icon;
console.log(fridayImage);

for (let i = 0; i < weather.length; i++) {
  if (fridayImage === weather[i].time){
    let iconWeather = document.createElement('img');
    iconWeather.setAttribute('src', weather[i].image);
    let divImageweather = document.createElement('div');
    divImageweather.appendChild(iconWeather);
    divFriday.appendChild(divImageweather);
    divFriday.appendChild(pFriday);
  }
}

let divValfriday= document.createElement('div');
let pValfriday = document.createElement('p');
let valuehighFriday = (((((resp.daily.data[4].apparentTemperatureHigh) - 32))*5)/9).toFixed(0);
let valuelowWFriday = (((((resp.daily.data[4].apparentTemperatureLow) - 32))*5)/9).toFixed(0);
let expresionFriday = (valuelowWFriday+'°-'+valuehighFriday+'°');
let textValfriday = document.createTextNode(expresionFriday);
pValfriday.appendChild(textValfriday);
divValfriday.appendChild(pValfriday);
Friday.appendChild(divValfriday);


//Palabra Saturday

let Saturday = document.getElementById('Saturday');
let pSaturday = document.createElement('p');
let divSaturday = document.createElement('div');
let titleSaturday = document.createTextNode('Saturday');
pSaturday.appendChild(titleSaturday);
divSaturday.className = 'divSaturday';
Saturday.appendChild(divSaturday);

let saturdayImage = resp.daily.data[5].icon;
console.log(saturdayImage);

for (let i = 0; i < weather.length; i++) {
  if (saturdayImage === weather[i].time){
    let iconWeather = document.createElement('img');
    iconWeather.setAttribute('src', weather[i].image);
    let divImageweather = document.createElement('div');
    divImageweather.appendChild(iconWeather);
    divSaturday.appendChild(divImageweather);
    divSaturday.appendChild(pSaturday);
  }
}

let divValsaturday= document.createElement('div');
let pValsaturday = document.createElement('p');
let valuehighSaturday = (((((resp.daily.data[5].apparentTemperatureHigh) - 32))*5)/9).toFixed(0);
let valuelowWSaturday = (((((resp.daily.data[5].apparentTemperatureLow) - 32))*5)/9).toFixed(0);
let expresionSaturday = (valuelowWSaturday+'°-'+valuehighSaturday+'°');
let textValsaturday = document.createTextNode(expresionSaturday);
pValsaturday.appendChild(textValsaturday);
divValsaturday.appendChild(pValsaturday);
Saturday.appendChild(divValsaturday);

//Palabra Sunday

let Sunday = document.getElementById('Sunday');
let pSunday = document.createElement('p');
let divSunday = document.createElement('div');
let titleSunday = document.createTextNode('Sunday');
pSunday.appendChild(titleSunday);
divSunday.className = 'divSunday';
Sunday.appendChild(divSunday);

let sundayImage = resp.daily.data[6].icon;
console.log(sundayImage);

for (let i = 0; i < weather.length; i++) {
  if (sundayImage === weather[i].time){
    let iconWeather = document.createElement('img');
    iconWeather.setAttribute('src', weather[i].image);
    let divImageweather = document.createElement('div');
    divImageweather.appendChild(iconWeather);
    divSunday.appendChild(divImageweather);
    divSunday.appendChild(pSunday);
  }
}

let divValsunday= document.createElement('div');
let pValsunday = document.createElement('p');
let valuehighSunday = (((((resp.daily.data[6].apparentTemperatureHigh) - 32))*5)/9).toFixed(0);
let valuelowSunday = (((((resp.daily.data[6].apparentTemperatureLow) - 32))*5)/9).toFixed(0);
let expresionSunday = (valuelowSunday+'°-'+valuehighSunday+'°');
let textValsunday = document.createTextNode(expresionSunday);
pValsunday.appendChild(textValsunday);
divValsunday.appendChild(pValsunday);
Sunday.appendChild(divValsunday);

});
})
}

