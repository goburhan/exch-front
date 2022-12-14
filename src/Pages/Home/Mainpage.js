import "../../App.css";
import Navbar from "../../Components/Navbar";
import Enterance from "../../Components/Enterance";
import { ThemeProvider } from "styled-components";
import OurFeatures from "../../Components/OurFeatures";
import Lock from "../../Components/Lock";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import Shield from "../../Components/Shield";
import Registerpage from "../Register/Registerpage";
import LoginPage from "../Login/Loginpage";
import Aboutus from "../../Components/Aboutus"
import Carrer from "../../Components/Carrer"
import { useRouteMatch, Link } from 'react-router-dom'


const theme = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "2000px",
};


export default function Mainpage() {
  return (
    <ThemeProvider theme={theme}>
      <Enterance />
      <OurFeatures />
      <Aboutus />
      <Shield />
      <Lock />
      <Carrer />
     
    </ThemeProvider>
  );
}

