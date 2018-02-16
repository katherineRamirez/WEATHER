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

 if ("geolocation" in navigator) {
  //alert('Tu navegador soporta geolocalización');
} else {
  //alert('Tu navegador no soporta geolocalización');
}

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9cdb8119e61f583c61178e5b9359792d/'+pos.lat+','+pos.lng)
.then(function(respuesta) {
  // Convertir a JSON
  return respuesta.json();
})
.then(function(resp) {
  // Ahora 'j' es un objeto JSON
  console.log(resp);

let respuesta = document.getElementById('respuesta');
let etiquetaTitle = document.createElement('h1');
let title = document.createTextNode('HOY');
etiquetaTitle.appendChild(title);
respuesta.appendChild(etiquetaTitle);
let weather = document.getElementById('listWeather');
weather.setAttribute('class', 'weather');
let wind = document.createElement('li');
let viento = document.createTextNode('Viento');
wind.appendChild(viento);
let liHumidity = document.createElement('li');
let humedad = document.createTextNode('Humedad');
liHumidity.appendChild(humedad);
let indexUv = document.createElement('li');
let indice = document.createTextNode('Indice UV');
indexUv.appendChild(indice);
let liPressure = document.createElement('li');
let presion = document.createTextNode('Presión');
liPressure.appendChild(presion);
weather.appendChild(wind);
weather.appendChild(liHumidity);
weather.appendChild(indexUv);
weather.appendChild(liPressure);
});
})
}



  