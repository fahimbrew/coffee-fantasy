import PropTypes from "prop-types";

const Heading = ({ title, subTitle }) => {
  return (
    <div className="text-center my-3 space-y-3">
      <h2 className="md:text-4xl text-2xl font-thin">{title}</h2>
      <p className="text-gray-600 font-thin">{subTitle}</p>
    </div>
  );
};
Heading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
export default Heading;
