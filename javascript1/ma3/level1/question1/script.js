//Use RegEx to validate form
(() => {
    document.getElementById("contactForm").addEventListener("submit", event => {
        event.preventDefault();

        const {firstName, lastName, telephoneNumber, email} = event.target;
        const successField = document.getElementById("success");
        const errorField = document.getElementById("errors");
        const phoneRegex = new RegExp(/^((\+|00)[0-9]{2,3})?[ ]{0,1}(\([0-9]{3}\))?[0-9- ]{4,30}$/);
        const emailRegex = new RegExp(/^[A-Za-z0-9][a-zA-Z0-9._-]{2,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z0-9.-]{2,}$/);
        const errors = [];

        if(firstName.value.length <= 1) {
            errors.push("First name must be at least 2 characters");
        }

        if(lastName.value.length <= 1) {
            errors.push("Last name must be at least 2 characters");
        }

        if(!phoneRegex.test(telephoneNumber.value)) {
            errors.push("Invalid phone number.")
        }

        if(!emailRegex.test(email.value)) {
            errors.push("Invalid email address.");
        }

        if(errors.length === 0) {
            errorField.style.display = "none";
            successField.innerText = "Your message has been sent!";
            successField.style.display = "block";
            firstName.value = "";
            lastName.value = "";
            telephoneNumber.value = "";
            email.value = "";
        } else {
            successField.style.display = "none";
            errorField.innerText = errors.join("\n");
            errorField.style.display = "block";
        }
    });
})();
