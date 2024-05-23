import PropTypes from 'prop-types';

const Heading = ({subtitle,title}) => {
    return (
        <div className="w-[40%] mx-auto text-center my-16 " >
            <p className="mb-3 font-bold text-[#D99904]">--- {subtitle} ---</p>
            <h1 className="text-4xl font-bold border-y-2 py-5 uppercase border-dashed ">{title}</h1>
            
        </div>
    );
};

Heading.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string
}

export default Heading;