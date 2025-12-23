//API key: 5FCTN7DTKCLJ3KATWP
//Token: QY75O7UM5CSPJ47EE5PM
// https://www.eventbrite.com/o/120779391691

// const myToken = 'QY75O7UM5CSPJ47EE5PM'; // Replace with your actual token
// const organizerId = '120779391691'; // Replace with your organizer ID
// const apiUrl = `www.eventbriteapi.com{organizerId}&expand=venue`;

// fetch(apiUrl, {
//     headers: {
//         "Authorization": `Bearer ${myToken}`, // The recommended way to send the token
//         "Accept": "application/json"
//     }
// })
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok: ' + response.statusText);
//     }
//     return response.json();
// })
// .then(data => {
//     console.log('Events data:', data.events);
//     // Process and display the event data here
// })
// .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
// });

const EVENTBRITE_API_KEY = '5FCTN7DTKCLJ3KATWP'; // Replace with your actual API key
const SEARCH_QUERY = 'denver'; // Example search term
const API_URL = `www.eventbriteapi.com{SEARCH_QUERY}&token=${EVENTBRITE_API_KEY}`;

// Function to fetch events
async function fetchEventbriteEvents() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        // 'Authorization': `Bearer ${EVENTBRITE_API_KEY}` // Alternative: use Bearer token header
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Events Data:', data.events);
    displayEvents(data.events); // Call function to display events
    
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

// Function to display events (example)
function displayEvents(events) {
  const eventsList = document.getElementById('events-list'); // Assume an element with id="events-list" exists
  if (!eventsList) return;

  eventsList.innerHTML = ''; // Clear previous results

  if (events && events.length > 0) {
    events.forEach(event => {
      const eventItem = document.createElement('div');
      eventItem.innerHTML = `
        <h3>${event.name.text}</h3>
        <p>${event.description.text ? event.description.text.substring(0, 200) + '...' : 'No description available'}</p>
        <a href="${event.url}" target="_blank">View Event</a>
      `;
      eventsList.appendChild(eventItem);
    });
  } else {
    eventsList.innerHTML = '<p>No events found for this search.</p>';
  }
}

// Call the fetch function
fetchEventbriteEvents();


// ...existing code...

//Search bar functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar__label input');
    const locationInput = document.querySelector('.search-bar__location input');
    const searchButton = document.querySelector('.search-bar__button');

    // Function to fetch events based on search query
    async function fetchEventbriteEvents(query, location) {
        const API_URL = `https://www.eventbriteapi.com/v3/events/search/?q=${encodeURIComponent(query)}&location.address=${encodeURIComponent(location)}&token=${EVENTBRITE_API_KEY}`;
        
        try {
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Events Data:', data.events);
            displayEvents(data.events);
            
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    }

    // Function to display events
    function displayEvents(events) {
        const eventsList = document.querySelector('.search-results__panel ul');
        if (!eventsList) return;

        eventsList.innerHTML = ''; // Clear previous results

        if (events && events.length > 0) {
            events.forEach(event => {
                const eventItem = document.createElement('li');
                eventItem.innerHTML = `
                    <div class="container__event-card">
                        <img src="${event.logo?.url || 'https://imageevents.org.uk/wp-content/uploads/2016/02/event-management-placeholder.jpg'}" class="event-card__image">
                        <div class="event__details">
                            <div class="event__tag-status">${event.is_free ? 'Free' : 'Paid'}</div>
                            <h3 class="event__title">${event.name.text}</h3>
                            <p class="event__date">${new Date(event.start.local).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                            <p class="event__location">${event.venue?.name || 'Online Event'}</p>
                            <div class="event__price">${event.is_free ? 'Free' : 'From $' + (event.ticket_availability?.minimum_ticket_price?.major_value || '0.00')}</div>
                        </div>
                    </div>
                `;
                eventsList.appendChild(eventItem);
            });
        } else {
            eventsList.innerHTML = '<p>No events found for this search.</p>';
        }
    }

    // Search button click event
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim() || 'events';
        const location = locationInput.value.trim() || 'Denver';
        fetchEventbriteEvents(query, location);
    });

    // Enter key press event for search input
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim() || 'events';
            const location = locationInput.value.trim() || 'Denver';
            fetchEventbriteEvents(query, location);
        }
    });

    // Enter key press event for location input
    locationInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim() || 'events';
            const location = locationInput.value.trim() || 'Denver';
            fetchEventbriteEvents(query, location);
        }
    });

    // Load default events on page load
    fetchEventbriteEvents('events', 'Denver');
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