import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle"
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../index.css";
import { Navigation } from "swiper";
import SwiperItem from './SwiperItem/SwiperItem';
import { reviewsData } from '../../data/reviewsData';
import { SwiperContainer } from './SwiperStyles';

const Swipers =() => {
    return (
        <SwiperContainer>

            <Swiper 
            navigation={true}
            modules={[Navigation]} className="mySwiper" slidesPerView={2}>
                {
                    reviewsData.map(e => {
                        return (
                            <SwiperSlide>
                                <SwiperItem id={e.id} review={e.review} date={e.date} hour={e.hour} name={e.name} email={e.email} telephone={e.telephone} matter={e.matter} archive={e.archive} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </SwiperContainer>

    );
};

export default Swipers