import BookingForm from "./BookingForm";

function BookingPage(props) {

    return (
    <>
        <BookingForm availableTimes = {props.availableTimes} dispatch = {props.dispatch} onSubmit = {props.submitHandler} />
    </>
);

}

export default BookingPage;