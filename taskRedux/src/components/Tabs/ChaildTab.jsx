import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTab } from "../../redux/features/tabSlice";

const ChaildTab = () => {

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.tabValue);

  const tabClick = (tab) => {
    dispatch(setTab(tab));
  };

  return (
    <>
      <div className="navbar flex gap-5 bg-gray-800 p-5 text-white font-bold m-10">
        <Link to="tab1" onClick={() => tabClick("tab1")}>
          Tab1
        </Link>
        <Link to="tab2" onClick={() => tabClick("tab2")}>
          Tab2
        </Link>
        <Link to="tab3" onClick={() => tabClick("tab3")}>
          Tab3
        </Link>
      </div>
      <div className="border-2 border-gray-800 p-5 m-10">
        <h1 className="text-xl font-semibold ">{activeTab}</h1>
      </div>
    </>
  );
};

export default ChaildTab;
