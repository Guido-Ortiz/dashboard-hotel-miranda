const { BtnStatus } = require('../components/Bookings/BookingsStyles');
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Test button status', () => {

  test("Background green with text 'Check-In' if the booking is about to check-in", () => {
    const color = '#68e365'
    const status = 'Check-In'
    render(
      <BtnStatus background={color} status={status}>
        {status}
      </BtnStatus>
    );

    expect(screen.getByRole('button')).toHaveStyle("background: #68e365")
    expect(screen.getByRole('button')).not.toHaveStyle("background: #E23428")
    expect(screen.getByRole('button')).toHaveTextContent("Check-In")
  });

  test("Background red with text 'Check-Out' if the booking is about to check-out", () => {
    const color = '#E23428'
    const status = 'Check-Out'
    render(
      <BtnStatus background={color} status={status}>
        {status}
      </BtnStatus>
    );

    expect(screen.getByRole('button')).toHaveStyle("background: #E23428")
    expect(screen.getByRole('button')).not.toHaveStyle("background: #68e365")
    expect(screen.getByRole('button')).toHaveTextContent("Check-Out")
  });

  test("Background orange with text 'In-Progress' if the booking is in progress", () => {
    const color = 'orange'
    const status = 'In-Progress'
    render(
      <BtnStatus background={color} status={status}>
        {status}
      </BtnStatus>
    );

    expect(screen.getByRole('button')).toHaveStyle("background: orange")
    expect(screen.getByRole('button')).not.toHaveStyle("background: #68e365")
    expect(screen.getByRole('button')).toHaveTextContent("In-Progress")
  });

})