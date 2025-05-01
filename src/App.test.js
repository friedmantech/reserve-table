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

  const expectedValue = ["17:00","17:30","18:00","19:00","19:30","20:30","22:30"];

  const dateElement = screen.getByLabelText('Choose date');
  fireEvent.change(dateElement, {target: {value: '05/06/2025'}})

  const timeElement = screen.getByLabelText('Choose time');
  const times = Array.from(timeElement.options).map(option => option.value);
  expect(times).toEqual(expectedValue);
})

test('Booking form can be submitted', () => {
  const handleSubmit = jest.fn(e => e.preventDefault());
  const dispatch = jest.fn();

  render(<BookingForm onSubmit = {handleSubmit} dispatch = {dispatch} />);

  const dateElement = screen.getByLabelText('Choose date');
  const timeElement = screen.getByLabelText('Choose time');
  const guestElement = screen.getByLabelText('Number of guests');
  const occasionElement = screen.getByLabelText('Occasion');
  const submitButton = screen.getByText('Make Your reservation');

  fireEvent.change(dateElement, {target: {value: '2025-05-09'}})
  fireEvent.change(timeElement, {target: {value: '21:30'}})
  fireEvent.change(guestElement, {target: {value: 4}})
  fireEvent.change(occasionElement, {target: {value: 'Anniversary'}})
  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalled();
})

test('HTML5 validation is correct', () => {
  render(<BookingForm />);
  const guestElement = screen.getByLabelText('Number of guests');
  expect(guestElement).toHaveAttribute('min', '1');
  expect(guestElement).toHaveAttribute('max', '10');
})

test('Javascript validation is correct', () => {
  const dispatch = jest.fn();
  render(<BookingForm dispatch = {dispatch}  />);
  const dateElement = screen.getByLabelText('Choose date');
  const submitButton = screen.getByText('Make Your reservation');
  expect(submitButton).toBeDisabled();
  fireEvent.change(dateElement, {target: {value: '2025-05-10'}})
  expect(submitButton).toBeEnabled();
  fireEvent.change(dateElement, {target: {value: '2025-04-09'}})
  expect(submitButton).toBeDisabled();
})
