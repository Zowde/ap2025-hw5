
function solution_js_query(){

}

function solution_js_dynamic_elements(){

}

function solution_js_event_listeners(){

}

function solution_js_unit_converter(){
    
}
// Add the event listener on form submission
function listen() {
    document.getElementById("myform").addEventListener("submit", validation_fields);
}

// Validation function for the form fields
function validation_fields(event) {
    // Prevent form submission to handle validation first
    event.preventDefault();
    // Access the value of the username input field
    const username = document.getElementById('username').value;

    // Regular expression for validating the username
    const usernameRegex = /^[a-zA-Z0-9-]{4,}$/;

    const password = document.getElementById('password').value;
        // Regular expression for validating the password
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-_()]).+$/;
            // Regular expression for validating the email
    const nothashtaganddots = /^(?!.*#)(?!.*[.]{2}).*$/;
    const regex = /^[^.-][A-Za-z0-9%&+*#$^!()_{}|?><=~;,.]*@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;
    const email = document.getElementById("email").value;
    if(!nothashtaganddots.test(email) || !regex.test(email) || !usernameRegex.test(username) || !passwordRegex.test(password))
    {
        alert("The form is invalid");
    }
    else
    {
        alert("The form is valid");

    }




}
// Initialize the event listener when the page loads
window.onload = listen;


