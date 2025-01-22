import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffee = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          Sort Coffee&apos;s By Popularity and Rating -{" "}
        </h1>
        <div className="flex gap-4">
          <button className="btn-warning btn">Sort By Popularity</button>
          <button className="btn-warning btn">Sort By Rating</button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 p-9">
        {data.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
