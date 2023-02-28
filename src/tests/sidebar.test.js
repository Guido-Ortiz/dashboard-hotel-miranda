const { BtnStatus } = require('../components/Bookings/BookingsStyles');
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Sidebar from "../components/Sidebar/Sidebar";
import { MemoryRouter } from "react-router";
import SidebarItem from "../components/Sidebar/SidebarItem/SidebarItem";

describe('Sidebar test', () => {

  test("Sidebar should display 5 items", () => {
    
    render(
        <MemoryRouter>
            <Sidebar />
        </MemoryRouter>
    );

    expect(screen.getByText('Dashboard')).toBeVisible()
    expect(screen.getByText('Bookings')).toBeVisible()
    expect(screen.getByText('Rooms')).toBeVisible()
    expect(screen.getByText('Contact')).toBeVisible()
    expect(screen.getByText('Users')).toBeVisible()
    expect(screen.getByText('Users')).not.toHaveTextContent('Userrrrrrs')
    // expect(screen.getByRole('button')).not.toHaveStyle("background: #E23428")
    // expect(screen.getByRole('button')).toHaveTextContent("Check-In")
  });

  

})