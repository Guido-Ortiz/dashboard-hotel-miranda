
// import {render, screen} from '@testing-library/react';
// import { toHaveStyle } from '@testing-library/jest-dom';
const { BtnStatus } = require('../components/Bookings/BookingsStyles')
// const { isOccupied } = require('./index')

//   describe('Room occupancy', () => {
//     it('Should return TRUE if the room is occupied', () => {
//         const room = {
//             name: 'Room #1',
//             bookings: [{
//                 name: 'Guido Ortiz',
//                 email: 'guido@gmail.com',
//                 in: '27/02/2023',
//                 out: '03/03/2023',
//                 discount: 0.05,
//                 room: 'Room #1'
//             }]
//         }
//         expect(isOccupied('12-12-12')).toBe(true)
//         expect(isOccupied('2-2-22')).toBe(true)
//     })
//     it('Should return FALSE if the room is NOT occupied', () => {
//         expect(isOccupied()).toBe(false)
//     })
//   })


import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

test("Renders a green tag with text Check-In if the booking is about to check-in", () => {
    const color = '#68e365';;
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

test("Renders a red tag with text Check-Out if the booking is about to check-out", () => {
    const color = '#E23428';
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

test("Renders an orange tag with text In-Progress if the booking is still in progress", () => {
    const color = 'orange';
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