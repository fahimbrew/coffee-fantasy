import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites, removeFavourite } from "../Utils";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favourites = getAllFavorites();
    setCoffees(favourites);
  }, []);
  const handleRemove = (id) => {
    removeFavourite(id);
    const favourites = getAllFavorites();
    setCoffees(favourites);
  };
  return (
    <div className="p-6">
      <Heading
        title={"Welcome to Dashboard"}
        subTitle={
          "Manage coffees you have saved before.You can removed from here as well"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
        {coffees.map((coffee) => (
          <Card
            key={coffee.id}
            handleRemove={handleRemove}
            coffee={coffee}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
