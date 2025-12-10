document.addEventListener('DOMContentLoaded', () => {
    // Inject Header and Footer to simulate a templating system
    renderHeader();
    renderFooter();

    // Set active link based on current page
    setActiveLink();

    // Mobile Menu Toggle Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            mobileBtn.classList.toggle('toggle');
        });
    }
});

function renderHeader() {
    const headerHTML = `
        <div class="container nav-container">
            <a href="index.html" class="logo">INDIA SPACE<span class="text-gold">.</span></a>
            <div class="mobile-menu-btn" id="mobile-menu-btn">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <nav class="nav-links">
                <a href="index.html" data-page="home">Home</a>
                <a href="about.html" data-page="about">About</a>
                <a href="process.html" data-page="process">Process</a>
                <a href="construction.html" data-page="construction">Construction</a>
                <div class="dropdown">
                    <span class="dropdown-trigger">Interiors ▾</span>
                    <div class="dropdown-content">
                        <a href="kitchen.html" data-page="kitchen">Kitchen</a>
                        <a href="bedroom.html" data-page="bedroom">Bedroom</a>
                        <a href="hall.html" data-page="hall">Hall</a>
                    </div>
                </div>
                <a href="contact.html" data-page="contact">Contact</a>
            </nav>
            <a href="contact.html" class="btn btn-sm desktop-only">Get Quote</a>
        </div>
    `;
    const header = document.querySelector('header');
    if (header) header.innerHTML = headerHTML;
}

function renderFooter() {
    const footerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h2>INDIA SPACE INTERIORS<br>AND CONSTRUCTIONS<span class="text-gold">.</span></h2>
                    <p>Transforming spaces into dreams. Premium interior design and construction services.</p>
                </div>
                <div class="footer-links">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="kitchen.html">Modular Kitchens</a></li>
                        <li><a href="bedroom.html">Luxury Bedrooms</a></li>
                        <li><a href="hall.html">Modern Halls</a></li>
                        <li><a href="#">Construction</a></li>
                    </ul>
                </div>
                <div class="footer-contact" id="contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><a href="tel:+918521098781">+91 8521 098781</a></li>
                        <li>Bengaluru, Karnataka</li>
                        <li style="font-size: 0.9rem; line-height: 1.4; color: #a0a0a0;">
                            Flat No. 101, First Floor,<br>
                            Narayanswamy Building, Siddhartha Layout,<br>
                            Main Road, Lv Provision Stores,<br>
                            Kadugodi, Bengaluru-560067
                        </li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 India Space Interiors and Constructions. All rights reserved.</p>
                <p style="font-size: 0.8rem; margin-top: 0.5rem;">GSTIN: 29JPMPK0652G1ZJ</p>
            </div>
        </div>
    `;
    const footer = document.querySelector('footer');
    if (footer) footer.innerHTML = footerHTML;
}

function setActiveLink() {
    // Simple logic to highlight the current page in nav
    const path = window.location.pathname;
    const page = path.split("/").pop().replace('.html', '') || 'home';

    // Needs a slight delay since header is injected dynamically
    setTimeout(() => {
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            // Remove active from all first
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });
    }, 50);
}
