const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginBtn = document.querySelector('#loginBtn'); // Select by ID

// Adding 'active' class when register link is clicked
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Removing 'active' class when login link is clicked
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Redirect to pickupline.html when the final login button is clicked
loginBtn.addEventListener('click', () => {
    window.location.href = 'pickupline.html';
});