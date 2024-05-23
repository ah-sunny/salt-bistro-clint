import PropTypes from 'prop-types';

const ShowAll = ({ item }) => {
    const { name, image, recipe } = item
    return (
        <div>
            <div className="card bg-base-100 flex shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className=''>{recipe}</p>
                    <div className="card-actions">
                    <button className=" btn-outline border-b-8 border-0 btn text-[#bb8506] font-semibold uppercase" >Add to card </button>
                    </div>
                </div>
            </div>

        </div>
    );
};
ShowAll.propTypes = {
    item: PropTypes.object,
}

export default ShowAll;