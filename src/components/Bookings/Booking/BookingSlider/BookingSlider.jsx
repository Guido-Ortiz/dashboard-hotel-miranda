import React from "react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import photo1 from '../../../../resources/room1.jpg';
import photo2 from '../../../../resources/room2.jpg';

import { SliderWrapper } from "./BookingSliderStyles";


const BookingSlider = () => {
    return (
        <SliderWrapper>
            <img src={photo2} alt='Room N2' />
        </SliderWrapper>
    )
}

export default BookingSlider