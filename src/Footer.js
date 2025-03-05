
import logo from  "./Logo.svg"

function Footer() {
    return <footer>
        <img src = {logo} alt = "Logo" />
        <h3>Doormat Navigation</h3>
        <nav>
    <ul>
        <li><a href = "#">Home</a></li>
        <li><a href = "#">About</a></li>
        <li><a href = "#">Menu</a></li>
        <li><a href = "#">Reservations</a></li>
        <li><a href = "#">Order Online</a></li>
        <li><a href = "#">Login</a></li>
    </ul>
    </nav>
    <h3>Contact</h3>
    <ul>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
    </ul>
    <h3>Social Media Links</h3>
    <ul>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
    </ul>
    </footer>;
}

export default Footer;
