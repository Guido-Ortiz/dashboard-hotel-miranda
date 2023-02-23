import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import photo1 from '../../../../resources/room1.jpg';
import photo2 from '../../../../resources/room2.jpg';
import { SwiperContainer } from "../../../Swiper/SwiperStyles";
import { SliderWrapper } from "./BookingSliderStyles";
import { reviewsData } from "../../../../data/reviewsData";
import SwiperItem from "../../../Swiper/SwiperItem/SwiperItem";

const BookingSlider = () => {
    return (
        <SliderWrapper>
            <img src={photo2} alt='Room N2' />
        </SliderWrapper>
    )
}

export default BookingSlider