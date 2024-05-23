import { Helmet } from "react-helmet-async";
import shopCover from "../../assets/shop/banner2.jpg";
import SectionCover from "../../sharded/SectionCover";

const OurShop = () => {
    return (
        <div>
             <Helmet>
                <title>salt bistro | Our shop</title>
            </Helmet>
            <SectionCover
                img={shopCover}
                title={'our shop'}
                subTitle={'Would you like to try a dish ?'}
            ></SectionCover>
            
        </div>
    );
};

export default OurShop;