import React from "react";
import Global from "./components/Global";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Global>
                <Home />
              </Global>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
