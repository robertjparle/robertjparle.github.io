//The below function powers the Google maps API on the "About" page.
//The lat and lng parameters for the var jollymillercafe was found using google maps latitude and longitude
function initMap() {
  var jollymillercafe = {lat: 53.464484, lng: -2.990058};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: jollymillercafe
  });
  var marker = new google.maps.Marker({
    position: jollymillercafe,
    map: map
  });
}
