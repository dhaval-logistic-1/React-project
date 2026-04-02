import React, { useEffect, useLayoutEffect, useRef } from "react";

const App = () => {
  const boxRef = useRef(null);


  useEffect(() => {
    
  console.log("Page Run");
  
    
  }, [])
  

  useLayoutEffect(() => {

    console.log("Run UseLayoutEffect");
    
    const e1 = boxRef.current;

    const width = e1.offsetWidth;

    e1.style.transform = `translateX(${width}px)`;

  }, []);

  return (
    <>

    
    <div
      ref={boxRef}
      style={{ padding: "30px", background: "#146fcf", transition: "3s" }}
    >
      <h1>Animated Box!</h1>
    </div>

    
    </>
    
  );
};

export default App;
