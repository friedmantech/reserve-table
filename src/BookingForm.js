import { useState } from "react";
import {fetchAPI} from "./api";

function BookingForm(props) {

    const [date, setDate] = useState({
        value: '',
        isTouched: false,
    });
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const today = new Date().toISOString().split('T')[0];

    const DateErrorMessage = () => {
        return (
          <span className = "errorMsg">Date should be today or later</span>
        );
    };

    const availTimes = props.availableTimes ? props.availableTimes : fetchAPI(new Date());

    const times = availTimes.map((availTime, index) => {
        return <option key = {index} value = {availTime}>{availTime}</option>;
    })

    return (
     <>
     <h1 className = "formHeader">Book a Table</h1>
     <form className="bookingForm" onSubmit={props.submitForm}>
     <label htmlFor="res-date">Choose date</label>
     <input className = {date.isTouched && date.value < today ? "fieldError" : null} type="date" id="res-date" value = {date.value} onBlur={()=>{setDate({...date, isTouched: true})}} onChange={e => {setDate({...date, value: e.target.value}); props.dispatch({d:e.target.value})}} />
     {date.isTouched && date.value < today ? (
             <DateErrorMessage />
           ) : null}
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
     <button aria-label="On Click" type = "submit" disabled = {date.value < today}>Make Your reservation</button>
  </form>
  </>
);

}

export default BookingForm;
