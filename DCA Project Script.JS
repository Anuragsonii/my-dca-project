function handleFormSubmit(event) {
    event.preventDefault();  // Prevent form from reloading the page

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a thank you message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.style.display = "block";
    responseMessage.innerHTML = `<div class="alert alert-success">Thank you, ${name}! Your message has been sent.</div>`;

    // Clear the form fields
    document.getElementById("contactForm").reset();
}
