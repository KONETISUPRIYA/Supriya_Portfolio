/*project --kav--*/
function showDescription(cardIndex) {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card, index) {
    if (index + 1 === cardIndex) {
      card.classList.add('active');
    }
  });
}

function hideDescription(cardIndex) {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card, index) {
    if (index + 1 === cardIndex) {
      card.classList.remove('active');
    }
  });
}
/*---end project*/
/*contact me*/
const contactForm = document.getElementById('contactForm');
const messageStatus = document.getElementById('message-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple email validation (can be improved)
  if (!validateEmail(email)) {
    messageStatus.textContent = 'Invalid email address.';
    messageStatus.classList.add('error-message');
    return;
  }

  const mailToUrl = `mailto:your_email@example.com?subject=Contact from Portfolio&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

  // Send email using window.location.href
  window.location.href = mailToUrl;

  // Optional: Display success message after a short delay
  messageStatus.textContent = 'Message sent successfully!';
  messageStatus.classList.remove('error-message');
  setTimeout(() => {
    messageStatus.textContent = '';
  }, 3000); // Clear message after 3 seconds
});

// Email validation function (can be improved with regular expressions)
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
