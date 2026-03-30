import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Tabs from "./Tabs";
import TextField from "./TextField";
import CheckBox from "./CheckBox";
import Radio from "./Radio";
import Select from "./Select";

import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";
import Tab3 from "./Tabs/Tab3";
import DataPrint from "./DataPrint";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex gap-5 bg-gray-500 p-5 text-white font-bold">
        <Link to="/tabs">Tabs</Link>
        <Link to="/textfield">TextField</Link>
        <Link to="/select">Select</Link>
        <Link to="/checkbox">CheckBox</Link>
        <Link to="/radio">Radio</Link>
        <Link to="/dataprint">DataPrint</Link>
      </div>

      

      <Routes>
        <Route path="/tabs" element={<Tabs />}>
          <Route path="tab1" element={<Tab1 />} />
          <Route path="tab2" element={<Tab2 />} />
          <Route path="tab3" element={<Tab3 />} />
        </Route>

        <Route path="/textfield" element={<TextField />} />
        <Route path="/select" element={<Select />} />
        <Route path="/checkbox" element={<CheckBox />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/dataprint" element={<DataPrint />} />
      </Routes>
    </>
  );
};

export default Navbar;
