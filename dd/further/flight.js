// Flatpickr calendar initialization
document.addEventListener('DOMContentLoaded', () => {
    flatpickr('#date', {
      minDate: 'today',
      dateFormat: 'Y-m-d',
    });
  
    document.getElementById('flightForm').addEventListener('change', function () {
      const flightClass = document.getElementById('class').value;
      let priceText = "";
      let oneWayPrice = 0;
  
      // Set exact price for one-way trip based on class of service
      if (flightClass === "economy") {
        oneWayPrice = 800 / 2; // One-way price for economy is half of the round-trip price
      } else if (flightClass === "premium-economy") {
        oneWayPrice = 1800 / 2; // One-way price for premium economy
      } else if (flightClass === "business") {
        oneWayPrice = 4000 / 2; // One-way price for business
      } else if (flightClass === "first") {
        oneWayPrice = 7500 / 2; // One-way price for first class
      }
  
      // Display the exact price for one-way trip
      if (oneWayPrice > 0) {
        priceText = `Exact Price (One-Way): $${oneWayPrice} (one-way trip)`;
        document.getElementById('price').textContent = priceText;
      } else {
        document.getElementById('price').textContent = "";
      }
    });
  
    // Next button functionality
    document.getElementById('nextBtn').addEventListener('click', function () {
      const date = document.getElementById('date').value;
      const flightClass = document.getElementById('class').value;
  
      if (date && flightClass) {
        alert(`Proceeding to the next step with the selected date: ${date} and class: ${flightClass}.`);
        // Optionally, redirect to the next page here, e.g.
        // window.location.href = "nextStepPage.html";
      } else {
        alert('Please select both a date and class.');
      }
    });
  });
  