import { useReducer} from 'react';
import { useNavigate, Route, Routes } from 'react-router';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';
import ConfirmedBooking from './ConfirmedBooking';

function Main() {

    const navigate = useNavigate();

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    function initializeTimes (date) {
        return fetchAPI(date);
    }

    function updateTimes (state, date) {
        return fetchAPI(new Date(date.d));
    }

    function submitForm (e, formData) {
        e.preventDefault();
        //const formData = new FormData(e.target); //alert(formData);
        if (submitAPI(formData)) navigate("/confirm");
    }

    const [availableTimes, dispatch] = useReducer(updateTimes,new Date(),initializeTimes);

    return (
    <main>
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes = {availableTimes} dispatch = {dispatch} submitHandler = {submitForm} />}></Route>
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

