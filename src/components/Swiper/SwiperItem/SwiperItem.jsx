import React from 'react';
import { SliderItemPeople, SliderItemWrapper } from './SwiperItemStyle';

const SwiperItem = ({ id, review, date, hour, name, email, telephone, matter, archive }) => {
  
  return (
    <SliderItemWrapper>
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
  )
}

export default SwiperItem