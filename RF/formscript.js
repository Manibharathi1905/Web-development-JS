// Handle the click event for the Terms and Conditions link
document.getElementById('termsLink').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Please read the Terms and Conditions.');
  // You can replace the alert with a modal popup or redirect to another page with the terms.
});
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email) && email.endsWith('.com');
}


document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const userName = document.getElementById('userName').value.trim();
  const email = document.getElementById('email').value.trim();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const birthDate = document.getElementById('birthDate').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const streetAddress = document.getElementById('streetAddress').value.trim();
  const country = document.getElementById('country').value;
  const city = document.getElementById('city').value.trim();
  const region = document.getElementById('region').value.trim();
  const postalCode = document.getElementById('postalCode').value.trim();
  const terms = document.getElementById('terms').checked;


  // Validation checks
  if (!firstName || !lastName) {
    alert('Please enter both first and last names.');
    return;
  }

  if (!userName) {
    alert('Please enter a unique user name.');
    return;
  }

  if (!email || !validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!email.endsWith('.com')) {
    alert('Email address must end with ".com".');
    return;
  }

  if (!password || password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  if (!phoneNumber || phoneNumber.length < 10) {
    alert('Please enter a valid phone number.');
    return;
  }

  if (!birthDate) {
    alert('Please enter your birth date.');
    return;
  }

  if (!gender) {
    alert('Please select your gender.');
    return;
  }

  if (!streetAddress || !city || !region || !postalCode) {
    alert('Please fill out all address fields.');
    return;
  }

  if (!terms) {
    alert('You must agree to the Terms and Conditions.');
    return;
  }

  // If all validations pass
  alert('Form submitted successfully!');
});


