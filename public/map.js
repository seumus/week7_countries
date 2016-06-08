var Map = function(latLng, zoom) {
  // this.markers = [];
  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: zoom
  });
  this.changeLocation = function(latLng) {
    this.googleMap.setCenter(latLng);
  };

  this.addInfoWindow = function(latLng, title) {
    var marker = this.addMarker(latLng,title)
    var infowindow = new google.maps.InfoWindow({
    content: title
    });
    marker.addListener('click', function() {
      infowindow.open(this.map, this);
    })
  };

  this.addMarker = function(latLng,title) {
    // num = num.toString();
    // var image = 'minion.png'
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      animation: google.maps.Animation.DROP,
      // label: num,
      // icon: image,
      title: title
    });

    // this.markers.push(marker);
    return marker
  }
  // this.bindClick = function() {
  //   google.maps.event.addListener(this.googleMap,'click', function(event){
  //     console.log(event.latLng.lat());
  //     // var x = 2
  //     this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()}, (this.markers.length +1),'minion.png')
  //   }.bind(this))
  // }


}
