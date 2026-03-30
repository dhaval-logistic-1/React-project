import React from "react";



import { useDispatch, useSelector } from "react-redux";
import { setcheckboxOption } from "../redux/features/checkboxSlice";
import ChaildCheckBox from "./checkBox/ChaildCheckBox";


const Checkbox = () => {

  const dispatch = useDispatch();
  const selectedOptions = useSelector((state) => state.checkbox.selectedOptions );

  const checkboxChange = (e) => {
    dispatch(setcheckboxOption(Number(e.target.value)));
  };

  return (
    <>
      <div className="m-10">
        <input
          type="checkbox"
          value={1}
          checked={selectedOptions.includes(1)}
          onChange={checkboxChange}
        />
        Option 1
        <br />

        <input
          type="checkbox"
          value={2}
          checked={selectedOptions.includes(2)}
          onChange={checkboxChange}
        />
        Option 2
        <br />

        <input
          type="checkbox"
          value={3}
          checked={selectedOptions.includes(3)}
          onChange={checkboxChange}
        />
        Option 3
      </div>

      
      <h1 className="text-3xl font-bold m-10">
        Duplicating state in child component 
        {
          selectedOptions.map(data => ( data ))
        }

      </h1>

      <ChaildCheckBox/>
    </>
  );
};

export default Checkbox;