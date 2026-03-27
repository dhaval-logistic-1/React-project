import React from "react";
import ChaildRadio from "./radio/ChaildRadio";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../redux/features/radioSlice";

const Radio = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.radio.selectedOption);

  const radioChange = (e) => {
    dispatch(setOption(Number(e.target.value)));
  };

  return (
    <>
      <div className=" gap-5 m-10">
        <input
          type="radio"
          value={1}
          checked={selectedOption === 1}
          onChange={radioChange}
          className="mr-2"
        />
        <label htmlFor="name">option 1</label>
        <br />
        <input
          type="radio"
          value={2}
          checked={selectedOption === 2}
          onChange={radioChange}
          className="mr-2"
        />
        <label htmlFor="name">option 2</label>
        <br />
        <input
          type="radio"
          value={3}
          checked={selectedOption === 3}
          onChange={radioChange}
          className="mr-2"
        />
        <label htmlFor="name">option 3</label>
      </div>
      <h1 className="text-3xl font-bold m-10">
        Duplicating state in child component 
      </h1>
      <ChaildRadio />
    </>
  );
};

export default Radio;
