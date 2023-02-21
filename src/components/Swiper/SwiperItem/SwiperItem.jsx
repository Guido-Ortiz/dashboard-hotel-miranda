import React, { useState } from 'react';
// import Popup from 'reactjs-popup';
import { ClosePopup, SliderItemPeople, SliderItemWrapper, StyledPopup } from './SwiperItemStyle';

const SwiperItem = ({ id, review, date, hour, name, email, telephone, matter, archive }) => {

  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

  return (
    <>
      <SliderItemWrapper onClick={() => setOpen(prev => !prev)}>
        <h4>{matter}</h4>
        <p>{review}</p>
        <SliderItemPeople>
          <div>
            <h5>{name}</h5>
            <h5>{email}</h5>
          </div>
          <h6>Posted on {date}</h6>
        </SliderItemPeople>
      </SliderItemWrapper>

      <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <ClosePopup className="close" onClick={closeModal}>
            &times;
          </ClosePopup>
          <h4>{matter}</h4>
          <p>{review}</p>
          <h5>{name}</h5>
          <h5>{email}</h5>
          <h6>{date}</h6>
        </div>
      </StyledPopup>
    </>
  )
}

export default SwiperItem