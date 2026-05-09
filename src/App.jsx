import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetail";
import Cart from "./pages/CartPage";

function App() {
  return (

    <Routes>

      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/product/:name"
        element={
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <MainLayout>
            <Cart />
          </MainLayout>
        }
      />
    </Routes>

  );
}

export default App;