import React from "react";
import Global from "./components/Global";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./components/Login";




const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route
        path="/admin/login"
        element={<Login/>}
        />
      </Routes>
        <Routes>
          <Route
            path="/home"
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
          path="/users/:userId"
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

        <Routes>
        <Route
            path="/products"
            element={
              <Global>
                <ProductList/>
              </Global>
            }
          />
        </Routes>

        <Routes>
          <Route
          path="/products/:productId"
          element={<Global>
            <Product/>
          </Global>}
          />
        </Routes>

        <Routes>
          <Route
          path="/newProduct"
          element={<Global>
            <NewProduct/>
          </Global>}
          />
        </Routes>
       
          
      </BrowserRouter>
    </>
  );
};

export default App;
