import PropTypes from 'prop-types';

const ShowMenu = ({item}) => {
    const { name, image,price,recipe} = item
    return (
        <div className="flex gap-5">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[90px]" src={image} alt="" />
            <div>
                <h1 className="text-xl font-bold">{name}-----------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]" >${price}</p>
        </div>
    );
};
ShowMenu.propTypes = {
    item: PropTypes.object,
}


export default ShowMenu;