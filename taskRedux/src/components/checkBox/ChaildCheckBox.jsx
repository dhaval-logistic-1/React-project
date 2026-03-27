import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setcheckboxOption } from "../../redux/features/checkboxSlice";

const ChaildCheckBox = () => {
  const dispatch = useDispatch();

  const selectedOptions = useSelector(
    (state) => state.checkbox.selectedOptions
  );

  const handleChange = (e) => {
    dispatch(setcheckboxOption(Number(e.target.value)));
  };

  return (
    <div className="m-10">
     
      <input
        type="checkbox"
        value={1}
        checked={selectedOptions.includes(1)}
        onChange={handleChange}
      />
      Option 1
      <br />

      <input
        type="checkbox"
        value={2}
        checked={selectedOptions.includes(2)}
        onChange={handleChange}
      />
      Option 2
      <br />

      <input
        type="checkbox"
        value={3}
        checked={selectedOptions.includes(3)}
        onChange={handleChange}
      />
      Option 3
    </div>
  );
};

export default ChaildCheckBox;