import { React } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Bookings/Booking/Booking';
import Bookings from './components/Bookings/Bookings';
import Contacts from './components/Contacts/Contacts';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

import Room from './components/Room/Room';

import Rooms from './components/Rooms/Rooms';
import RoomsForm from './components/Rooms/RoomsForm/RoomsForm';
import Users from './components/Users/Users';
import UsersForm from './components/Users/UsersForm/UsersForm';
import ProtectedRoutes from './services/ProtectedRoutes';

function App() {

  return (
    <div>
      <BrowserRouter>

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

      </BrowserRouter>
    </div>
  );
}

export default App;








// import { UserContext } from './context/userContext';
// import AuthProvider from './services/AuthProvider';
// import RequireAuth from './services/RequireAuth';



// function App() {

//   const auth = localStorage.getItem("logged_in")
//   console.log(auth)
//   return (
//     <div>
//       {/* <AuthProvider> */}

//         <BrowserRouter>

//           <Topbar />

//           <DashboardWrapper>
//             <Sidebar />

//             <RightContainer>

//               <Routes>

//                 <Route path='/login' element={<Login />} />


//                 <Route path='/' element={<ProtectedRoutes />}>

//                   <Route path='/' element={<Dashboard />} />

//                   <Route path='bookings'>
//                     <Route path='' element={<Bookings />} />
//                     <Route path=':booking_id' element={<Booking />} />
//                   </Route>

//                   <Route path='rooms'>
//                     <Route path='' element={<Rooms />} />
//                     <Route path=':room_id' element={<Room />} />
//                     <Route path='add' element={<RoomsForm />} />
//                   </Route>

//                   <Route path='users'>
//                     <Route path='' element={<Users />} />
//                     <Route path='add' element={<UsersForm />} />
//                   </Route>

//                   <Route path='/contact' element={<Contacts />} />

//                 </Route>


//               </Routes>
//             </RightContainer>
//           </DashboardWrapper>



//         </BrowserRouter>
//       {/* </AuthProvider> */}
//     </div>
//   );
// }

// export default App;