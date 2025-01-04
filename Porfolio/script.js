function animateText(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    element.innerHTML = '';
    Array.from(text).forEach((char, index) => {
        const span = document.createElement('span');
        span.style.setProperty('--char-index', index);
        span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
        element.appendChild(span);
    });
}

// Apply animation to both heading and paragraph
// animateText('animated-heading');
// animateText('animated-paragraph');

// function for text hovering
function wrapWordsForHoverEffect(elementId) {
    const element = document.getElementById(elementId);
    const words = element.textContent.split(' ');
    element.innerHTML = '';
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + (index < words.length - 1 ? ' ' : ''); // Preserve spaces
        element.appendChild(span);
    });
}

// Apply word wrapping for hover effect
wrapWordsForHoverEffect('animated-paragraph');

 // Theme Toggle
 const toggleButton = document.getElementById('theme-toggle');
 const body = document.body;

 toggleButton.addEventListener('click', () => {
     body.classList.toggle('dark-mode');
     toggleButton.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
 });

 
 //Email api integration
 function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return false;
    }

    return true;
}
