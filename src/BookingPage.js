import BookingForm from "./BookingForm";

function BookingPage(props) {

    return (
    <>
        <BookingForm availableTimes = {props.availableTimes} dispatch = {props.dispatch} submitForm = {props.submitForm} />
    </>
);

}

export default BookingPage;