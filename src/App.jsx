import React from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import NotFound from './components/404';
import Layout from './components/Layout';
import SinglePage from "./components/SinglePage";
import LoginPage from "./components/LoginPage";
import CreateProd from "./components/CreateProd";
import AuthProvider from "./hoc/AuthProvider";

import RequireAuth from './hoc/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<SinglePage />}/>
          <Route path="/product/new" element={
            <RequireAuth>
              <CreateProd />
            </RequireAuth>
          } />
          <Route path="/redirect" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ AuthProvider>
  )
}

export default App
