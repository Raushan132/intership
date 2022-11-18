import React from "react";
import {Route, Routes } from 'react-router-dom';
import './style/nav.css';
import './style/about.css';
import './style/footer.css';
import './style/contact.css';

import Header  from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import NotFound from "./component/NotFound";


const App=()=>{
  return (
   <>
    <Header />
    <Routes>
    <Route exact path='*' element={<NotFound />} />
    <Route exact path='/' element={<About />} />
    <Route exact path='/about' element={<About />} />
    <Route exact path='/Contact' element={<Contact />} />
    </Routes>
   
    <Footer />
   </>
  );
};

export default App;
