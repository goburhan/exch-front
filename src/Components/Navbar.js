import React from "react";
import styled from "styled-components";
import { Flex } from "../StyledComponents/Flex";
import { StyledButton } from "../StyledComponents/Button";
import { Removal } from "../StyledComponents/Box";
import Img from "react-cool-img"
import { Link } from "react-router-dom";

const Buton = styled(StyledButton)`
cursor: pointer;
@media (max-width: ${({ theme }) => theme.mobile}) {
   display:none;
`;
const Navibar = styled.div`
  display: flex;
  position:fixed;
  width: 100vw;
  height: 100px;
  justify-content: flex-end;
  background-color: rgba(35, 35, 34, 0.5);
  z-index: 1;
`;



const Items = styled.div`
  display: flex;
  place-items: center;

  div {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    a{
     display:none;
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.content};
  width: 50vw;
  margin-left: 87px;
  margin-right: 87px;
  align-items: center;
  a{
    text-decoration:none;
    color:white;
    margin-right:20px;
  }
  img{
   max-width:193px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width:8vw;
`;
const Margin = styled.div`
 height:150px;
 @media (max-width: ${({ theme }) => theme.mobile}) {
  height:20px;
`;

export default function Navbar() {
  return (
    <>
      <Navibar>
        <Container >
          <Link to="/">
            <img src="/images/Logo.svg" />
          </Link>

        </Container>
        <Container content="flex-end">
          <Items>
            <Removal>
              <a href="https://trade.gulfex.io/login">Login</a>
            </Removal>
            <Removal>
              <a href="https://trade.gulfex.io/signup">Register</a>
            </Removal>



            <a href="https://trade.gulfex.io/signup">
              <Buton

                radius="18px"
                style={{ width: "160px", height: "44px", marginLeft: "20px" }}
              >
                Get Started
              </Buton>
            </a>
          </Items>


        </Container>
      </Navibar>
      <Margin></Margin>
    </>
  );
}
