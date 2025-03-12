(function () {
  emailjs.init("vGIRnQaLowt7o31fg"); // Replace with your actual Public Key
})();

function sendWelcomeEmail(event) {
  event.preventDefault(); // Prevent form submission and page reload

  // Get user inputs from the contact form
  const userName = document.getElementById("fname").value.trim(); // User's name
  const userEmail = document.getElementById("email").value.trim(); // User's email
  const userMessage = document.getElementById("message").value.trim(); // User's message

  // Validate inputs
  if (!userName || !userEmail || !userMessage) {
    alert("Please fill out all required fields.");
    return;
  }

  // EmailJS parameters (sending only the necessary data)
  const emailParams = {
    to_name: userName,  // User's name
    from_email: userEmail, // User's email
    user_message: userMessage, // Only the raw user message (formatted inside EmailJS template)
  };

  // Send email using EmailJS
  emailjs
    .send("service_cw1zhs8", "template_62fidkj", emailParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully. We'll get back to you soon!");
        document.querySelector("form").reset(); // Clear the form after success
      },
      function (error) {
        console.error("FAILED...", error);
        alert(`Failed to send your message. Error: ${error.text || "Unknown error"}`);
      }
    );
}
