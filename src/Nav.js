import { Routes, Route, Link } from "react-router-dom";

import HomePage from './HomePage';
import ReservationsPage from './ReservationsPage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';



function Nav() {

return (
    <>
    <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
	    </ul>
    </nav>

    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservations" element={<ReservationsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
    </>
);

}

export default Nav;