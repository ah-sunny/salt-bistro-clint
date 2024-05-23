import { Helmet } from 'react-helmet-async';
import AllRecipe from "./all-recipe/AllRecipe";
import Banner from "./banner/Banner";
import Call from "./call/Call";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Menu from "./menu/Menu";
import Slider from "./slider/Slider";
import Testimonials from "./testimonial/Testimonials";

const Home = () => {
    return (
        <div className=" mb-16">
<Helmet>
    <title>salt bistro | Home</title>
</Helmet>

            <Banner></Banner>

            <Slider></Slider>
            <Hero></Hero>
            <Menu></Menu>
            <Call></Call>
            <AllRecipe></AllRecipe>
            <Featured></Featured>
            <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;