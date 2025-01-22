import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import binsImg from "../assets/nutrition.png";
import { addFavorite, getAllFavorites } from "../Utils";
const CoffeeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [coffee, setCoffee] = useState({});
  const [isFavourite, setIsFavourite] = useState(false);
  // console.log(id);
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    const favourites = getAllFavorites();
    const isExist = favourites.find((item) => item.id == singleData.id);
    if (isExist) {
      setIsFavourite(true);
    }
  }, [id, data]);
  // console.log(data);

  const handleFavorite = (coffee) => {
    addFavorite(coffee);
    // getAllFavorites();
    setIsFavourite(true);
  };

  return (
    <div className="space-y-3 px-9">
      <h3 className="font-thin text-2xl">
        Coffee Details {coffee.description}
      </h3>
      <div className=" md:h-[500px] mx-auto">
        <img className="w-full h-full object-cover" src={coffee.image} alt="" />
      </div>
      <div className="flex justify-between">
        <div className="space-y-3">
          <h3 className="font-black">{coffee.name}</h3>
          <p className="text-base">-Popularity: {coffee.popularity}</p>
          <p className="text-base">-Rating: {coffee.rating}</p>
        </div>
        <div>
          <button
            disabled={isFavourite}
            onClick={() => handleFavorite(coffee)}
            className="btn-warning btn"
          >
            Add Favorite
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-black">Making Process : </span>{" "}
        <span>{coffee.making_process}</span>
      </div>
      <div>
        <img src={binsImg} alt="" />
      </div>
    </div>
  );
};

export default CoffeeDetails;
