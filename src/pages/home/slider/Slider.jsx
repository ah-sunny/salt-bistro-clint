// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Slide1 from '../../../assets/home/slide1.jpg';
import Slide2 from '../../../assets/home/slide2.jpg';
import Slide3 from '../../../assets/home/slide3.jpg';
import Slide4 from '../../../assets/home/slide4.jpg';
import Slide5 from '../../../assets/home/slide5.jpg';
import Heading from '../../../sharded/Heading';



const Slider = () => {
    return (
        <div>
            <Heading
                subtitle={'From 11:00am to 10:00pm'}
                title={'ORDER ONLINE '}>
            </Heading>

            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-7  "
            >
                <SwiperSlide>
                    <img src={Slide1} className='rounded-xl  ' />
                    <h1 className='uppercase font-bold text-xl text-center -mt-10 text-white  '>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide2} className='rounded-xl  ' />
                    <h1 className='uppercase font-bold text-xl text-center -mt-10 text-white  '>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide3} className='rounded-xl  ' />
                    <h1 className='uppercase font-bold text-xl text-center -mt-10 text-white  '>Pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide4} className='rounded-xl  ' />
                    <h1 className='uppercase font-bold text-xl text-center -mt-10 text-white  '>Deserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide5} className='rounded-xl  ' />
                    <h1 className='uppercase font-bold text-xl text-center -mt-10 text-white  '>Salads</h1>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Slider;