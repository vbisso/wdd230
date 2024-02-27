const password = document.querySelector("#passwordLabel");
const passwordConfirmation = document.querySelector("#passwordConfirmationLabel");
const msg = document.querySelector("#passwordConfirmationMsg");

passwordConfirmation.addEventListener('focusout',(control));

function control(){
    if(passwordConfirmation.value !== password.value){
        password.value="";
        password.style.borderRight="solid 8px rgb(234, 64, 64)";
        passwordConfirmation.value="";
        passwordConfirmation.style.borderRight="solid 8px rgb(234, 64, 64)";
        password.focus();
        msg.textContent="Passwords do not match. Please try again.";



    } else{
        password.style.borderRight="solid 8px rgb(120, 224, 141)";
        passwordConfirmation.style.borderRight="solid 8px rgb(120, 224, 141)";
        msg.textContent="";

    }
}


//RATING
const rangeValue = document.querySelector("#rangeValue");
const range = document.querySelector("#ratingLabel");
// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}