import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the number of guests label', () => {
  render(<BookingForm availableTimes = {[]} />);
  const labelElement = screen.getByText("Number of guests");
  expect(labelElement).toBeInTheDocument();
})

test('Renders the available times correctly', () => {
  render(<BookingForm />);
  const timeElement = screen.getByLabelText('Choose time');
  const times = Array.from(timeElement.options).map(option => option.value);
  expect((times).length) > 0;
});


test('Updates the available times correctly', () => {
  render(<BookingForm />);

  const expectedValue = ["17:00","17:30","20:00","20:30","22:30","23:00", "23:30"];

  const dateElement = screen.getByLabelText('Choose date');
  fireEvent.change(dateElement, {target: {value: '05/06/2025'}})

  const timeElement = screen.getByLabelText('Choose time');
  const times = Array.from(timeElement.options).map(option => option.value);
  expect(times).toEqual(expectedValue);
})

test('Booking form can be submitted', () => {
  const handleSubmit = jest.fn();

  render(<BookingForm onSubmit = {handleSubmit} />);

  const dateElement = screen.getByLabelText('Choose date');
  const timeElement = screen.getByLabelText('Choose time');
  const guestElement = screen.getByLabelText('Number of guests');
  const occasionElement = screen.getByLabelText('Occasion');
  const submitButton = screen.getByText('Make Your reservation');

  fireEvent.change(dateElement, {target: {value: '05/09/2025'}})
  fireEvent.change(timeElement, {target: {value: '20:00'}})
  fireEvent.change(guestElement, {target: {value: 4}})
  fireEvent.change(occasionElement, {target: {value: 'Anniversary'}})
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
})





