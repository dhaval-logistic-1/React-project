import React from "react";

const Chaild = React.memo(({ name }) => {

  console.log("Chaild Re-render");

  return <div>
    <h1>This is Chaild Componet {name}</h1>
  </div>;

});

export default Chaild;
