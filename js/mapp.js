// This sample uses the Autocomplete widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let placeSearch;
let autocomplete;
const componentForm = {
  street_number: "short_name",
  route: "long_name",
  locality: "long_name",
  administrative_area_level_1: "short_name",
  country: "long_name",
  postal_code: "short_name",
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("fieldfulladdress"),
    { types: ["geocode"] }
  );
  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete.setFields(["address_component"]);
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();

  var a;
  for (a in place.address_components) {
    var b = place.address_components[a];
    if(b.types[0] == 'locality') {
      document.getElementById('fieldcity').value = b.long_name;
    } else if (b.types[0] == 'country') {
      document.getElementById('fieldcountry').value = b.short_name;
    } else if (b.types[0] == 'administrative_area_level_2') {
      document.getElementById('fieldprovince').value = b.long_name;
    } else if (b.types[0] == "administrative_area_level_1") {
      document.getElementById("fieldregion").value = b.long_name;
      document.getElementById("fieldstate").value = b.short_name;
    } else if (b.types[0] == 'postal_code') {
      document.getElementById('fieldzipcode').value = b.long_name;
    } else if (b.types[0] == 'street_number') {
      document.getElementById('fieldhousenumber').value = b.long_name;
    } else if (b.types[0] == 'route') {
      document.getElementById('fieldaddress').value = b.long_name;
    } 
  }

}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
/*function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
const geolocation = {
  lat: position.coords.latitude,
  lng: position.coords.longitude,
};
const circle = new google.maps.Circle({
  center: geolocation,
  radius: position.coords.accuracy,
});
autocomplete.setBounds(circle.getBounds());
    });
  }
}*/