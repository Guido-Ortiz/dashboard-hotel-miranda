import React, { useEffect, useState } from 'react';
import { BoxEdit, BtnEdit, CheckWapper, DetailWrapper, FacilitiesWrapper, FacilityChip, GuestContact, GuestData, GuestWrapper, InputEdit, InputEditWrapper, RoomInfoWrapper, RoomWrapper } from './BookingStyles';
import guest from '../../../resources/p1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Email, Phone } from '@mui/icons-material';
import { useParams } from 'react-router';


import { Modal } from '@mui/material';
import BookingSlider from './BookingSlider/BookingSlider';
import { editBooking, getBooking, resetBooking } from '../../../redux/features/bookingsSlice';
import Loader from '../../Loader/Loader';
import AlertComponent from '../../Alert/Alert';

const Booking = () => {

  const { booking_id } = useParams()

  const dispatch = useDispatch()

  // const sidebar = useSelector(state => state.sidebar)
  const detail = useSelector(state => state.bookings.booking?.data)

  useEffect(() => {
    dispatch(getBooking(booking_id))
    return () => dispatch(resetBooking())
  }, [dispatch, booking_id])

  

  const requests = ['Early Check-In', 'Late Check-Out', 'None']

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(editBooking({ booking_id, newBooking }))
    console.log(newBooking)
    setOpen(false)
    setOpenAlert(true)
  }

  const handleChange = e => {
    setNewBooking({
      ...newBooking,
      [e.target.name]: e.target.value
    })
  }

  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  const [newBooking, setNewBooking] = useState({
    customer_name: detail?.customer_name,
    customer_email: detail?.customer_email,
    customer_phone: detail?.customer_phone,
    order: detail?.order,
    checkin: detail?.checkin,
    checkout: detail?.checkout,
    request: detail?.request,
    room_type: detail?.room_type,
    number: detail?.number,
    photo: detail?.photo,
    status: detail?.status,
  })

  // useEffect(() => {
  //   dispatch(getBooking(booking_id))
  // }, [handleEdit, booking_id])

  if (!detail) {
    return <Loader />
  }

  return (
    <>

      <DetailWrapper>

        <div>
          <GuestWrapper>
            <img src={guest} alt='Guest' />
            <GuestData>
              <h2>{detail?.customer_name}</h2>
              <h4>{detail._id}</h4>
              <GuestContact>
                <div>
                  <Phone />
                  <h3>{detail.customer_phone}</h3>
                </div>
                <div>
                  <Email />
                  <h3>{detail.customer_email}</h3>
                </div>
                <BtnEdit onClick={handleOpen}>Edit Booking</BtnEdit>

              </GuestContact>
            </GuestData>
          </GuestWrapper>

          <CheckWapper>
            <div>
              <h5>Check-In</h5>
              <h4>{detail.checkin}</h4>
            </div>
            <div>
              <h5>Check-Out</h5>
              <h4>{detail.checkout}</h4>
            </div>
          </CheckWapper>

          <RoomInfoWrapper>
            <div>
              <h5>Room Info</h5>
              <h2>{detail.room_type} - {detail.number}</h2>
            </div>
            <div>
              <h5>Price</h5>
              <h2>$145 <span>/night</span></h2>
            </div>
          </RoomInfoWrapper>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas. Non voluptates rerum ipsum veniam earum dignissimos eveniet est quibusdam ducimus. Repellat id consequuntur impedit, maxime ipsa distinctio suscipit nesciunt.</p>

          <FacilitiesWrapper>
            <h5>Facilities</h5>
            <section>
              <FacilityChip>2 Bathroom</FacilityChip>
              <FacilityChip>Air Conditioner</FacilityChip>
              <FacilityChip>Television</FacilityChip>
            </section>
          </FacilitiesWrapper>


        </div>

        <RoomWrapper>
          <BookingSlider />
          <h2>{detail.room_type}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nostrum quos itaque dignissimos? At culpa soluta deleniti quibusdam officiis similique recusandae officia expedita quam est eligendi aspernatur, sit, impedit perferendis.</p>
        </RoomWrapper>



        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <BoxEdit>

            <h3>Edit Booking {booking_id}</h3>

            <div>
              <InputEditWrapper>
                <h4>Full Name</h4>
                <InputEdit type="text" placeholder='Guest name' value={newBooking.customer_name} name='customer_name' onChange={e => handleChange(e)} />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>E-mail</h4>
                <InputEdit type="text" name='customer_email' value={newBooking.customer_email} placeholder='email' onChange={e => handleChange(e)} />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Phone</h4>
                <InputEdit type="text" name='customer_phone' value={newBooking.customer_phone} placeholder='Phone' onChange={e => handleChange(e)} />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Order</h4>
                <InputEdit type="date" name='order' value={newBooking.order} onChange={e => handleChange(e)} />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Check-In</h4>
                <InputEdit type="date" name='checkin' value={newBooking.checkin} onChange={e => handleChange(e)} />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Check-Out</h4>
                <InputEdit type="date" name='checkout' value={newBooking.checkout} onChange={e => handleChange(e)} />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Special Request</h4>
                <select name='request' value={newBooking.request} onChange={e => handleChange(e)}>
                <option value="">Please select a special request</option>
                  {
                    requests.map(e => {
                      return (
                        <option value={e} key={e}>{e}</option>
                      )
                    })
                  }

                </select>
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Room Type</h4>
                <select name='room_type' value={newBooking.room_type} onChange={e => handleChange(e)}>
                <option value="">Please select room type</option>
                  <option value="Single Bed">Single Bed</option>
                  <option value="Double Bed">Double Bed</option>
                  <option value="Double Superior">Double Superior</option>
                  <option value="Suite">Suite</option>
                </select>
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Room Number</h4>
                <InputEdit type="number" name='number' value={newBooking.number} onChange={e => handleChange(e)} />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Photo</h4>
                <InputEdit type="text" name='photo' value={newBooking.photo} onChange={e => handleChange(e)} />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Status</h4>
                <select name='status' value={newBooking.status} onChange={e => handleChange(e)}>
                <option value="">Please select status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Checking-In">Checking-In</option>
                  <option value="Checking Out">Checking-Out</option>
                </select>
              </InputEditWrapper>

              <BtnEdit onClick={(e) => handleEdit(e)} modal='modal' >Edit Booking</BtnEdit>
            </div>

          </BoxEdit>
        </Modal>

      </DetailWrapper>

      <AlertComponent open={openAlert} setOpen={setOpenAlert} text='Booking updated' />

    </>
  )
}

export default Booking