import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./common/NotFound";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
