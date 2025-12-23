//API: https://www.eventbrite.com/platform/api/#/introduction/authentication
//Token: QY75O7UM5CSPJ47EE5PM

//dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.nav__dropdown');
    const dropdownMenu = document.querySelector('.dropdown__menu');

    dropdown.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

//Google Maps
function initMap() {
    // The location (example: Denver, CO)
    const location = { lat: 39.742043, lng: -104.991531 };
    // The map, centered at the specified location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: location,
    });
}