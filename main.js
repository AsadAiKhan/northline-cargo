// Initialize Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 25.3207, lng: 55.4142 }, // Sharjah coordinates
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });

    // Add marker for North Line Cargo
    const marker = new google.maps.Marker({
        position: { lat: 25.3207, lng: 55.4142 },
        map: map,
        title: 'North Line Cargo L.L.C.'
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation classes on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all feature cards and sections
document.querySelectorAll('.feature-card, .feature-icon').forEach((el) => {
    observer.observe(el);
});

// Form submission handling
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Send email (replace with actual email service)
        fetch('https://api.example.com/send-email', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('✅ You will get your quote shortly. Thank you for choosing North Line Cargo!');
                this.reset();
            }
        });
    });
}

// Initialize Google Maps when the page loads
window.onload = function() {
    initMap();
};
