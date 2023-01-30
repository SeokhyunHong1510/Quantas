import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alloc from './alloc/Alloc';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Alloc />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
