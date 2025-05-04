import { useReducer} from 'react';
import { useNavigate, Route, Routes } from 'react-router';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';
import ConfirmedBooking from './ConfirmedBooking';
import {fetchAPI, submitAPI} from './api';

function Main() {

    const navigate = useNavigate();

    function initializeTimes (date) {
        return fetchAPI(date);
    }

    function updateTimes (state, date) {
        return fetchAPI(new Date(date.d));
    }

    function submitForm (e) {
        e.preventDefault();
        if (submitAPI(e.target.element)) navigate("/confirm");
    }

    const [availableTimes, dispatch] = useReducer(updateTimes,new Date(),initializeTimes);

    return (
    <main>
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes = {availableTimes} dispatch = {dispatch} submitForm = {submitForm} />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/confirm" element={<ConfirmedBooking />}></Route>
    </Routes>
    </main>
);
}

export default Main;

