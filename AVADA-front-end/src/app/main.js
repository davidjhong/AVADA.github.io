import createNavbar from '../components/NavBar.js';

document.addEventListener('DOMContentLoaded', () => {
    // Create and append the navbar
    const navbarContainer = document.getElementById('navbar');
    const navbar = createNavbar();
    navbarContainer.appendChild(navbar);

    const app = document.getElementById('app');

    // Function to load content
    window.loadPage = function(page) {
        app.innerHTML = '';  // Clear previous content

        switch (page) {
            case 'about':
                app.innerHTML = '<h1>About</h1><p>Information about the site</p>';
                break;
            case 'howToUse':
                app.innerHTML = '<h1>Guide</h1><p>Instructions on how to use the app</p>';
                break;
            case 'contact':
                app.innerHTML = '<h1>Contact</h1><p>Contact details</p>';
                break;
        }
    };

    // Load the default page
    loadPage('about');
});