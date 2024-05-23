import PropTypes from 'prop-types';
import ShowMenu from "../home/menu/ShowMenu";


const Category = ({ items }) => {
    return (
        <div className='my-20'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                {
                    items.map((item, idx) => <ShowMenu key={idx}
                        item={item}
                    ></ShowMenu>)
                }
            </div>
           <div className='mx-auto text-center'>
           <button className=" btn btn-outline border-b-4 border-0 font-bold mt-7 text-lg uppercase">Order Your Favourite food</button>
           </div>
        </div>
    );
};
Category.propTypes = {
    items: PropTypes.array,
}

export default Category;