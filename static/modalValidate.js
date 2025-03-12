document.addEventListener("DOMContentLoaded", function () {
    // Function to validate email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // // Function to validate password (Minimum 8 characters, at least one uppercase, one lowercase, one number, and one special character)
    // function validatePassword(password) {
    //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //     return passwordRegex.test(password);
    // }

    // Function to validate full name (Only letters and spaces)
    function validateFullName(name) {
        const nameRegex = /^[A-Za-z\s]+$/;
        return nameRegex.test(name);
    }

    // Function to show validation message
    function showValidationMessage(input, message, isValid) {
        let messageSpan = input.nextElementSibling;
        if (!messageSpan || !messageSpan.classList.contains("validation-message")) {
            messageSpan = document.createElement("small");
            messageSpan.classList.add("validation-message");
            input.parentElement.appendChild(messageSpan);
        }
        messageSpan.innerText = message;
        messageSpan.style.color = isValid ? "green" : "red";
    }

    // Function to clear validation message
    function clearValidationMessage(input) {
        let messageSpan = input.nextElementSibling;
        if (messageSpan && messageSpan.classList.contains("validation-message")) {
            messageSpan.innerText = "";
        }
    }

    // Attach input event listeners to fields
    document.getElementById("loginEmail").addEventListener("input", function () {
        if (this.value.trim() === "") {
            clearValidationMessage(this);
        } else if (validateEmail(this.value.trim())) {
            showValidationMessage(this, "✔ Valid Email", true);
        } else {
            showValidationMessage(this, "✖ Invalid Email", false);
        }
    });

    document.getElementById("loginPassword").addEventListener("input", function () {
        if (this.value.trim() === "") {
            clearValidationMessage(this);
        } else if (validatePassword(this.value.trim())) {
            showValidationMessage(this, "✔ Strong Password", true);
        } else {
            showValidationMessage(this, "✖ Weak Password (8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special character)", false);
        }
    });

    document.getElementById("signupName").addEventListener("input", function () {
        if (this.value.trim() === "") {
            clearValidationMessage(this);
        } else if (validateFullName(this.value.trim())) {
            showValidationMessage(this, "✔ Valid Name", true);
        } else {
            showValidationMessage(this, "✖ Name should only contain letters and spaces", false);
        }
    });

    document.getElementById("signupEmail").addEventListener("input", function () {
        if (this.value.trim() === "") {
            clearValidationMessage(this);
        } else if (validateEmail(this.value.trim())) {
            showValidationMessage(this, "✔ Valid Email", true);
        } else {
            showValidationMessage(this, "✖ Invalid Email", false);
        }
    });

    document.getElementById("signupPassword").addEventListener("input", function () {
        if (this.value.trim() === "") {
            clearValidationMessage(this);
        } else if (validatePassword(this.value.trim())) {
            showValidationMessage(this, "✔ Strong Password", true);
        } else {
            showValidationMessage(this, "✖ Weak Password", false);
        }
    });

    document.getElementById("confirmPassword").addEventListener("input", function () {
        const passwordValue = document.getElementById("signupPassword").value.trim();
        if (this.value.trim() === "") {
            clearValidationMessage(this);
        } else if (this.value.trim() === passwordValue) {
            showValidationMessage(this, "✔ Passwords Match", true);
        } else {
            showValidationMessage(this, "✖ Passwords Do Not Match", false);
        }
    });
});
