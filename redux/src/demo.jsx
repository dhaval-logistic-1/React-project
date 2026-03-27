import React  from "react";
import { useSelector } from "react-redux";

const demo = () => {
    const counter = useSelector((state) => state.counter.value);
  return (
    <div>
      <div className="h-3 w-full text-white bg-gray-800 flex items-center justify-center">
        <h1 className="text-red-500">Hello World {counter} </h1>
      </div>
    </div>
  );
};

export default demo;
