import React from "react";
import { Header } from "./Car-Rental/Header.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import FormikContainer from "./Component/FormikContainer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Car-Rental/Home.tsx";
import { Login } from "./Car-Rental/Login.tsx";
import { Footer } from "./Car-Rental/Footer.tsx";
import { SignUp } from "./Car-Rental/SignUp.tsx";
import { Error } from "./Car-Rental/Error.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {/* <FormikContainer /> */}
    </div>
  );
}

export default App;
