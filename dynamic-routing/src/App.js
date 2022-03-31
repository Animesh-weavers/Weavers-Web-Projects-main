import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Admin from "./Components/Admin";
import { AuthProvider, useAuth } from "./Components/Auth";
import Details from "./Components/Details";
import FeaturedProducts from "./Components/FeaturedProducts";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavigationBar from "./Components/NavigationBar";
import NewProduct from "./Components/NewProduct";
import NoMatch from "./Components/NoMatch";
import OrderSummary from "./Components/OrderSummary";
import Products from "./Components/Products";
import Profile from "./Components/Profile";
import RequireAuth from "./Components/RequireAuth";
import Users from "./Components/Users";

const App = () => {
  return (
    <AuthProvider>
      <NavigationBar />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<>Loading...</>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<Details />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
