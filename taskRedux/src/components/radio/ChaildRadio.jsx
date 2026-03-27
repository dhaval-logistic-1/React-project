import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/features/radioSlice";

const ChaildRadio = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.radio.selectedOption);

  const radioChange = (e) => {
    dispatch(setOption(Number(e.target.value)));
  };

  return (
    <div className="gap-5 m-10 ">
      <input
        type="radio"
        value={1}
        checked={selected === 1}
        onChange={radioChange}
        className="mr-2"
      />
      <label>option 1</label>
      <br />

      <input
        type="radio"
        value={2}
        checked={selected === 2}
        onChange={radioChange}
        className="mr-2"
      />
      <label>option 2</label>
      <br />

      <input
        type="radio"
        value={3}
        checked={selected === 3}
        onChange={radioChange}
        className="mr-2"
      />
      <label>option 3</label>
    </div>
  );
};

export default ChaildRadio;