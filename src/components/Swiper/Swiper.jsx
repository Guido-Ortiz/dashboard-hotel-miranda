// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SwiperItem from './SwiperItem/SwiperItem';
import { reviewsData } from '../../data/reviewsData';

export default () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                reviewsData.map(e => {
                    return (
                        <SwiperSlide>
                            <SwiperItem id={e.id} review={e.review} date={e.date} hour={e.hour} name={e.name} email={e.email} telephone={e.telephone} matter={e.matter} archive={e.archive} />
                        </SwiperSlide>
                    )
                })
            }
            {/* <SwiperSlide>
                1
            </SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide> */}
        </Swiper>
    );
};