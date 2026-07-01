document.addEventListener("DOMContentLoaded", () => {
    
    // --- 0. PRELOADER LOGIC (EXTENDED TIME FOR GIF) ---
    window.addEventListener("load", () => {
        const preloader = document.getElementById("preloader");
        // Extended the delay to 800ms so the user can see your animated GIF
        setTimeout(() => {
            preloader.classList.add("loader-hidden");
        }, 800);
    });

    // --- 1. MOBILE HAMBURGER MENU LOGIC ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Toggle menu open/close
    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Change icon from bars to X
        const icon = hamburgerBtn.querySelector('i');
        if(mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburgerBtn.querySelector('i').classList.remove('fa-xmark');
            hamburgerBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // --- 2. DROPDOWN LOGIC ---
    const locationBtn = document.getElementById('locationBtn');
    const locationDropdown = document.getElementById('locationDropdown');
    const selectedCityText = document.getElementById('selectedCity');
    const mapLocationTag = document.getElementById('mapLocationTag');
    const options = document.querySelectorAll('.loc-option');
    const navIcon = locationBtn ? locationBtn.querySelector('.nav-icon') : null;

    if(locationBtn) {
        locationBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            locationDropdown.classList.toggle('show');
            navIcon.style.transform = locationDropdown.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }

    options.forEach(option => {
        option.addEventListener('click', () => {
            const chosenCity = option.innerText;
            selectedCityText.innerText = chosenCity;
            if(mapLocationTag) mapLocationTag.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${chosenCity}`;
            locationDropdown.classList.remove('show');
            navIcon.style.transform = 'rotate(0deg)';
        });
    });

    document.addEventListener('click', (e) => {
        if (locationBtn && !locationBtn.contains(e.target) && !locationDropdown.contains(e.target)) {
            locationDropdown.classList.remove('show');
            navIcon.style.transform = 'rotate(0deg)';
        }
    });

    // --- 3. TABS LOGIC ---
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // --- 4. MAIN SEARCH LOGIC ---
    const searchBtn = document.getElementById('mainSearchBtn');
    const searchInput = document.querySelector('.search-bar input');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        const city = selectedCityText ? selectedCityText.innerText : 'your area';
        if(query) {
            alert(`Searching RozzBuddy for: "${query}" in ${city}`);
        } else {
            alert("Please enter a service or category to search.");
        }
    });

});