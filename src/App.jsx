import React from "react";
import Global from "./components/Global";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Error from "./components/Error";




const App = () => {
  const admin = useSelector(state=>state.user.currentUser.others.isAdmin)
  console.log(admin)
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route
        path="/login"
        element={admin ? (<Navigate replace to="/home"/>) : (<Login/>)}
        />
      </Routes>
        {admin ? (
          <>
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
       
          </>
        ) : (     <Routes>
          <Route
          path="*"
         element={<Error/>}
          />
        </Routes>)}
          
      </BrowserRouter>
    </>
  );
};

export default App;
