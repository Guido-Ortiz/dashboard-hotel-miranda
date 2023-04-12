import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle"
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../index.css";
import { Navigation } from "swiper";
import SwiperItem from './SwiperItem/SwiperItem';
import { SwiperContainer } from './SwiperStyles';

const Swipers = ({ data }) => {
    return (
        <SwiperContainer>

            <Swiper 
            navigation={true}
            modules={[Navigation]} className="mySwiper" slidesPerView={2}>
                {
                    data?.map(e => {
                        return (
                            <SwiperSlide>
                                <SwiperItem id={e._id} comment={e.comment} date={e.date} name={e.name} email={e.email} phone={e.phone} issue={e.issue} archive={e.archive} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </SwiperContainer>

    );
};

export default Swipers