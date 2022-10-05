import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <CheckCircleIcon className="h-6 w-6 text-purple-200" />
        <p className="">{feature}</p>
      </div>
    </div>
  );
};

export default Feature;
