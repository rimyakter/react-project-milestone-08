import React from "react";
import Feature from "./Feature";

const PricingCard = ({ data }) => {
  const { id, name, price, description, features } = data;
  return (
    <div className="bg-blue-950 text-white p-6 rounded m-4 flex flex-col">
      <h1 className="text-6xl">{name}</h1>
      <h2 className="text-3xl">{price}</h2>
      <div className=" flex-1">
        <p className="mt-4 ">{description}</p>
        {features.map((feature) => (
          <Feature feature={feature}></Feature>
        ))}
      </div>
      <button className="btn w-full mt-8 shadow-none ">Subscribe</button>
    </div>
  );
};

export default PricingCard;
