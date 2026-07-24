// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email Pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name Validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Email Validation
    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Message Validation
    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    // Success Message
    alert("Thank you! Your message has been submitted successfully.");

    // Clear Form
    form.reset();

});