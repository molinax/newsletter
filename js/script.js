//Form
const form = document.getElementById('form');
const inputEmail = document.getElementById('inputEmail');

//Cards
const mainCard = document.getElementById('mainCard');
const successCard = document.getElementById('successCard');

//Buttons
const submitButton = document.getElementById('submitButton');
const dismissButton = document.getElementById('dismissButton');


//Events
form.addEventListener('submit', (event) => {
    event.preventDefault();
})

submitButton.addEventListener('click', () => {
    validateEmail();
})

dismissButton.addEventListener('click', () => {
    changeCard(mainCard, successCard);
})


//Functions
const validateEmail = () => {
    if(!inputEmail.value === '' || inputEmail.value.includes('@hotmail.com') || inputEmail.value.includes('@gmail.com')) {
        changeCard(mainCard, successCard);
        inputEmail.value = '';
    } else {
        inputEmail.classList.add('invalid-email');
        setTimeout(() => {
            inputEmail.classList.remove('invalid-email');
          }, "2300");
    }
}

const changeCard = (...elements) => {
    elements.forEach(element => {
        element.classList.toggle('hidden-card');
    });
}