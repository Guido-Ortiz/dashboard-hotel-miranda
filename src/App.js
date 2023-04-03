import { React, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import Booking from './components/Bookings/Booking/Booking';
import Bookings from './components/Bookings/Bookings';
import Contacts from './components/Contacts/Contacts';
import Dashboard from './components/Dashboard/Dashboard';
import { DashboardWrapper, RightContainer } from './components/Dashboard/DashboardStyles';
import Login from './components/Login/Login';
import Rooms from './components/Rooms/Rooms';
import RoomsForm from './components/Rooms/RoomsForm/RoomsForm';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Users from './components/Users/Users';
import UsersForm from './components/Users/UsersForm/UsersForm';
import ProtectedRoutes from './services/ProtectedRoutes';

function App() {

  // const sidebar = useSelector(state => state.sidebar)
  const [sidebar, setSidebar] = useState(true)
  const location = useLocation()

  return (
    <div>

      <Topbar location={location.pathname} sidebar={sidebar} setSidebar={setSidebar} />
      <DashboardWrapper>
        {/* {sidebar && <Sidebar location={location.pathname} sidebar={sidebar} />} */}
        <Sidebar location={location.pathname} sidebar={sidebar} setSidebar={setSidebar} />

        <RightContainer sidebar={sidebar}>

          <Routes>

            <Route path='/login' element={<Login />} />

            <Route path='/' element={<ProtectedRoutes />}>

              <Route path='/' element={<Dashboard />} />

              {/* <Route path='bookings'>
                <Route path='' element={<Bookings />} />
                <Route path=':booking_id' element={<Booking />} />
              </Route>

              <Route path='rooms'>
                <Route path='' element={<Rooms />} />
                <Route path='add' element={<RoomsForm />} />
              </Route> */}

              <Route path='users'>
                <Route path='' element={<Users />} />
                <Route path='add' element={<UsersForm />} />
                <Route path=':user_id' element={<UsersForm />} />
              </Route>

              {/* <Route path='/contact' element={<Contacts />} /> */}

            </Route>

          </Routes>

        </RightContainer>

      </DashboardWrapper>

    </div>
  );
}

export default App;