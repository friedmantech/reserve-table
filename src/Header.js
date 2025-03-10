
import logo from "./images/Logo.svg"
import Nav from "./Nav"

function Header() {
    return <header>
        <img src = {logo} alt = "Logo" /><Nav />
    </header>;
}

export default Header;