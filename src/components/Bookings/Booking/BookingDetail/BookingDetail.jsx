import React, { useEffect } from 'react';
import { CheckWapper, DetailWrapper, FacilitiesWrapper, FacilityChip, GuestContact, GuestData, GuestWrapper, RoomInfoWrapper, RoomWrapper } from './BookingDetailStyles';
import guest from '../../../../resources/p1.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Email, Phone } from '@mui/icons-material';
import { useParams } from 'react-router';
import { getBookingDetail } from '../../../../redux/actions/actions';

const BookingDetail = () => {

  const { booking_id } = useParams()
  // console.log(booking_id)

  const dispatch = useDispatch()

  const sidebar = useSelector(state => state.sidebar)
  const detail = useSelector(state => state.bookings.detail[0])

  useEffect(() => {
    dispatch(getBookingDetail(booking_id))
  }, [dispatch, booking_id])

  return (
    <DetailWrapper sidebar={sidebar}>

      <div>
        <GuestWrapper>
            <img src={guest} alt='Guest' />
            <GuestData>
              <h2>{detail.client}</h2>
              <h4>#{detail.id}</h4>
              <GuestContact>
                <div>
                  <Phone/>
                  <h3>{detail.email}</h3>
                </div>
                <div>
                  <Email />
                  <h3>{detail.telephone}</h3>
                </div>
                
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

      <RoomWrapper>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nostrum quos itaque dignissimos? At culpa soluta deleniti quibusdam officiis similique recusandae officia expedita quam est eligendi aspernatur, sit, impedit perferendis.</RoomWrapper>

    </DetailWrapper>
    // </RightWrapp>
  )
}

export default BookingDetail