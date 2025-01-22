import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";

const Card = ({ coffee, handleRemove }) => {
  //   console.log(coffee);
  const { pathname } = useLocation();
  const { name, id, category, image, type, origin, rating, popularity } =
    coffee;
  return (
    <div className="flex relative">
      <Link
        to={`/coffees/${id}`}
        className="cursor-pointer hover:scale-105 transition-all"
      >
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
        <div></div>
      </Link>
      {pathname === "/dashboard" && (
        <p className="absolute -top-5 -right-5">
          <button
            onClick={() => handleRemove(id)}
            className="btn btn-warning rounded-full"
          >
            <MdOutlineDeleteForever className="text-3xl"></MdOutlineDeleteForever>
          </button>
        </p>
      )}
    </div>
  );
};
Card.propTypes = {
  coffee: PropTypes.object,
};
export default Card;
