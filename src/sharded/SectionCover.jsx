import PropTypes from 'prop-types';

const SectionCover = ({img,title,subTitle}) => {
    return (
        <div className="">
            <div className="hero h-[500px] rounded-md  bg-no-repeat" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="text-center w-[60%] p-16 rounded-md bg-black bg-opacity-50 text-white ">
                    <div className=" ">
                        <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
SectionCover.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default SectionCover;