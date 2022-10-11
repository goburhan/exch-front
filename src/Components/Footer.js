import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Appear } from "../StyledComponents/Box";

export default function Footer() {
  const Box = styled.div`
    padding: 25px;
    width: 320px;
    contain: content;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 25px;
      img {
        margin-left: auto;
        margin-right: auto;
      }
    }
  `;
  const Text = styled.div`
color: #BBBBBB;
 margin-bottom:20px;
 text-align:${(props) => props.align};

 font-weight: ${(props) => props.font};
 @media (max-width: ${({ theme }) => theme.mobile}) {
  margin-bottom:5px;
  margin-left:${(props) => props.ml};
}
cursor: pointer;
  }
`;

  const Flex = styled.div`
display:flex;

margin : 2% 5% 0% 5%;
justify-content:space-evenly;
@media (max-width: ${({ theme }) => theme.mobile}) {
  flex-wrap:wrap;
  justify-content:center;
  margin : 0% 25% 0% 25%;

}
  }
`;
  const Container = styled.div`
  white-space: nowrap;
  justify-content:center;
  a{
    text-decoration:none;
  }
  
margin : 0% 15% 0 5%;
@media (max-width: ${({ theme }) => theme.mobile}) {
  margin : 5% 8% 15% 0%;
}
  }
`;
  const Footer = styled.div`
    width: 99vw;
    background: linear-gradient(106.44deg, #09120a 23%, #09210c 113.13%);
    border-radius: 25px 25px 0px 0px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 2px;
      margin-top:50px;
      width: 100vw;
    }
  `;

  return (
    <Footer>
      <Flex>
        <Box>
          <img src="images/Logo.svg" />

          <Text align="center">© 2022 Gulf EX</Text>

        </Box>

        <Flex>


          <Container>
            <Text font="bold">Company</Text>

            <a href="/#aboutus"><Text ml="3px">About Us</Text> </a>
            <a href="/terms">

              <Text ml="3px">
                Terms & conditions
              </Text>
            </a>
            <a href="/risk">

              <Text ml="3px">
                Risk disclosure
              </Text>
            </a>

          </Container>

          <Container>
            <Text font="bold">Service</Text>
            <a href="https://supportgulfexio.zendesk.com">
            <Text ml="3px">Help Center</Text>

            </a>

          </Container>

          <Container>
            <Text ml="40px" font="bold">
              Contacts
            </Text>
            <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJZXhMNdqvrgsjcKCJFwGtSsjSphFCdvNBzsncHxGdTbKdWTVSgVxVZkZjDspBtSCpCtjXq">
              <Text ml="5px">support@gulfex.io</Text>

            </a>
          </Container>

          <a href="https://t.me/gulfcoingroup  ">
            <img src="images/Telegram.svg" />
          </a>
          <a href="https://www.linkedin.com/company/gulf-software-technology-ltd/jobs/">
            <img src="images/Linkedin.svg" />
          </a>

        </Flex>
      </Flex>
    </Footer>
  );
}
