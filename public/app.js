window.onload = function() {
  var url = "https://restcountries.eu/rest/v1";
  var request = new XMLHttpRequest();
  request.open("GET",url);

  request.onload = function() {
    if(request.status === 200) {
      var jsonString = request.responseText;
      var countries = JSON.parse(jsonString);
      main(countries);
    }
  }

  // var center = {lat: 55.9532520, lng: -3.1882670}
  // var map = new Map(center, 10);
  // console.log(map);
  // var locator = new GeoLocator(map);
  request.send(null);
}
var map = null;
var main = function(countries) {
  populateSelect(countries);
  var selected = countries[0];
  var cached = localStorage.getItem("selectedCountry");

  if(cached){
    selected = JSON.parse(cached);
    document.querySelector('#countries').selectedIndex = selected.index;
  }

  updateDisplay(selected);
  document.querySelector("#info").style.display = 'block';
  // console.log(map);
  var center = {lat: 55.9532520, lng: -3.1882670}
  map = new Map(center, 8);
  // var locator = new GeoLocator(map,selected);
}


// var GeoLocator = function(map) {
//   this.map = map;
//   this.setMapCenter = function() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var center = {lat:position.coords.latitude, lng:position.coords.longitude}
//       this.map.resetCenter(center);
//       this.map.addMarker(center,"1",'minion2.png')
//       console.log(center);
//     }.bind(this))
//   }
// }

var populateSelect = function(countries) {
  var parent = document.querySelector("#countries");


  countries.forEach(function(item,index){
    item.index = index;
    var option = document.createElement("option");
    option.value = index;
    option.text = item.name;
    parent.appendChild(option);

  });
  parent.style.display = 'block';
  parent.addEventListener('change', function(){
    var index = this.value;
    var country = countries[index];
    updateDisplay(country);
    console.log(map);
    map.changeLocation({lat:country.latlng[0], lng:country.latlng[1]})
    map.addInfoWindow({lat:country.latlng[0], lng:country.latlng[1]},"Name: " + country.name + "\nPop: " + country.population + "\nCapital: " + country.capital)
    localStorage.setItem("selectedCountry", JSON.stringify(country));
  })
}

var updateDisplay = function(country) {
  var tags = document.querySelectorAll("#info p");

  // tags[0].innerText = country.name;
  // tags[1].innerText = country.population;
  // tags[2].innerText = country.capital;
}
