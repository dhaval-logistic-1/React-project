// import React from 'react'

// const App = () => {
//   return (
//     <div className="h-screen w-full text-white bg-gray-800 flex items-center justify-center">
//       <h1 className='text-red-500'>Hello World</h1>
//     </div>
//   )
// }

// export default App



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice";
import Demo from "./demo";

const App = () => {

  const dispatch  = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  const [number, setNumber] = useState();

  return (
    <div>
      <h1>Welcome to React!</h1>
      <h1>Counter: {counter}  </h1>
      <button onClick={() => { dispatch(increment())}}>Increment</button>
      <button onClick={() => { dispatch(decrement())}}>Decrement</button>
      <input type="number" placeholder="Enter amount" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => { dispatch(incrementByAmount(number))}}>Increment By Amount</button>
      <Demo/>

    </div>
  );
};

export default App;
