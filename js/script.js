// ==========================================
// DROPDOWN NAVIGATION MENU
// ==========================================

// Get the menu button and navigation section
const menuToggle = document.getElementById("menuToggle");
const mainNavigation = document.getElementById("mainNavigation");

// Check that both elements exist before adding functionality
if (menuToggle && mainNavigation) {

    // Open or close the menu when the button is clicked
    menuToggle.addEventListener("click", function () {

        // Add or remove the open class
        mainNavigation.classList.toggle("show-menu");

        // Check whether the menu is currently open
        const menuIsOpen = mainNavigation.classList.contains("show-menu");

        // Update the accessibility information
        menuToggle.setAttribute("aria-expanded", menuIsOpen);

    });

}
// ==========================================
// HOME PAGE WELCOME MESSAGE
// ==========================================

// Find the welcome message element
const welcomeMessage = document.getElementById("welcomeMessage");

// Only run this code if the element exists
if (welcomeMessage) {

    // Get the current hour
    const currentHour = new Date().getHours();

    // Display a message depending on the time
    if (currentHour < 12) {
        welcomeMessage.textContent = "Good morning! Ready to level up?";
    } 
    else if (currentHour < 18) {
        welcomeMessage.textContent = "Good afternoon! Your next gaming adventure awaits.";
    } 
    else {
        welcomeMessage.textContent = "Good evening! Come and enjoy the ultimate gaming experience.";
    }

}
// ==========================================
// OVERVIEW PAGE SEARCH FUNCTION
// ==========================================

// Get the search input and error message
const experienceSearch = document.getElementById("experienceSearch");
const searchError = document.getElementById("searchError");

// Get all experience cards
const experienceCards = document.querySelectorAll(".experience-card");

// Only run if the search field exists
if (experienceSearch && searchError) {

    // Run whenever the user types something
    experienceSearch.addEventListener("input", function () {

        // Get the text entered by the user
        const searchText = experienceSearch.value.trim().toLowerCase();

        // Keep track of how many cards match
        let matchingCards = 0;

        // Check every experience card
        experienceCards.forEach(function (card) {

            // Get all the text inside the card
            const cardText = card.textContent.toLowerCase();

            // Check whether the card contains the search text
            if (cardText.includes(searchText)) {

                card.style.display = "";
                matchingCards++;

            } else {

                card.style.display = "none";

            }

        });

        // Display an error message if nothing matches
        if (searchText !== "" && matchingCards === 0) {

            searchError.textContent =
                "No packages or experiences were found. Please try another search.";

        } else {

            searchError.textContent = "";

        }

    });

}
// ==========================================
// ABOUT PAGE IMAGE GALLERY
// ==========================================

// Find the gallery section
const imageGallery = document.getElementById("imageGallery");

// Only run if the gallery exists
if (imageGallery) {

    // Select all images inside the gallery
    const galleryImages = imageGallery.querySelectorAll("img");

    // Create a container for the enlarged image
    const imagePopup = document.createElement("div");

    imagePopup.className = "image-popup";

    // Add the popup to the page
    imagePopup.innerHTML = `
        <button class="close-popup" aria-label="Close image">&times;</button>
        <img src="" alt="Enlarged gallery image">
    `;

    document.body.appendChild(imagePopup);

    // Get the popup image and close button
    const popupImage = imagePopup.querySelector("img");
    const closePopup = imagePopup.querySelector(".close-popup");

    // Open an image when a gallery image is clicked
    galleryImages.forEach(function (image) {

        image.style.cursor = "pointer";

        image.addEventListener("click", function () {

            popupImage.src = image.src;
            popupImage.alt = image.alt;

            imagePopup.classList.add("show-popup");

        });

    });

    // Close the popup using the close button
    closePopup.addEventListener("click", function () {

        imagePopup.classList.remove("show-popup");

    });

    // Close the popup when the dark background is clicked
    imagePopup.addEventListener("click", function (event) {

        if (event.target === imagePopup) {
            imagePopup.classList.remove("show-popup");
        }

    });

    // Close the popup when Escape is pressed
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            imagePopup.classList.remove("show-popup");
        }

    });

}