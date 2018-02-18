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

/* Título del contenedor de los datos del clima */
let respuesta = document.getElementById('respuesta');
let etiquetaTitle = document.createElement('h1');
let title = document.createTextNode('HOY');
etiquetaTitle.appendChild(title);
respuesta.appendChild(etiquetaTitle);

/* DOM Insertando temperatura desde la Api darksky */
let temperature = document.getElementById('temperature');
let Celsius = (((((resp.currently.apparentTemperature) - 32))*5)/9).toFixed(0);
let textTemperature = document.createTextNode(Celsius+ '°');
console.log(textTemperature);
temperature.appendChild(textTemperature);

/* DOM Insertando viento desde la Api darksky */

//Palabra Wind
let wind = document.getElementById('wind');
let pWInd = document.createElement('p');
let titleWind = document.createTextNode('Wind');
pWInd.appendChild(titleWind);
let divTitleWind = document.createElement('div');
divTitleWind.appendChild(pWInd);
wind.appendChild(divTitleWind);

let pvalueWind = document.createElement('p');
let valueWind = document.createTextNode(resp.currently.windSpeed+ ' m/s');
pvalueWind.appendChild(valueWind);
let divpvalueWind = document.createElement('div');
divpvalueWind.appendChild(pvalueWind);
wind.appendChild(divpvalueWind);


/* DOM Insertando humedad desde la Api darksky */
let humidity = document.getElementById('humidity');
let phumidity = document.createElement('p');
let titleHumidity = document.createTextNode('Humidity');
phumidity.appendChild(titleHumidity);
let divtitleHumidity = document.createElement('div');
divtitleHumidity.appendChild(phumidity);
humidity.appendChild(divtitleHumidity);

let textHumidity = document.createTextNode(resp.currently.humidity+ '%');
let ptextHumidity = document.createElement('p');
let divtextHumidity = document.createElement('div');
ptextHumidity.appendChild(textHumidity);
divtextHumidity.appendChild(ptextHumidity);
humidity.appendChild(divtextHumidity);



/* DOM Insertando index uv desde la Api darksky */
let pUV = document.createElement('p');
let divUv = document.createElement('div');
let titleIndexUv = document.createTextNode('Index UV');
pUV.appendChild(titleIndexUv);
divUv.appendChild(pUV);
let indexUv = document.getElementById('indexUv');
indexUv.appendChild(divUv);

let pIndexuv = document.createElement('p');
let divIndexuv = document.createElement('div');
let IndexUvv = document.createTextNode(resp.currently.uvIndex);
pIndexuv.appendChild(IndexUvv);
divIndexuv.appendChild(pIndexuv);
indexUv.appendChild(divIndexuv);


/* DOM Insertando presión desde la Api darksky */
let pressure = document.getElementById('pressure');
let pPressure = document.createElement('p');
let divPressure = document.createElement('div');
let titlePressure = document.createTextNode('Pressure');
pPressure.appendChild(titlePressure);
divPressure.appendChild(pPressure);
pressure.appendChild(divPressure);

let pPressuree = document.createElement('p');
let divPressuree = document.createElement('div');
let textPressure = document.createTextNode(resp.currently.pressure+ 'hPa');
pPressuree.appendChild(textPressure);
divPressuree.appendChild(pPressuree);
pressure.appendChild(divPressuree);



});
})
}



  