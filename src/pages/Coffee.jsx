import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffee = () => {
  const data = useLoaderData();
  return (
    <div className="grid md:grid-cols-3 gap-5 p-9">
      {data.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
  );
};

export default Coffee;
