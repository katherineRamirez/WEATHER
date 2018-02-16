fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=c60c3fa5fe3d5aec17baf1cc7495e1db&per_page=10&format=json&nojsoncallback=1')
  .then(function (response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function (data) {
    console.log(data);
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

  function search(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });

fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9cdb8119e61f583c61178e5b9359792d/'+pos.lat+','+pos.lng)
.then(function(respuesta) {
  // Convertir a JSON
  return respuesta.json();
})
.then(function(j) {
  // Ahora 'j' es un objeto JSON
  console.log(j);
});
  /*const time = moment().year(2018);
DarkSkyApi.loadTime(time) // or '2000-04-06T12:20:05' aka moment.format()
  .then(result => console.log(result));*/
};
}

  