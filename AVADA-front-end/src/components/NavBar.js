export default function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.innerHTML = `
        <div class="navbar-container">
             <a href="#" class="navbar-brand" onclick="loadPage('about')">AVADA</a>
            <ul class="nav-list">
                <li><a href="#" onclick="loadPage('about')">About</a></li>
                <li><a href="#" onclick="loadPage('howToUse')">Guide</a></li>
                <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
            </ul>
        </div>
    `;
    return navbar;
}