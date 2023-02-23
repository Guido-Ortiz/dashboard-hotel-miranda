// import { React } from 'react';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Booking from './components/Bookings/Booking/Booking';
// import Bookings from './components/Bookings/Bookings';
// import Contacts from './components/Contacts/Contacts';
// import Dashboard from './components/Dashboard/Dashboard';
// import Login from './components/Login/Login';

// import Room from './components/Room/Room';

// import Rooms from './components/Rooms/Rooms';
// import RoomsForm from './components/Rooms/RoomsForm/RoomsForm';
// import Users from './components/Users/Users';
// import UsersForm from './components/Users/UsersForm/UsersForm';
// import ProtectedRoutes from './services/ProtectedRoutes';

// function App() {

//   return (
//     <div>
//       <BrowserRouter>

//         <Routes>

//           <Route path='/login' element={<Login />} />

//           <Route path='/' element={<ProtectedRoutes />}>

//             <Route path='/' element={<Dashboard />} />

//             <Route path='bookings'>
//               <Route path='' element={<Bookings />} />
//               <Route path=':booking_id' element={<Booking />} />
//             </Route>

//             <Route path='rooms'>
//               <Route path='' element={<Rooms />} />
//               <Route path=':room_id' element={<Room />} />
//               <Route path='add' element={<RoomsForm />} />
//             </Route>

//             <Route path='users'>
//               <Route path='' element={<Users />} />
//               <Route path='add' element={<UsersForm />} />
//             </Route>

//             <Route path='/contact' element={<Contacts />} />

//           </Route>

//         </Routes>

//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;













import { React } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Booking from './components/Bookings/Booking/Booking';
import Bookings from './components/Bookings/Bookings';
import Contacts from './components/Contacts/Contacts';
import Dashboard from './components/Dashboard/Dashboard';
import { DashboardWrapper, RightContainer } from './components/Dashboard/DashboardStyles';
import Login from './components/Login/Login';

import Room from './components/Room/Room';

import Rooms from './components/Rooms/Rooms';
import RoomsForm from './components/Rooms/RoomsForm/RoomsForm';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Users from './components/Users/Users';
import UsersForm from './components/Users/UsersForm/UsersForm';
import ProtectedRoutes from './services/ProtectedRoutes';

function App() {

  const sidebar = useSelector(state => state.sidebar)
  const location = useLocation()

  return (
    <div>
      {/* <BrowserRouter> */}

        <Topbar location={location.pathname} />
        <DashboardWrapper>
          {sidebar && <Sidebar location={location.pathname} />}

          <RightContainer sidebar={sidebar}>

            <Routes>

              <Route path='/login' element={<Login />} />

              <Route path='/' element={<ProtectedRoutes />}>

                <Route path='/' element={<Dashboard />} />

                <Route path='bookings'>
                  <Route path='' element={<Bookings />} />
                  <Route path=':booking_id' element={<Booking />} />
                </Route>

                <Route path='rooms'>
                  <Route path='' element={<Rooms />} />
                  <Route path=':room_id' element={<Room />} />
                  <Route path='add' element={<RoomsForm />} />
                </Route>

                <Route path='users'>
                  <Route path='' element={<Users />} />
                  <Route path='add' element={<UsersForm />} />
                </Route>

                <Route path='/contact' element={<Contacts />} />

              </Route>

            </Routes>

          </RightContainer>

        </DashboardWrapper>

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;