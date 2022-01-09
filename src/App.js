import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./common/NotFound";
import Main from "./components/Main";

const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");

const App = () => {
  useEffect(() => {
    showLoader();
    addClass();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Main />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
