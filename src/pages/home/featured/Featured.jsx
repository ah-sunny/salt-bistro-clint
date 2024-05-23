import featuredImage from '../../../assets/home/featured.jpg';
import Heading from '../../../sharded/Heading';

const Featured = () => {
    return (
        <div className="my-28 ">
            <div className=" bg-featured_bg bg-cover bg-opacity-95 bg-fixed flex items-center rounded-md "  >
                <div className='bg-black bg-opacity-45 text-white'>
                <Heading
                subtitle={'Check it out'}
                title={'FROM OUR MENU '}>
            </Heading>

                    <div className="text-center mx-auto w-[70%] pb-20 flex gap-10 justify-center items-center rounded-xl">
                        <div><img className='rounded-xl' src={featuredImage} alt="" /></div>
                        <div className='text-white text-left '>
                            <p>May 23, 2024</p>
                            <h1 className='font-bold text-xl uppercase'>Where can i get some ?</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore assumenda perspiciatis voluptatibus ea tempora adipisci nisi suscipit, ad quod minima doloribus molestias, officia ullam optio delectus praesentium eveniet cumque impedit.</p>
                            <button className="btn-outline border-b-4 border-0 btn font-semibold text-white mt-4 uppercase" >read more</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;