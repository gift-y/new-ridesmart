document.addEventListener('DOMContentLoaded', function() {
    // Testimonial carousel navigation
    const prevButton = document.querySelector('.nav-arrow.prev');
    const nextButton = document.querySelector('.nav-arrow.next');
    const testimonialCards = document.querySelector('.testimonial-cards');
    
    if (prevButton && nextButton && testimonialCards) {
        // Set scroll amount based on card width + gap
        const scrollAmount = 320; // card width (300px) + gap (20px)
        
        nextButton.addEventListener('click', function() {
            testimonialCards.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        prevButton.addEventListener('click', function() {
            testimonialCards.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
    
    // Add event listeners for register and sign in buttons
    const registerButton = document.querySelector('.register');
    const signInButton = document.querySelector('.signin');
    
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            window.location.href = 'signup.html';
        });
    }
    
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            window.location.href = 'signin.html';
        });
    }
    
    // Calendar icon click handler
    const calendarIcon = document.getElementById('calendar-icon');
    const dateInput = document.getElementById('date-input');
    
    if (calendarIcon && dateInput) {
        calendarIcon.addEventListener('click', function() {
            // Simulate a click on the date input to open the date picker
            dateInput.showPicker();
        });
    }
    
    // Call the initAutocomplete function
    initAutocomplete();
});

// Google Maps Places Autocomplete function
function initAutocomplete() {
    // Create the autocomplete objects for location and destination inputs
    const locationInput = document.getElementById('location-input');
    const destinationInput = document.getElementById('destination-input');
    
    if (locationInput && destinationInput) {
        // Set options for autocomplete - bias towards Ghana
        const options = {
            componentRestrictions: { country: 'gh' },
            fields: ['address_components', 'geometry', 'name'],
            strictBounds: false,
            types: ['geocode', 'establishment']
        };
        
        // Initialize autocomplete for both inputs
        const locationAutocomplete = new google.maps.places.Autocomplete(locationInput, options);
        const destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput, options);
        
        // Prevent form submission when pressing enter in the inputs
        locationInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') e.preventDefault();
        });
        
        destinationInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') e.preventDefault();
        });
        
        // Optional: Add place_changed listeners to get details of selected places
        locationAutocomplete.addListener('place_changed', function() {
            const place = locationAutocomplete.getPlace();
            console.log('Selected location:', place);
        });
        
        destinationAutocomplete.addListener('place_changed', function() {
            const place = destinationAutocomplete.getPlace();
            console.log('Selected destination:', place);
        });
    } else {
        console.log('Location or destination input not found');
    }
}
