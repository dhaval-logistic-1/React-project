import React, { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  // console.log(props);
   const username = "Dhaval Parmar";

  return (
    <div>
      <DataContext.Provider value={username}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default UserContext;
