import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  //   console.log(coffee);
  const { name, id, category, image, type, origin, rating, popularity } =
    coffee;
  return (
    <Link className="cursor-pointer hover:scale-105 transition-all">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full md:h-96"
            src={image}
            alt={`picture of ${name}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Category : {category}</p>
          <p>Type : {type}</p>
          <p>Origin : {origin}</p>
          <p>Rating : {rating}</p>
          <p>Popular : {popularity}</p>
        </div>
      </div>
    </Link>
  );
};
Card.propTypes = {
  coffee: PropTypes.object,
};
export default Card;
