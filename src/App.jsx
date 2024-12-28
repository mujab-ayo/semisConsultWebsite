import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Page/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="font-Roboto relative dark:bg-gray-950 bg-white dark:text-white overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
