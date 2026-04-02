import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WithUseMemo from "./WithUseMemo.jsx";
import Perente from "./reactmemoDemo/Perente.jsx";

createRoot(document.getElementById("root")).render(
  // <App />
  //  <WithUseMemo />
  <Perente/>
);
