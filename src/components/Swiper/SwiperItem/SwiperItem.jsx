import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { BoxSwiper, SliderItemPeople, SliderItemWrapper } from './SwiperItemStyle';

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

      

      <Modal open={open} onClose={closeModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <BoxSwiper>
          <h4>{matter}</h4>
          <p>{review}</p>
          <h5>{name}</h5>
          <h5>{email}</h5>
          <h6>{date}</h6>
        </BoxSwiper>
      </Modal>
    </>
  )
}

export default SwiperItem