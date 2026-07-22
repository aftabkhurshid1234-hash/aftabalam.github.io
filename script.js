// Initialize EmailJS
emailjs.init("8suEemrZKn14AFLaZ");

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_qvytudu",
        "template_slmp8u2",
        this
    )
    .then(function () {
        alert("Message sent successfully!");
    })
    .catch(function (error) {
        alert("Failed to send message.");
        console.log(error);
    });
});