import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <h1>Get Our MemberShip</h1>
      <div className="grid md:grid-cols-3 grid-cols-1">
        {pricingData.map((data) => (
          <PricingCard key={data.id} data={data}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
