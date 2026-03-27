import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../../redux/features/textfieldSlice";

const ChaildTextField = () => {
  
  const dispatch = useDispatch();
  const text = useSelector((state) => state.textfield.value);

  const textChange = (e) => {
    dispatch(updateValue(e.target.value));
  };

  return (
    <div className="flex flex-col gap-2 m-10">
      <input
        type="text"
        placeholder="Enter Text"
        className="border-gray border-2 p-2 font-bold text-xl"
        value={text}
        onChange={textChange}
      />
    </div>
  );
};

export default ChaildTextField;
