import React from "react";
import PriceOption from "./PriceOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Everythink on Free",
        "Everything on Premium",
        "Unnecessery Feature",
        "Will never Use Feature",
        "Hudai Feature",
        "Ajaira Features",
      ],
    },

    {
      id: 2,
      name: "Medium",
      price: 55.99,
      features: [
        "Awesome Feature",
        "Extra Feature",
        "Unnecessery Feature",
        "Will never Use Feature",
        "Hudai Feature",
        "Ajaira Features",
      ],
    },

    {
      id: 3,
      name: "Premium",
      price: 99.99,
      features: [
        "Awesome Feature",
        "Extra Feature",
        "Unnecessery Feature",
        "Will never Use Feature",
        "Hudai Feature",
        "Ajaira Features",
      ],
    },

    {
      id: 4,
      name: "Platinum",
      price: 129.99,
      features: [
        "All Premium Features",
        "Extra Feature",
        "All Unnecessery Feature",
        "Will never Use Feature",
        "Hudai Feature",
        "Ajaira Features",
      ],
    },
  ];
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-bold bg-indigo-300 p-12 text-white">
        Best Deal of the Town
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
