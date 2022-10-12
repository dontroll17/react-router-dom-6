import React from "react";
import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import Product, { loader } from './components/Product';
import NotFound from './components/404';
import Layout from './components/Layout';
import SinglePage, { singleLoader } from "./components/SinglePage";
import LoginPage from "./components/LoginPage";
import CreateProd from "./components/CreateProd";
import AuthProvider from "./hoc/AuthProvider";
import About from "./components/About";

import RequireAuth from './hoc/RequireAuth';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="login" element={<LoginPage />} />
    <Route path="product" element={<Product/>} loader={loader}/>
    <Route path="product/:id" element={<SinglePage />} loader={singleLoader}/>
    <Route path="product/new" element={
      <RequireAuth>
        <CreateProd />
      </RequireAuth>
    } />
    <Route path='about/*' element={<About />} />
    <Route path="redirect" element={<Navigate to="/" replace />} />
    <Route path="*" element={<NotFound />} />
  </Route>
));

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </ AuthProvider>
  )
}

export default App
