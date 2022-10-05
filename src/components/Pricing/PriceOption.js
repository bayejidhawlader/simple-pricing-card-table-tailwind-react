import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-indigo-300 m-3 rounded-md p-5">
      <div>
        <h3>
          <span className="text-4xl text-white font-bold">{option.price} </span>{" "}
          <span className="text-2xl text-gray-100">/month</span>
        </h3>
        <p className="text-3xl p-2">{option.name}</p>
      </div>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="bg-purple-200 px-5 py-3 text-xl font-semibold rounded my-4">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
