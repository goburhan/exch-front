import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Registerpage from "./Pages/Register/Registerpage";
import Loginpage from "./Pages/Login/Loginpage";
import Mainpage from "./Pages/Home/Mainpage";
import Faq from "./Pages/Risk/RiskPolicy";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Terms from "./Pages/Terms/TermsCondition";

const theme = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "2000px",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/risk" element={<Faq />} ></Route>
        <Route path="/terms" element={<Terms />} ></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
