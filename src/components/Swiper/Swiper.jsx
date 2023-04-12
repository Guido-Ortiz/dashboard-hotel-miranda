import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle"
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../index.css";
import { Navigation } from "swiper";
import SwiperItem from './SwiperItem/SwiperItem';
import { SwiperContainer } from './SwiperStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/features/reviewsSlice';

const Swipers =() => {
    const dispatch = useDispatch()
    const reviews = useSelector(state => state.reviews.reviews.data)
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])
    return (
        <SwiperContainer>

            <Swiper 
            navigation={true}
            modules={[Navigation]} className="mySwiper" slidesPerView={2}>
                {
                    reviews?.map(e => {
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