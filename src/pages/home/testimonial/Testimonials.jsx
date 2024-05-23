// Import Swiper React components
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import { ImQuotesLeft } from "react-icons/im";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../../../sharded/Heading';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
             <Heading
                subtitle={'What our clint say'}
                title={'Testimonials'}>
            </Heading> 

            <section className="my-4">
            

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 ">
                        <Rating style={{ maxWidth: 130 }} value={review.rating} readOnly />
                        <ImQuotesLeft className='my-4 text-8xl' ></ImQuotesLeft>
                            <p className="py-2">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
            
        </div>
    );
};

export default Testimonials;