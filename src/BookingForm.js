import { useState } from "react";

function BookingForm(props) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

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

    const availTimes = props.availableTimes > 0 ? props.availableTimes : fetchAPI(new Date());

    const times = availTimes.map((availTime, index) => {
        return <option key = {index} value = {availTime}>{availTime}</option>;
    })

    return (
     <form className="bookingForm" onSubmit={props.onSubmit}>
     <label htmlFor="res-date">Choose date</label>
     <input type="date" id="res-date" value = {date} onChange={e => {setDate(e.target.value); props.dispatch({d:e.target.value})}} />
     <label htmlFor="res-time">Choose time</label>
     <select id="res-time" value = {time} onChange={e=>setTime(e.target.value)}>
     {times}
     </select>
     <label htmlFor="guests">Number of guests</label>
     <input type="number" placeholder="1" min="1" max="10" id="guests" value = {guests} onChange={e=>setGuests(e.target.value)} />
     <label htmlFor="occasion">Occasion</label>
     <select id="occasion"  value = {occasion} onChange={e=>setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
     </select>
     <button type = "submit">Make Your reservation</button>
  </form>
);

}

export default BookingForm;