// ***** my work at top, walk through on bottom *****

// var main = function(countries) {
//   addCountries();
//   // var select = document.getElementById("country-list");
//
// }
//
// var addCountries = function() {
//   var url = "https://restcountries.eu/rest/v1";
//   var request = new XMLHttpRequest();
//
//   request.open("GET", url);
//   request.onload = function() {
//     if(request.status === 200){
//       console.log("got the data")
//       var jsonString = request.responseText;
//       var countries = JSON.parse(jsonString);
//       createCountryMenu(countries);
//       // countriesArray = countries;
//     }
//   }
//   request.send(null);
// }
//
// // var countriesArray = function(countries) {
//
//
// var createCountryMenu = function(countries) {
//
//
//  var select = document.getElementById("country-drop");
//  select.onchange = function() {
//    displayCountryInfo(getSelectedCountryName(select), countries);
//  }
//
// for (var i = 0; i < countries.length;  i++) {
//
//    var option = document.createElement("option");
//    option.value = countries[i].name;
//    option.text = countries[i].name;
//
//
//    select.appendChild(option);
//  }
// }
//
// // 000
// //
// // var handleSelect = function() {
// //   var select = document.getElementById("country-list");
// //
// //   if(select.selectedIndex == -1) {
// //     return null
// //   }
// //
// //   var f = select.options[select.selectedIndex].value;
// //
// //   displayCountryInfo(f);
// // }
// //
// // var countryInformation = function() {
// //
// // }
// //
// // var displayCountryInfo = function(country) {
// //   var para = document.createElement("p")
// //   // console.log(country);
// //   para.innerText = country
// //   // para.innerText = country;
// //   var body = document.querySelector("body");
// //   body.appendChild(para)
// // }
// // window.onload = main;
//
//
//
//
//
// var getSelectedCountryName = function(select) {
//   return select.options[select.selectedIndex].value;
// }
//
//
// var displayCountryInfo = function(countryName, countries) {
//
//   // var ul = document.getElementById("country-list");
//   // ul.removeChild(ul.lastChild);
//   // ul.removeChild(ul.lastChild);
//   // ul.removeChild(ul.lastChild);
//   for(var country of countries) {
//
//
//
//     if(country.name === countryName) {
//
//       var li1 = document.createElement("li");
//       li1.innerText = country.name;
//
//       var li2 = document.createElement("li");
//       li2.innerText = country.population;
//
//       var li3 = document.createElement("li");
//       li3.innerText = country.capital;
//
//       var ul = document.getElementById("country-list");
//
//       ul.appendChild(li1);
//       ul.appendChild(li2);
//       ul.appendChild(li3);
//     }
//   }
// }
// // parent.removeChild(parent.lastChild);`
//
//
//
//
// window.onload = main;
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

  request.send(null);
}

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
}

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
}

var updateDisplay = function(country) {

}
