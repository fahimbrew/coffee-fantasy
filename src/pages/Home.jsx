import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Heading
        title={"Browse Coffee By Category"}
        subTitle={
          "You will get the finest blend of coffee powder powered by Coffee Mania."
        }
      />
      {/* Categories Tab section */}
      <Categories categories={categories} />
      {/* Nested Dynamic component */}
      <Outlet />
    </div>
  );
};

export default Home;
