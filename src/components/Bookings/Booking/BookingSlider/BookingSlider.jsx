import React from "react";
import "swiper/css";
import "swiper/css/navigation";
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