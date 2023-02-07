import React from "react";
import Global from "./components/Global";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";

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
          <Route
            path="/users"
            element={
              <Global>
                <UserList/>
              </Global>
            }
          />
        </Routes>
        <Routes>
          <Route
          path="/users/:id"
          element={<Global>
            <User/>
          </Global>}
          />
        </Routes>
        <Routes>
          <Route
          path="/newUser"
          element={<Global>
            <NewUser/>
          </Global>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
