//API key: 5FCTN7DTKCLJ3KATWP
//Token: QY75O7UM5CSPJ47EE5PM

const myToken = 'QY75O7UM5CSPJ47EE5PM'; // Replace with your actual token
const organizerId = 'YOUR_ORGANIZER_ID'; // Replace with your organizer ID
const apiUrl = `www.eventbriteapi.com{organizerId}&expand=venue`;

fetch(apiUrl, {
    headers: {
        "Authorization": `Bearer ${myToken}`, // The recommended way to send the token
        "Accept": "application/json"
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log('Events data:', data.events);
    // Process and display the event data here
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});


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