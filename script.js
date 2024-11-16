// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Highlight active section on scroll
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Add active class on click
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});
let slideIndex = 0;
const slides = document.getElementById('carouselSlide');
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showNextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Automatically change slide every 3 seconds
setInterval(showNextSlide, 3000);





function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        product.style.display = 'none'; // Hide all products initially
        
        // Show product if it matches the selected category
        if (category === 'all' || product.getAttribute('data-category').includes(category)) {
            product.style.display = 'inline-block';
        }
    });
}

// Show all products initially
filterProducts('all');




function toggleAnswer(faqItem) {
    const isActive = faqItem.classList.contains('active');
    const allItems = document.querySelectorAll('.faq-item');
    
    // Close all answers
    allItems.forEach(item => item.classList.remove('active'));
    
    // Open the clicked answer if it was not already active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}




let currentSlide = 0;

function showSlide(index) {
    const track = document.querySelector('.testimonial-track');
    const bullets = document.querySelectorAll('.bullet');

    // Calculate the width to translate for each slide (adjust if you add more slides)
    const slideWidth = 270; // 250px card + 20px margin (10px each side)
    track.style.transform = `translateX(-${index * slideWidth * 3}px)`; // Slide width * 3 cards

    // Update active bullet
    bullets.forEach(bullet => bullet.classList.remove('active'));
    bullets[index].classList.add('active');

    currentSlide = index;
}

// Initialize by showing the first slide
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});






// Load Google Map using FunWork
function initMap() {
    const location = { lat: -25.344, lng: 131.036 }; // Example coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Form Validation Function
function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    let isValid = true;

    // Clear previous messages
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("formMessage").textContent = "";

    // Validate First Name and Last Name
    if (firstName.length > 15) {
        document.getElementById("firstNameError").textContent = "First name must be less than 15 characters";
        isValid = false;
    }
    if (lastName.length > 15) {
        document.getElementById("lastNameError").textContent = "Last name must be less than 15 characters";
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email) ||
        email.startsWith('.') ||
        email.includes('..') ||
        email.endsWith('.')) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        isValid = false;
    }

    // Validate Phone Number
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits with no spaces or punctuation";
        isValid = false;
    }

    // Validate Message Length
    if (message.length < 2 || message.length > 120) {
        document.getElementById("messageError").textContent = "Message must be between 2 and 120 characters";
        isValid = false;
    }

    // Final Validation Message
    if (isValid) {
        document.getElementById("formMessage").textContent = "Successfully Submitted";
    } else {
        document.getElementById("formMessage").textContent = "Enter a valid name/email/message";
    }

    return isValid;
}






// Subscribe function to trigger a 404 page
function subscribe() {
    const email = document.getElementById("subscribeEmail").value;

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Redirect to a non-existent page to show 404 error
    window.location.href = "/404.html";
    return false; // Prevents form submission
}

