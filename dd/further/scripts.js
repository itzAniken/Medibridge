// Flatpickr calendar initialization
document.addEventListener('DOMContentLoaded', () => {
    flatpickr('#date', {
      minDate: 'today',
      dateFormat: 'Y-m-d',
    });
  
    document.getElementById('bookingForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission for demo purposes
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const country = document.getElementById('country').value;
      const date = document.getElementById('date').value;
      const surgery = document.getElementById('surgery').value;
  
      if (name && email && phone && country && date && surgery) {
        alert(
          `Thank you, ${name}! Your session for ${surgery} on ${date} is successfully booked. We will contact you at ${email}.`
        );
      } else {
        alert('Please fill in all the required fields.');
      }
    });
  });
  