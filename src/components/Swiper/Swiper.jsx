// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../index.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SwiperItem from './SwiperItem/SwiperItem';
import { reviewsData } from '../../data/reviewsData';
import { SwiperContainer } from './SwiperStyles';

export default () => {
    return (
        // <Swiper
        //     spaceBetween={30}
        //     slidesPerView={3}
        //     onSlideChange={() => console.log('slide change')}
        //     onSwiper={(swiper) => console.log(swiper)}
        // >
        // <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        //     {
        //         reviewsData.map(e => {
        //             return (
        //                 <SwiperSlide>
        //                     <SwiperItem id={e.id} review={e.review} date={e.date} hour={e.hour} name={e.name} email={e.email} telephone={e.telephone} matter={e.matter} archive={e.archive} />
        //                 </SwiperSlide>
        //             )
        //         })
        //     }
        //     {/* <SwiperSlide>
        //         1
        //     </SwiperSlide>
        //     <SwiperSlide>2</SwiperSlide>
        //     <SwiperSlide>3</SwiperSlide>
        //     <SwiperSlide>4</SwiperSlide> */}
        // </Swiper>
        <SwiperContainer>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={2}>
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