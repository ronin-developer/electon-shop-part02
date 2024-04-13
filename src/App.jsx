import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { Outlet } from "react-router-dom";

import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
