import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  //   console.log(categories);
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((category) => (
          <NavLink
            key={category.category}
            to={`category/${category.category}`}
            role="tab"
            className={({ isActive }) => `tab ${isActive ? "tab-active" : ""}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
