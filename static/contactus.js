function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const form = document.getElementById("userForm");

    // Collect form data
    const formData = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        role: form.role.value,
    };

    console.log("Form Data Submitted:", formData);

    // Optionally, send form data to a server
    // Example:
    // fetch('https://your-server-endpoint.com/submit', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
}
