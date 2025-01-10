
function solution_js_query(){

}

function solution_js_dynamic_elements(){

}

function solution_js_event_listeners(){

}

function solution_js_unit_converter(){
    
}
// Add the event listener on form submission
// Add event listener using the listen function
function listen() {
    document.getElementById("submit").addEventListener("click", function(event) {
        // Prevent form submission until validation is done
        event.preventDefault();

        // Validate the form
        if (validation_fields()) {
            // If validation is successful, submit the form
            document.getElementById("myform").submit();
        }
    });
}

// Validation function for the form fields
function validation_fields() {
    // Access values from the form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    
    // Define validation rules (regular expressions)
    const usernameRegex = /^[a-zA-Z0-9-]{4,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-_()]).+$/;
    const emailRegex = /^[^.-][A-Za-z0-9%&+*#$^!()_{}|?><=~;,.]*@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;
    
    // Validate username
    if (!usernameRegex.test(username)) {
        alert("Invalid username! Only letters, numbers, and dashes are allowed, and it must be at least 4 characters long.");
        return false;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        alert("Invalid password! It must contain at least one letter, one number, and one special character.");
        return false;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        alert("Invalid email! Please ensure the email is in the correct format.");
        return false;
    }

    // Validate age
    if (age < 10 || age > 120) {
        alert("Invalid age! Age must be between 10 and 120.");
        return false;
    }

    // If all validations pass, return true to submit the form
    return true;
}

// Initialize the event listener when the page loads
window.onload = listen;

