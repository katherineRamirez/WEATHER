fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9cdb8119e61f583c61178e5b9359792d/37.8267,-122.4233').then(function(respuesta) {
  // Convertir a JSON
  return respuesta.json();
}).then(function(j) {
  // Ahora 'j' es un objeto JSON
  console.log(j);
});


