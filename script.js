const form = document.querySelector('.form');
const text = document.querySelector('.email');
const error = document.querySelector('.error');
const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

console.log(form);


form.addEventListener('submit', (x) => {

    x.preventDefault()

    let message = []

    if (text.value.match(pattern) || message.length > 8) {

        error.textContent = ' ';
        console.log('email is valid');

    }
    else (
        error.textContent = 'Oops! Please check your email'
    )

})



