document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. DROPDOWN LOGIC ---
    const locationBtn = document.getElementById('locationBtn');
    const locationDropdown = document.getElementById('locationDropdown');
    const selectedCityText = document.getElementById('selectedCity');
    const mapLocationTag = document.getElementById('mapLocationTag');
    const options = document.querySelectorAll('.loc-option');
    const navIcon = locationBtn.querySelector('.nav-icon');

    // Toggle dropdown when clicking the button
    locationBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closing
        locationDropdown.classList.toggle('show');
        navIcon.style.transform = locationDropdown.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // Handle city selection
    options.forEach(option => {
        option.addEventListener('click', () => {
            const chosenCity = option.innerText;
            // Update Header button text
            selectedCityText.innerText = chosenCity;
            // Update Map Tag text
            mapLocationTag.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${chosenCity}`;
            // Close dropdown
            locationDropdown.classList.remove('show');
            navIcon.style.transform = 'rotate(0deg)';
        });
    });

    // Close dropdown if clicking anywhere else on the screen
    document.addEventListener('click', (e) => {
        if (!locationBtn.contains(e.target) && !locationDropdown.contains(e.target)) {
            locationDropdown.classList.remove('show');
            navIcon.style.transform = 'rotate(0deg)';
        }
    });

    // --- 2. TABS LOGIC ---
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // --- 3. MAIN SEARCH LOGIC ---
    const searchBtn = document.getElementById('mainSearchBtn');
    const searchInput = document.querySelector('.search-bar input');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if(query) {
            alert(`Searching RozzBuddy for: "${query}" in ${selectedCityText.innerText}`);
        } else {
            alert("Please enter a service or category to search.");
        }
    });

});