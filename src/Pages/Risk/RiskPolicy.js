import React from 'react'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import { FaqTexts } from './FaqText'
const Card = styled.div`
display:flex;
flex-direction:column;
align-content:center;
background:linear-gradient(106.44deg, #071B0A 23%, #09210C 113.13%); 
width:100%;
height:max-content;
gap:16px;
border-radius:25px;
text-align:center;
padding:64px 120px;

@media (max-width: ${({ theme }) => theme.tablet}) {
    padding:32px 16px;
}

`
const Text = styled.text`
font-family: "Poppins", sans-serif;
font-size:16px;
color :#EFEFEF;
font-weight:400;
@media (max-width: ${({ theme }) => theme.tablet}) {
    font-size:14px;
}
`
const Title = styled.text`
font-family: "Poppins", sans-serif;
font-size:${props => props.fontSize || "24px"};
color : ${props => props.color || "#53BF0A"};
font-weight:${props => props.fontWeight || "600"};
margin-bottom:${props => props.marginBottom};
@media (max-width: ${({ theme }) => theme.tablet}) {
    font-size:${props => props.fontVariant || "22px"};
    line-height:${props => props.lineHeight || "1.3"}; 
}
`
const TextWrapper = styled.div`
display:flex;
flex-direction:column;
gap:16px;
`
const ListWrapper = styled.div`
display:flex;
flex-direction:column;
`
const PageWrapper = styled.div`
display:flex;
height: max-content;
max-width: 100vw;
padding:128px 300px;
position:relative;
@media (max-width: ${({ theme }) => theme.tablet}) {
    padding:120px 34px;
}
`


const ListItem = styled.li`
font-size:16px;
color :#EFEFEF;
text-transform:initial;
padding:0px;
&:before{
content:"\u2022 ";
}
@media (max-width: ${({ theme }) => theme.tablet}) {
    font-size:14px;
}
`
const List = styled.ul`
display:flex;
flex-direction:column;
margin-right:0px;
`
const NumberList = styled.ol`
display:flex;
flex-direction:column;
li::before {
    content: counter(li) ".";; 
    display: inline-block;
     width: 1rem;
}
li {counter-increment: li}


`
export default function Risk() {
    return (

        <PageWrapper>
            <Card>
                <Title fontVariant="30px" fontWeight="900" color='#fff' fontSize="34px">Gulfexchange <br/> Responsible Risk Disclosure Policy</Title>
                <Text>This document provides you with information about the risks associated with investment products in which you may invest through the services provided to you by Gulfexchange.
                    Cryptocurrency is a digital representation of value that functions as a medium of exchange, a unit of account, or a store of value, but it does not have legal tender status. Cryptocurrencies are sometimes exchanged for FIAT currencies around the world, but they are not generally backed or supported by any government or central bank. Their value is completely derived by market forces of supply and demand, and they are more volatile than traditional currencies. The value of cryptocurrency may be derived from the continued willingness of market participants to exchange fiat currency for cryptocurrency, which may result in the potential for permanent and total loss of value of a particular cryptocurrency should the market for that cryptocurrency disappear.
                </Text>
                {FaqTexts.map((text, index) => {
                    return (
                        <TextWrapper key={index}>
                            <Title >{text.title}</Title>
                            <Text>{text.content}</Text>
                        </TextWrapper>
                    )
                }
                )}
                <ListWrapper>
                    <Title marginBottom="16px">
                        Reporting a Security Issue
                    </Title>
                    <Text>In case of any security issue is identified, you are required to send us an email to: Support@gulfex.io</Text>
                    <Text>What to include:</Text>

                    <List>
                        <ListItem>
                            Well-written reports in English will have a higher chance of being accepted
                        </ListItem>
                        <ListItem>
                            Reports that include proof of concept code will be more likely to be accepted
                        </ListItem>
                        <ListItem>
                            Reports that include only crash dumps or another automated tool output will most likely not be accepted
                        </ListItem>
                        <ListItem>
                            Reports that include products & services that are out of scope (see the Scope section below) will not be considered

                        </ListItem>
                        <ListItem>
                            Include how you found the bug, the impact, and any potential remediation

                        </ListItem>
                        <Text>Any plans for public disclosure</Text>
                        <Text>What you can expect from us:</Text>
                        <ListItem>
                            A timely response to your email (within 2 business days).
                        </ListItem>
                        <ListItem>
                            An open dialog to discuss issues.
                        </ListItem>
                        <ListItem>
                            Credit after the vulnerability has been validated and fixed.
                        </ListItem>
                    </List>

                </ListWrapper>

                <ListWrapper>
                    <Title marginBottom="16px">
                        Coordinated Responsible Disclosure Policy
                    </Title>
                    <Text>We ask security researchers to keep vulnerabilities and communications around vulnerability submissions private and confidential until a patch is developed to protect the Gulfexchange and its users.</Text>
                    <Text>Please do:</Text>

                    <List>
                        <ListItem>
                            Allow the Gulfexchange team a reasonable amount of time address security vulnerabilities

                        </ListItem>
                        <ListItem>
                            Avoid exploiting any vulnerabilities that you discover

                        </ListItem>
                        <ListItem>
                            Demonstrate good faith by not disrupting or degrading Gulfexchange services, products & data

                        </ListItem>
                        <Text>Gulfexchange pledges not to initiate legal action against researchers as long as they adhere to this policy.</Text>

                    </List>

                </ListWrapper>

                <ListWrapper>
                    <Title marginBottom="16px">
                        Responsible Disclosure Process

                    </Title>

                    <NumberList>
                        <ListItem>
                            Once a security report is received, the Gulfexchange team verifies the issue and establishes the potential threat

                        </ListItem>
                        <ListItem>
                            Patches to address the issues will be prepared and tested


                        </ListItem>
                        <ListItem>
                            We update the Coin technology right away


                        </ListItem>

                    </NumberList>

                </ListWrapper>

                <ListWrapper>
                    <Title marginBottom="16px">
                        Out of scope
                    </Title>

                    <NumberList>
                        <ListItem>
                            Scam & phishing attempts involving Gulfexchange Services
                        </ListItem>
                        <ListItem>
                            Lost or compromised secret phrases, keystore files or private keys
                        </ListItem>
                        <ListItem>
                            Physical vulnerabilities
                        </ListItem>
                        <ListItem>
                            Social Engineering attacks
                        </ListItem>
                        <ListItem>
                            Functional, UI, and UX bugs such as spelling mistakes
                        </ListItem>
                        <ListItem>
                            Descriptive error messages
                        </ListItem>
                        <ListItem>
                            HTTP error codes/pages
                        </ListItem>
                        <ListItem>
                            Restricted regions : Gulf exchange does not offer services to residents of USA
                        </ListItem>

                    </NumberList>

                </ListWrapper>

                <TextWrapper>
                    <Title >Project risk</Title>
                    <Text> In many projects, the value and stability of the cryptocurrency largely depends on the skill and diligence of the project team behind the cryptocurrency or the Coin Sale Agreements of any kind. The project underlying an ICO might not be realized, which would ultimately make the cryptocurrency worthless.</Text>
                </TextWrapper>

                <TextWrapper>
                    <Title >Contact Us</Title>
                    <Text> Get in touch with us at Support@gulfex.io whether you want to submit an issue, a recommendation or have security related topics to bring up, we’re happy to hear from you.
                        In order to protect the Gulfexchange ecosystem, we request that syou not post or share any information about a potential vulnerability in any public setting until we have researched, responded to, and addressed the reported vulnerability and informed partners if needed.
                    </Text>
                </TextWrapper>
            </Card>
        </PageWrapper>

    )
}
