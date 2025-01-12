
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
       /*
    document.getElementById("submit").addEventListener("click", function(event) {
        // Prevent form submission until validation is done
        event.preventDefault();

        // Validate the form
        if (validation_fields()) {
            // If validation is successful, submit the form
            document.getElementById("myform").submit();
        }
    });
    */
}


// Validation function for the form fields
function validation_fields() {
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    // Define validation rules (regular expressions)
    const usernameRegex = /^[a-zA-Z0-9-]{4,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*-_()]).+$/;
    // Validate username
    if (!usernameRegex.test(username)) {
        alert("The form is invalid");
        return;
    }
  // Validate age
       if (age < 10 || age > 120) {
       alert("The form is invalid");
        return ;
        }
    // Validate password   
        const password = document.getElementById('password').value;
        const minLength = 8;
        const specialCharacters = /[!@#$%^&*\-_()]/;
        const containsLetter = /[A-Za-z]/;
        const containsNumber = /\d/;
        

        // Check password length
        if (password.length < minLength) {
            alert("The form is invalid");
            return ;
        }

        // Check for at least one letter
        if (!containsLetter.test(password)) {
            alert("The form is invalid");
            return ;
        }

        // Check for at least one number
        if (!containsNumber.test(password)) {
            alert("The form is invalid");
            return ;
        }

        // Check for at least one special character
        if (!specialCharacters.test(password)) {
            alert("The form is invalid");
            return ;
        }

    // Validate email
    const atCount = (email.match(/@/g) || []).length;
    if (atCount !== 1) {  
        alert("The form is invalid");
        return;
     }
    

    const [userPart, domainPart] = email.split("@");

    // Rule 2: User part and domain part must exist
    if (!userPart || !domainPart) {
        alert("The form is invalid");
        return ;
    }
    // Rule 3: Does not contain #
    if (email.includes("#")){ 
        alert("The form is invalid");
        return;
    } 

    // Rule 4: Does not contain ..
    if (email.includes("..")) {
        alert("The form is invalid");
        return;}

    // Rule 5: User part does not end with . or -
    if (userPart.endsWith(".") || userPart.endsWith("-")) {
        alert("The form is invalid");
        return ;}

    // Rule 6: User part does not start with . or -
    if (userPart.startsWith(".") || userPart.startsWith("-")){
        alert("The form is invalid");
        return};

    // Rule 7: Valid domain name
    const domainParts = domainPart.split(".");
    if (domainParts.length < 2){ 
        alert("The form is invalid");
        return;} // At least one subdomain
    if (domainParts.some(part => part === "")) {
        alert("The form is invalid");
        return ;} // No empty parts
    if (domainParts[domainParts.length - 1].length < 2){ 
        alert("The form is invalid");
        return ;} // Root domain at least 2 chars


      // If all validations pass
        alert("The form is valid")   
}
