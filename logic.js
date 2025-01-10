
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
    document.getElementById("myform").addEventListener("click", validation_fields);
}

function validation_fields(event) {
    // Prevent form submission to handle validation first
    event.preventDefault();

    const username = document.getElementById('username').value;
    const usernameRegex = /^[a-zA-Z0-9-]{4,}$/;

    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-_()]).+$/;

    const nothashtaganddots = /^(?!.*#)(?!.*[.]{2}).*$/;
    const regex = /^[a-zA-Z0-9%&+*#$^!()_{}|?><=~;,.]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;
    const email = document.getElementById("email").value;

    if (document.getElementById("age").value < 10 || document.getElementById("age").value > 120) {
        alert("The form is invalid");
    } else if (!usernameRegex.test(username)) {
        alert("The form is invalid");
    } else if (!passwordRegex.test(password)) {
        alert("The form is invalid");
    } else if (!nothashtaganddots.test(email) || !regex.test(email)) {
        alert("The form is invalid");
    } else {
        alert("The form is valid");
    }
}
// Initialize the event listener when the page loads
window.onload = listen;


