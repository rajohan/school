(() => {
    // Validate contact form
    const validateContact = () => {
        const {firstName, lastName, phone, email} = document.getElementsByTagName("input");
        const {firstNameError, lastNameError, phoneError, emailError} = document.getElementsByClassName("error");

        const phoneRegex = new RegExp(/^[0-9]{3}([-. ]){1}[0-9]{3}\1[0-9]{4}$/);
        const emailRegex = new RegExp(/^[A-Za-z0-9][a-zA-Z0-9._-]{1,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z0-9.-]{2,}$/);

        let errorCount = 0;

        const errors = {
            firstName: {
                error: firstName.value.length < 1,
                field: firstNameError
            },
            lastName: {
                error: lastName.value.length < 1,
                field: lastNameError
            },
            phone: {
                error: !phoneRegex.test(phone.value),
                field: phoneError
            },
            email: {
                error: !emailRegex.test(email.value),
                field: emailError
            }
        };

        // Check if there are any errors and toggle error messages
        for(let key in errors) {
            if(errors.hasOwnProperty(key)) {
                if(errors[key].error) {
                    errors[key].field.style.display = "block";
                    errorCount++;
                } else {
                    errors[key].field.style.display = "none";
                }
            }
        }

        // All fields ok, ready to submit
        if(errorCount === 0) {
            console.log("Everything ok!");
        }
    };

    // Setup event listener for the submitContact button
    const submitContact = document.getElementById("submitContact");
    submitContact.addEventListener("click", validateContact, false);
})();