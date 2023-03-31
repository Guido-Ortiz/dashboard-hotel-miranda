import React, { useEffect, useState } from 'react';
import { BoxEdit, BtnEdit, CheckWapper, DetailWrapper, FacilitiesWrapper, FacilityChip, GuestContact, GuestData, GuestWrapper, InputEdit, InputEditWrapper, RoomInfoWrapper, RoomWrapper } from './BookingStyles';
import guest from '../../../resources/p1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Email, Phone } from '@mui/icons-material';
import { useParams } from 'react-router';
import { editBooking, getBookingDetail } from '../../../redux/actions/actions';

import { Modal } from '@mui/material';
import BookingSlider from './BookingSlider/BookingSlider';

const Booking = () => {

  const { booking_id } = useParams()

  const dispatch = useDispatch()

  const sidebar = useSelector(state => state.sidebar)
  const detail = useSelector(state => state.bookings.detail)

  useEffect(() => {
    dispatch(getBookingDetail(booking_id))
  }, [dispatch, booking_id])

  const requests = ['Early Check-In', 'Late Check-Out', 'None']

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const handleEdit = () => {
    dispatch(editBooking({ booking_id, newBooking }))
    setOpen(false)
  }

  const handleChange = e => {
    setNewBooking({
      ...newBooking,
      [e.target.name]: e.target.value
    })
  }

  const [open, setOpen] = useState(false)

  const [newBooking, setNewBooking] = useState({
    name: '',
    status: '',
    number: ''
  })

  return (
    <>
      {/* <BookingDetail /> */}
      <DetailWrapper sidebar={sidebar}>

        <div>
          <GuestWrapper>
            <img src={guest} alt='Guest' />
            <GuestData>
              <h2>Guest</h2>
              <h4>#123456</h4>
              <GuestContact>
                <div>
                  <Phone />
                  <h3>Phone</h3>
                </div>
                <div>
                  <Email />
                  <h3>E-mail</h3>
                </div>
                <BtnEdit onClick={handleOpen}>Edit Booking</BtnEdit>

              </GuestContact>
            </GuestData>
          </GuestWrapper>

          <CheckWapper>
            <div>
              <h5>Check-In</h5>
              <h4>October 30th, 2020 | 08:23AM</h4>
            </div>
            <div>
              <h5>Check-In</h5>
              <h4>October 30th, 2020 | 08:23AM</h4>
            </div>
          </CheckWapper>

          <RoomInfoWrapper>
            <div>
              <h5>Room info</h5>
              <h2>Deluxe Z - 002424</h2>
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
          <h2>Bed Room</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nostrum quos itaque dignissimos? At culpa soluta deleniti quibusdam officiis similique recusandae officia expedita quam est eligendi aspernatur, sit, impedit perferendis.</p>
        </RoomWrapper>



        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <BoxEdit>

            <h3>Edit Booking {booking_id}</h3>

            <div>
              <InputEditWrapper>
                <h4>Full Name</h4>
                <InputEdit type="text" placeholder='Guest name' value={newBooking.name} name='name' onChange={e => handleChange(e)} />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>E-mail</h4>
                <InputEdit type="text" placeholder='email' />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Phone</h4>
                <InputEdit type="text" placeholder='Phone' />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Order</h4>
                <InputEdit type="date" />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Check-In</h4>
                <InputEdit type="date" />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Check-Out</h4>
                <InputEdit type="date" />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Special Request</h4>
                <select>
                  {/* <option value="a">Please select request</option> */}
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
                <select>
                  {/* <option value="">Select a room type</option> */}
                  <option value="single">Single Bed</option>
                  <option value="double">Double Bed</option>
                  <option value="sup">Double Superior</option>
                  <option value="suite">Suite</option>
                </select>
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Room Number</h4>
                <InputEdit type="number" />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Photo</h4>
                <InputEdit type="text" />
              </InputEditWrapper>
              <InputEditWrapper>
                <h4>Status</h4>
                <select>
                  <option value="">In Progress</option>
                  <option value="">Checking-In</option>
                  <option value="">Checking-Out</option>
                </select>
              </InputEditWrapper>

            <BtnEdit onClick={handleEdit} modal='modal' >Edit Booking</BtnEdit>
            </div>


          </BoxEdit>
        </Modal>

      </DetailWrapper>
    </>
  )
}

export default Booking