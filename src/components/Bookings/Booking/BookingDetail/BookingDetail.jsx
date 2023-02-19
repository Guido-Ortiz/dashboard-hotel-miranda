import React from 'react';
import { CheckWapper, DetailWrapper, FacilitiesWrapper, FacilityChip, GuestContact, GuestData, GuestWrapper, RoomInfoWrapper, RoomWrapper } from './BookingDetailStyles';
import guest from '../../../../resources/p1.jpg';
import { useSelector } from 'react-redux';
import { Email, Phone } from '@mui/icons-material';

const BookingDetail = () => {
  const sidebar = useSelector(state => state.sidebar)

  return (
    <DetailWrapper sidebar={sidebar}>

      <div>
        <GuestWrapper>
            <img src={guest} alt='Guest' />
            <GuestData>
              <h2>Rory Mclroy</h2>
              <h4>#123456</h4>
              <GuestContact>
                <div>
                  <Phone/>
                  <h3>guido@gmail.com</h3>
                </div>
                <div>
                  <Email />
                  <h3>12345678</h3>
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