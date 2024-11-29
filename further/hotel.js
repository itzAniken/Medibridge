document.addEventListener("DOMContentLoaded", () => {
    const hotels = [
      { 
        name: "The Suryaa New Delhi", 
        price: "₹6,500/night", 
        distance: "1.5 km", 
        mapLink: "thank-you.html" // Updated to point to the new page
      },
      { 
        name: "Eros Hotel New Delhi", 
        price: "₹8,000/night", 
        distance: "2.0 km", 
        mapLink: "https://www.google.com/maps?q=Eros+Hotel+New+Delhi" 
      },
      { 
        name: "FabHotel Prime Shervani", 
        price: "₹4,500/night", 
        distance: "1.8 km", 
        mapLink: "https://www.google.com/maps?q=FabHotel+Prime+Shervani" 
      },
      { 
        name: "OYO Townhouse 286", 
        price: "₹3,200/night", 
        distance: "1.0 km", 
        mapLink: "https://www.google.com/maps?q=OYO+Townhouse+286" 
      },
      { 
        name: "Ameya Suites", 
        price: "₹4,000/night", 
        distance: "1.2 km", 
        mapLink: "https://www.google.com/maps?q=Ameya+Suites" 
      },
      { 
        name: "Hilton Garden Inn", 
        price: "₹7,200/night", 
        distance: "2.5 km", 
        mapLink: "https://www.google.com/maps?q=Hilton+Garden+Inn+Saket" 
      },
      { 
        name: "The Lodhi Hotel", 
        price: "₹20,000/night", 
        distance: "2.8 km", 
        mapLink: "https://www.google.com/maps?q=The+Lodhi+Hotel" 
      },
      { 
        name: "JP Hotel and Resorts", 
        price: "₹4,800/night", 
        distance: "3.0 km", 
        mapLink: "https://www.google.com/maps?q=JP+Hotel+and+Resorts" 
      },
      { 
        name: "Maidens Hotel", 
        price: "₹9,500/night", 
        distance: "3.2 km", 
        mapLink: "https://www.google.com/maps?q=Maidens+Hotel" 
      },
      { 
        name: "The Grand Vikalp", 
        price: "₹3,500/night", 
        distance: "1.5 km", 
        mapLink: "https://www.google.com/maps?q=The+Grand+Vikalp" 
      },
    ];
  
    const hotelList = document.getElementById("hotel-list");
  
    hotels.forEach((hotel) => {
      // Create hotel box
      const hotelCard = document.createElement("div");
      hotelCard.className = "hotel";
  
      // Add hotel details
      hotelCard.innerHTML = `
        <h3><a href="${hotel.mapLink}">${hotel.name}</a></h3>
        <p><strong>Price:</strong> ${hotel.price}</p>
        <p><strong>Distance:</strong> ${hotel.distance}</p>
        <button class="map-btn" onclick="window.open('${hotel.mapLink}', '_blank')">View on Map</button>
      `;
  
      hotelList.appendChild(hotelCard);
    });
  });
  