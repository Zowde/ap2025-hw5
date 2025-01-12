
function solution_js_query(){

}

function solution_js_dynamic_elements(){

    const newDiv = document.createElement('div');

    const temp = document.querySelector("div#q6");

    // The strings you want to use for the content of the elements
    const h2_el = "That is <h2> I added using JS";
    const p2_2l = "That's a <p> element I added using JS";
    
    // Create new h2 and p elements
    const el1 = document.createElement('h2');
    const pel1 = document.createElement('p');
    
    // Set the text content of the elements
    el1.textContent = h2_el;
    pel1.textContent = p2_2l;
    
    // Append the newly created elements to the div
    newDiv.appendChild(el1);
    newDiv.appendChild(pel1);
    temp.append(newDiv)
}

function solution_js_event_listeners() {
    document.getElementById('div_btn').addEventListener("click", function() {
        alert("click");
    });

    document.body.addEventListener('keydown', function(event) {
        alert(`The key '${event.key}' was pressed`);
    });
}

function solution_js_unit_converter() {
    // Get input values
    const inputValue = parseFloat(document.getElementById("convertion_input").value);
    const convertFromUnit = document.getElementById("convert_from_unit").value;
    const convertToUnit = document.getElementById("convert_to_unit").value;
  
    // Conversion factors
    const conversionRates = {
      cm: {
        meter: 0.01,
        inch: 0.393701,
        foot: 0.0328084
      },
      meter: {
        cm: 100,
        inch: 39.3701,
        foot: 3.28084
      },
      inch: {
        cm: 2.54,
        meter: 0.0254,
        foot: 0.0833333
      },
      foot: {
        cm: 30.48,
        meter: 0.3048,
        inch: 12
      }
    };
  
    // Convert the input value to the desired unit
    if (convertFromUnit !== convertToUnit) {
      const conversionRate = conversionRates[convertFromUnit][convertToUnit];
      const outputValue = inputValue * conversionRate;
      document.getElementById("convertion_output").value = outputValue.toFixed(4);
    } else {
      document.getElementById("convertion_output").value = inputValue;
    }
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

function solution_js_query(){


    // Select all <a> elements with the class 'malicious' inside a <div> with the ID 'q5'
const arraymeli = document.querySelectorAll('div#q5 a.malicious');

// Loop through each selected <a> element
for (let index = 0; index < arraymeli.length; index++) {
    // Set the display style to 'none' for each element
    arraymeli[index].style.display = 'none';
}

// Select the first <div> element with the class 'hidden'
const elem = document.querySelector('div.hidden');

// Set the display style to 'block' to make it visible
if (elem) {
    elem.style.display = 'block';
}

}
