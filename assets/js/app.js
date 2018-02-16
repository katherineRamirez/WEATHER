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
let textTemperature = document.createTextNode(resp.currently.apparentTemperature+ '°');
temperature.appendChild(textTemperature);

/* DOM Insertando viento desde la Api darksky */
let wind = document.getElementById('wind');
let labelWind = document.createElement('label');
labelWind.setAttribute('style','float:left');
labelWind.setAttribute('class','texto');
let titleWind = document.createTextNode('Viento');
let pWind =  document.createElement('p');
let textWind = document.createTextNode(resp.currently.windSpeed+ 'm/s');
pWind.appendChild(textWind);
labelWind.appendChild(titleWind);
wind.appendChild(labelWind);
wind.appendChild(pWind);

/* DOM Insertando humedad desde la Api darksky */
let humidity = document.getElementById('humidity');
let labelHumidity = document.createElement('label');
labelHumidity.setAttribute('style','float:left');
labelHumidity.setAttribute('class','texto');
let titleHumidity = document.createTextNode('Humedad');
let pHumidity =  document.createElement('p');
let textHumidity = document.createTextNode(resp.currently.humidity+ '%');
pHumidity.appendChild(textHumidity);
labelHumidity.appendChild(titleHumidity);
humidity.appendChild(labelHumidity);
humidity.appendChild(pHumidity);

/* DOM Insertando index uv desde la Api darksky */
let indexUv = document.getElementById('indexUv');
let labelIndexUv = document.createElement('label');
labelIndexUv.setAttribute('style','float:left');
labelIndexUv.setAttribute('class','texto');
let titleIndexUv = document.createTextNode('Index UV');
let pIndexUv =  document.createElement('p');
let textIndexUv = document.createTextNode(resp.currently.uvIndex);
pIndexUv.appendChild(textIndexUv);
labelIndexUv.appendChild(titleIndexUv);
indexUv.appendChild(labelIndexUv);
indexUv.appendChild(pIndexUv);

/* DOM Insertando presión desde la Api darksky */
let pressure = document.getElementById('pressure');
let labelPressure = document.createElement('label');
labelPressure.setAttribute('style','float:left');
labelPressure.setAttribute('class','texto');
let titlePressure = document.createTextNode('Presión');
let pPressure =  document.createElement('p');
let textPressure = document.createTextNode(resp.currently.pressure+ 'hPa');
pPressure .appendChild(textPressure );
labelPressure .appendChild(titlePressure );
pressure .appendChild(labelPressure );
pressure .appendChild(pPressure );


});
})
}



  