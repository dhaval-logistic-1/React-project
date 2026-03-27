// import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../redux/features/textfieldSlice";
import ChaildTextField from "./textfield/ChaildTextField";

const TextField = () => {

  const dispatch = useDispatch();
  const text = useSelector((state) => state.textfield.value);

  const textChange = (e) => {
    dispatch(updateValue(e.target.value));
  }
 

  return (
    <>
      <div className="flex flex-col gap-2 m-10">
        <input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={textChange}
          id=""
          className="border-gray border-2 p-2 font-bold text-xl"
        />
      </div>
      <h1 className="text-3xl font-bold m-10">
        Duplicating state in child component 
      </h1>
      <ChaildTextField/>
    </>
  );
};

export default TextField;
