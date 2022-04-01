import React from "react";
import { Header } from './Car-Rental/Header';
import "bootstrap/dist/css/bootstrap.min.css";
// import FormikContainer from "./Component/FormikContainer";
import { Routes, Route} from "react-router-dom";
import {Home} from './Car-Rental/Home'
import {Login} from './Car-Rental/Login'
import {Footer} from './Car-Rental/Footer'
import {SignUp} from './Car-Rental/SignUp'
import {Error} from './Car-Rental/Error'

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
       <Route path='/SignUp' element={<SignUp/>} />
        <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
      {/* <FormikContainer /> */}
    </div>
  );
}

export default App;
