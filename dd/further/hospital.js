// Function to open Google Maps location
function openGoogleMap(location) {
    // Encodes the location and opens Google Maps with that location
    const encodedLocation = encodeURIComponent(location);
    const url = `https://www.google.com/maps/search/?q=${encodedLocation}`;
    window.open(url, '_blank');
  }
  