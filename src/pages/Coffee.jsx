import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffee = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  const handleSort = (sortBy) => {
    if (sortBy == "popularity") {
      // sort by popularity
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy == "rating") {
      // sort by rating
      const sorted = [...data].sort((a, b) => (b.rating = a.rating));
      setCoffees(sorted);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          Sort Coffee&apos;s By Popularity and Rating -{" "}
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn-warning btn"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn-warning btn"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 p-9">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
