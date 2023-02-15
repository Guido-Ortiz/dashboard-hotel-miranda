import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Bookings from './components/Bookings/Bookings';
import Contacts from './components/Contacts/Contacts';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Room from './components/Room/Room';
import RoomForm from './components/Room/RoomForm/RoomForm';
import Rooms from './components/Rooms/Rooms';
import Users from './components/Users/Users';
import UsersForm from './components/Users/UsersForm/UsersForm';
import ProtectedRoutes from './services/ProtectedRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* LOGIN */}
          <Route path='/login' element={<Login />} />

          <Route path='/' element={<ProtectedRoutes />}>

            {/* DASHBOARD */}
            <Route path='/' element={<Dashboard />} />

            {/* BOOKINGS */}
            <Route path='bookings'>
              <Route path='' element={<Bookings />} />
              <Route path=':booking_id' element={<Booking />} />
            </Route>

            {/* ROOMS */}
            <Route path='rooms'>
              <Route path='' element={<Rooms />} />
              <Route path=':room_id' element={<Room />} />
              <Route path='add' element={<RoomForm />} />
            </Route>

            {/* USERS */}
            <Route path='users'>
              <Route path='' element={<Users />} />
              <Route path='add' element={<UsersForm />} />
            </Route>

            {/* CONTACTS */}
            <Route path='/contact' element={<Contacts />} />

          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;