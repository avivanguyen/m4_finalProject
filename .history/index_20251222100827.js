//API: https://www.eventbrite.com/platform/api/#/introduction/authentication
//Token: QY75O7UM5CSPJ47EE5PM

//dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.nav__dropdown');
    const dropdownMenu = document.querySelector('.dropdown__menu');

    dropdown.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
});