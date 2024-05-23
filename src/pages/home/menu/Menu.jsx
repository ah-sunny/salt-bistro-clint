import Heading from "../../../sharded/Heading";
import useMenu from "../../hooks/useMenu";
import ShowMenu from "./ShowMenu";


const Menu = () => {
// const [menu , setMenu] = useState([])
const [menu] = useMenu()
const popularItems = menu.filter(item => item.category ==='popular')


    return (
        <div>
             <Heading
                subtitle={'Check it out'}
                title={'FROM OUR MENU '}>
            </Heading>

            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                    {
                        popularItems.map((item,idx)=> <ShowMenu key={idx} 
                        item={item}
                        ></ShowMenu> )
                    }
                </div>
             <div className="mx-auto text-center mt-7">
                <button className="btn-outline border-b-8 border-0 btn font-semibold uppercase" >View full manu</button>
             </div>

            </section>
        </div>
    );
};

export default Menu;