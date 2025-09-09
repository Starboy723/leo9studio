import { Routes,Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar.jsx";
import Services from "./components/Services.jsx";
import services from "./utils/services.js";

const HomePage=React.lazy(()=>import("./pages/HomePage.jsx"));

const App=()=>{

  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<React.Suspense><HomePage/></React.Suspense>}></Route>
    </Routes>
    </div>
  )
}

export default App;
