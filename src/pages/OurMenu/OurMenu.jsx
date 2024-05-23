import { Helmet } from "react-helmet-async";
import menuCover from "../../assets/menu/banner3.jpg";
import dessertCover from "../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../assets/menu/pizza-bg.jpg";
import saladCover from "../../assets/menu/salad-bg.jpg";
import soupCover from "../../assets/menu/soup-bg.jpg";
import Heading from "../../sharded/Heading";
import SectionCover from "../../sharded/SectionCover";
import useMenu from "../hooks/useMenu";
import Category from "./Category";

const OurMenu = () => {
    const [menu] = useMenu()
    const Offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    // const drinks = menu.filter(item => item.category === 'drinks')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>salt bistro | Menu</title>
            </Helmet>
            <SectionCover
                img={menuCover}
                title={'our menu'}
                subTitle={'Would you like to try a dish ?'}
            ></SectionCover>

            <div>
                <Heading
                    subtitle={"Don't miss"}
                    title={'today offer '}>
                </Heading>
            </div>
            <Category items={Offered} ></Category>
            {/* desserts */}
            <SectionCover
                img={dessertCover}
                title={'desserts'}
                subTitle={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloribus neque minus dolores odit praesentium saepe recusandae esse'}
            ></SectionCover>
            <Category items={desserts} ></Category>
            {/* pizza */}
            <SectionCover
                img={pizzaCover}
                title={'pizza'}
                subTitle={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloribus neque minus dolores odit praesentium saepe recusandae esse'}
            ></SectionCover>
            <Category items={pizzas} ></Category>
            {/* salads */}
            <SectionCover
                img={saladCover}
                title={'salads'}
                subTitle={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloribus neque minus dolores odit praesentium saepe recusandae esse'}
            ></SectionCover>
            <Category items={salad} ></Category>
            {/* soup */}
            <SectionCover
                img={soupCover}
                title={'soups'}
                subTitle={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem doloribus neque minus dolores odit praesentium saepe recusandae esse'}
            ></SectionCover>
            <Category items={soup} ></Category>


        </div>
    );
};

export default OurMenu;