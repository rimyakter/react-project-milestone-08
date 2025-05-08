import React from "react";
import { Check } from "lucide-react";

const Feature = ({ feature }) => {
  return (
    <div className="mt-3">
      <h2 className="flex mr-2 text-xs">
        <Check size={15} />
        {feature}
      </h2>
    </div>
  );
};

export default Feature;
