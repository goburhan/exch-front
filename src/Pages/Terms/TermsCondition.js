import React from 'react'
import styled from 'styled-components'
import Footer from '../../Components/Footer'


const Text = styled.text`
font-family: "Poppins", sans-serif;
font-size:16px;
color :#EFEFEF;
font-weight:400;
span {
    color:#53BF0A;
    font-weight:600;
}
@media (max-width: ${({ theme }) => theme.tablet}) {
    font-size:14px;
}
`

const Card = styled.div`
display:flex;
flex-direction:column;
align-content:center;
background:linear-gradient(106.44deg, #071B0A 23%, #09210C 113.13%); 
width:100%;
height:max-content;
gap:16px;
border-radius:25px;
text-align:left;
padding:64px 120px;


@media (max-width: ${({ theme }) => theme.tablet}) {
    padding:32px 16px;
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

export default function Terms() {
    return (

        <PageWrapper>
            <Card>
                <Title fontVariant="30px" fontWeight="900" color='#fff' fontSize="34px">General Terms and Conditions <br />   <Text>
                    for Access and Use of Gulfexchange Website and Services
                </Text></Title>

                <Title>
                    PLEASE READ CAREFULLY! THIS DOCUMENT REPRESENTS THE LEGAL BINDING BETWEEN GULFEX AND THE USER. WE INVITE YOU TO READ THESE TERMS & CONDITIONS BEFORE USING THE PROVIDED SERVICES
                </Title>

                <Text>

                    Disclaimer
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of our website. Nothing in this disclaimer will:
                    <br />  -	limit or exclude the Service Provider’s liability for misinterpretation of the information presented on the website;
                    <br />   -	limit any of the Service Provider’s liabilities in any way that is not permitted under applicable law;

                </Text>

                <Text>
                    Gulfexchange’s Crypto Services carry a high level of knowledge and risk, and can result in losses. The high level of risk means our Crypto Services is not suitable for everyone. If you are in any doubt, you should seek independent advice.
                </Text>

                <ListWrapper>

                    <Text>By submitting an application to request information or to initiate a commercial relationship with us, you confirm:</Text>

                    <List>
                        <ListItem>
                            that you have read the Disclaimer and all the documents supplied to you in connection with our Services and that you fully agree to them;
                        </ListItem>
                        <ListItem>
                            that you understand and agree that our relationship may be amended from time to time, in which case you automatically agree to such modifications;
                        </ListItem>
                    </List>

                </ListWrapper>

                <Title>
                    General provisions
                </Title>
                <Text>
                    The website <span> https://gulfex.io</span> is owned and operated by the Gulfexchange team (doing business as “Gulfexchange”). Throughout the site, the terms “we”, “us”, “Gulfexchange” and “our” refer to the Company. Gulfexchange team offers this website, including all information, tools and services available from this website to you, the User, conditioned upon your acceptance of all the provisions stated here.
                    By visiting our website and/ or purchasing a Service from us, you engage in our “Service” and agree to be bound by the following Terms and Conditions (“Terms and Conditions”, “Terms”). In case you do not agree with the clauses of the present document, please stop using the Services.
                    Any new features or tools which are added to the current line of Services shall also be subject to the Terms and Conditions. You can review the most current version of the document at any time on this page.

                </Text>

                <Title>
                    1. INTRODUCTION
                </Title>
                <Text>
                    <span>1.1.   Contracting Parties </span><br />
                    Gulfexchange team - as service provider,
                    and
                    "The User" - any private entity which benefits of any of our Services at https://gulfex.io .

                </Text>
                <Text>
                    <span>1.2. Authority and Capacity </span><br />  The parties and their legal representatives guarantee that they have the authority and capacity to enter into this agreement.
                    <br />Enforceability. This agreement constitutes a legal, valid, and binding obligation, enforceable against the parties according to its terms.

                </Text>
                <Text>
                    <span>  1.3.  Definitions</span>
                    <br /> "Visitor" means any person who visits the websites but does not create an account with us.
                    <br />   "User" means the person or legal entity which creates an account and makes a purchase of our product or of a cryptocurrency token on our platform;
                    <br />   "Service" means any of the services described on our website at any given time, which are made available through the website, third party platform or directly to select collaborators and users, and subject to this agreement;
                    <br />   "Purchase" means the contract under which the User receives or pays cryptocurrencies using the GulfEx Service on our platform;

                </Text>

                <Text>
                    <span>  1.4.   Website Accuracy</span><br />
                    Although we intend to provide accurate and timely information on the website, it may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors.
                    In an effort to continuously provide you with as complete and accurate information as possible, information may, to the extent permitted by applicable law, be changed or updated from time to time without notice, including without limitation information regarding our policies, products and services. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on the website are your sole responsibility and we shall have no liability for such decisions.
                    Links to third party materials (including without limitation any websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any such third-party materials accessible or linked to from the website.

                </Text>

                <Text>
                    <span>  1.5.  Eligibility</span><br />
                    To be eligible to use any of the Gulfexchange Services, the User must either be an authority, be legally incorporated, or at least 18 years old, and reside in a country (or an area) in which the relevant Services are accessible. Please note that GulfEx Services are not available in every country.
                    For the purposes of these Terms, applicable laws and regulations shall include the rules of any relevant regulatory authority or exchange and any applicable laws, rules, procedures, guidance, codes, standards and regulations (including, without limitation, accounting rules and anti-money laundering or sanctions legislation) in force from time to time

                </Text>

                <Title>
                    2. THE RIGHT TO USE THE SERVICES
                </Title>
                <Text>
                    <span>2.1. Procedures</span> <br />
                    In order to avail access to our product and services, the User is required to provide a set of information, including, without limitation: complete legal and contact information, payment and billing sources, and digital identification. The User also undertakes that during the validity of the contract it will keep the Gulfexchange updated, accurate and true. The acquisition will be validated after a preliminary verification of the contact data. The User is responsible for keeping any security information safe and secure. The User must not disclose these details to any person who is not authorized to access the Products or Services.
                    Gulfexchange reserves the right to refuse Services to anyone for any reason, at any time.
                    The User receives a limited, terminable, non-exclusive and non-transferable right of access and use the Services, in accordance with the terms of this Agreement, exclusively for the purposes for which the Services are construed.

                </Text>
                <Text>
                    <span> 2.2. Description of Services</span> <br />
                    GulfEx is a digital cryptocurrency platforms that enables anyone anywhere to send and receive payments without relying on banks. We aim to provide financial and electronic payment solutions to the public offering them digital revolution at their service.
                </Text>

                <Text>
                    <span>  2.3. User’s obligations</span> <br />

                    The User accepts the full responsibility for all activities connected its compliance with the terms of this document. It is at all times the User who is a party to this agreement with Gulfexchange , and who has all rights and obligations set out in this document.
                    The User accepts that Gulfexchange may contact the User, through the registered e-mail addresses and through telephone, and provide general marketing information or other information about the Services.

                </Text>

                <Text>
                    <span> 2.4. Registration and Account Usage</span> <br />
                    <span> Registration process</span>  <br /> To use the Gulfexchange Services, the Visitor will need to register for an account (a "User Account") by providing their name and email address and a password, and accepting these Terms and Conditions. By using the Account, the User agrees and represents that they will use our Services only for themselves or on behalf of the legal entity they are representing, and not on behalf of any third party, except for prior approval from us. The User is fully responsible for all activity that occurs under their Account. We may, in our sole discretion, refuse to open a User Account for you, or limit the number of User Accounts that one may hold or suspend or terminate any User Account or the trading of any specific Cryptocurrency.
                    <br />  <span>  Access to third parties </span>   <br />       If the User grants express permission to a third party to access or connect to the Account(s), either through the third party's product or service or through the website, the User acknowledges that granting permission to a third party to take specific actions on their behalf does not relieve them of any of your responsibilities under this Agreement. The User is fully responsible for all acts or omissions of any third party with access to the Account(s) and any action of such third party shall be considered to be an action authorized by the User. Furthermore, the User acknowledges and agrees that they will not hold Gulfexchange responsible for, and will indemnify Gulfexchange from, any liability arising out of or related to any act or omission of any third party with access to the Account(s).
                    <span>  Identity Verification</span>  <br />     If requested in the future, the User agrees to provide us with all the information legally required for the purposes of identity verification and the detection of money laundering, terrorist financing, fraud, or any other financial crime. The user may need to complete certain verification procedures before they will be permitted to start using the Services, on a case-by-case basis. The limits that apply to their use of the Services may be altered as a result of information collected on an ongoing basis.
                    <br />  <br />   The information we request may include personal information such as, but not limited to, name, address, phone number, email, date of birth, taxpayer identification number, government identification number, information regarding your bank account (such as the name of the bank, the account type, routing number, and account number) network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status details.
                    <br />  <br />     During the AML/CFT, AML/KYC procedures, as detailed in the AML/KYC section of the website, the User expressly authorizes us to make any enquiries, directly or through third parties, that we consider necessary to verify their identity or protect them and/or us against fraud or other financial crime, and to take action we reasonably deem necessary based on the results of such inquiries. Additionally, we may require the User to wait some amount of time after completion of a transaction before permitting them to use further Gulfexchange Services and/or before permitting you to engage in transactions beyond certain volume limits.
                    <br />  <span> Verification Procedures</span><br /> Gulfexchange uses multi-level systems and procedures to collect and verify information about the User in order to protect Gulfexchange and the community from fraudulent users, and to keep appropriate records of Gulfexchange 's customers. The User’s access to the Gulfexchange Services and limits including daily or weekly conversion limits, withdrawal and trading limits, instant buy limits, transfer limits, and limits on transactions from a linked payment method may be based on the identifying information and/or proof of identity that the User has provided to Gulfexchange.

                </Text>


                <Text>
                    <span>2.5. Prohibited usage </span> <br />
                    Under all circumstances, the User is strictly prohibited from permitting, assisting or enabling any individual or entity not authorized from accessing or using the Services. In the event that the User’s Personal Information is lost or stolen, or if there are reasons to believe that the Services has been accessed by an unauthorized user, the User is required to immediately contact our Support Service. Notwithstanding any provision to the contrary, nothing in this document shall be construed, interpreted or applied to impose responsibility or liability on us or our affiliates for any and all activities arising from the authorized or unauthorized access of the Services.
                    The following activities are prohibited and will result in immediate Services suspension or cancellation of the Services without the possibility of a refund, but with the possibility for Gulfexchange impose supplementary fees and/or pursue civil remedies, in case of legal damages:
                    <br /> -	Fostering or promotion of illegal, abusive, or irresponsible behavior;
                    <br /> -	Misuse of system resources, such as programs that consume excessive network capacity, CPU cycles, or disk IO, disruption or interference of any data system or network, unauthorized collection or use of e-mail addresses, screen names or other identifiers, use of the Services to distribute software that covertly gathers information about a user or covertly transmits information about the user, monitoring data or traffic on any network or system without the express authorization of the owner of the system or network;
                    <br /> -	Spam, Unsolicited Bulk Email, Forged Email, Phishing Email, etc;
                    <br /> -	Transmission, distribution, or storage of any information, data or material that is protected by copyright, trademark, trade secret, or any other intellectual property rights. Any usage that prompts the receipt of abuse complaints pertaining to violation of any international copyright law will be discontinued;
                    <br /> -	Access to other computers or networks without authorization;
                    <br /> -	Providing false data on any contract or application: including fraudulent use of credit card numbers;
                    <br /> -	Any conduct that is likely to result in retaliation against the Gulfexchange network or website, including engaging in behavior that results in any server being the target of a DoS attack;
                    <br /> -	Any attempt to probe, scan, penetrate or test the vulnerability of Gulfexchange systems or networks, or to breach the Gulfexchange security or authentication measures, whether by passive or intrusive techniques;
                    <br /> -	Any other activities viewed as illegal or harmful by any jurisdiction;

                </Text>

                <Title>
                    3. SUSPENDING OR TERMINATING THE SERVICES

                </Title>
                <Text>

                    <span>Right to suspend the Services  </span>  <br />  We may, acting reasonably, suspend the User’s Services at any time and may, at any time and for any reason and without notice.
                    If the User’s Services are suspended, they will be able to close any existing trades but will not be permitted to open any new trades or agreements. The circumstances where we may suspend the User’s Services include, but are not limited to:
                    <br /> •	when we have not received information within 10 days of a request (or sooner if so reasonably required), when we believe that we require such information in connection with this document;
                    <br /> •	when we have reason to believe that there has been a breach in the User’s security or that there is a threat to the User’s security;
                    <br /> •	when the User’s activity or conduct is such that we believe acting reasonably at all times has or is likely to impair the integrity, functionality, speed or reliability of Gulfexchange or compromise, impair, restrict or prevent the ability of Gulfexchange to operate a fair and orderly market;
                    <br />  <span>Right to close the User’s Services </span>  <br />
                    We may, acting reasonably, close the User’s Services at any time. We shall normally notify the User by email and such termination will take effect upon notice being sent to the email address. If we elect to close the User’s Services, where possible the User will have 14 working days to close any undergoing operations. If the User has not closed all undergoing operations within the 14 days provided, we shall be entitled to close all operations the next Business Day. The circumstances where we may close the User’s Services include but are not limited to where:
                    <br /> •	the User repeatedly fails to provide information requested, when we believe that we require such information in connection with this document;
                    <br /> •	the User has persistently acted in an abusive manner toward our staff (for example by performing what we consider to be a serious discourtesy or the use of offensive or insulting language);
                    <br /> •	the information provided to us as part of the application process to open the User’s Services is demonstrably untrue;
                    <br /> •	In our opinion, the User’s operations are likely to have a negative impact on the quality of the Gulfexchange Services and, therefore, a potential detrimental effect on the members of Gulfexchange community.

                </Text>
                <Title>
                    4. INTELLECTUAL PROPERTY RIGHTS
                </Title>
                <Text>
                    The User hereby acknowledges and agree that Gulfexchange owns the intellectual property rights for the website, the logo, the platform, the crypto project in its entirety and the underlying Token, for all present and future materials and services, including, but without limitation to, copyrights, patents, trademarks, and trade secrets, works, images, pictures, dialogues, music, sounds, videos, documents, drawings, figures, logos and any other material published on https://trade.gulfex.io/ , including menus, web pages, graphics, colors, schemes, tools, the website's fonts and design, diagrams, layouts, methods, processes, functions and software which are part of https://trade.gulfex.io/ , and are protected by copyright and by all other intellectual property rights of Gulfexchange. The User's possession, access, and use of our services do not transfer to the User, or to any third party, any rights, title, or interest in or to such intellectual property rights.

                    The User must not, without prior written consent from Gulfexchange:
                    <br />  -	Republish material from https://trade.gulfex.io/
                    <br />  -	Sell, rent or sub-license material from https://trade.gulfex.io/
                    <br />  -	Reproduce, duplicate or copy material from https://trade.gulfex.io/
                    <br />  -	Redistribute content from https://trade.gulfex.io/

                </Text>

                <Title>
                    5. SECURITY
                </Title>
                <Text>
                    <span> Confidentiality </span>   <br /> User’s privacy is important to Gulfexchange and we will abide by our Privacy Policy. Gulfexchange reserves the right to modify their Privacy Policy from time to time.

                    <br />  <span> Processing of personal data </span>   <br /> The Services offered by Gulfexchange entail collecting and processing of User’s personal data.

                    Gulfexchange is the Controller and Processor, in accordance with the international data protection regulations. The User can find all the relevant legal details relating to data Protection in the Privacy Policy section of the website.

                </Text>

                <Title>
                    6.  SPECIAL DISCLAIMER
                </Title>
                <Text>
                    THE GULFEXCHANGE SERVICES ARE PROVIDED "AS IS." WE, OUR AFFILIATES AND OUR EVENTUAL SUBPROCESSORS MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESSED, IMPLIED, STATUTORY OR OTHERWISE REGARDING THE GULFEX SERVICES, INCLUDING ANY WARRANTY THAT THE GULFEX SERVICES WILL BE UNINTERRUPTED, ERROR FREE OR FREE OF RISK OR ADVERSE ELEMENTS, OR THAT ANY CONTENT, INCLUDING THE CUSTOMER DATA, WILL BE SECURE OR NOT OTHERWISE LOST OR DAMAGED. EXCEPT TO THE EXTENT PROHIBITED BY LAW, WE AND OUR AFFILIATES AND SUBPROCESSORS DISCLAIM ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR QUIET ENJOYMENT, AND ANY WARRANTIES ARISING OUT OF ANY COURSE OF DEALING OR USAGE OF TRADE.
                </Text>

                <Title>
                    7. LIMITATION OF LIABILITY
                </Title>

                <Text>
                    <span>  Limitation of liability </span> <br />  If Gulfexchange is held responsible for paying damages to the User as a consequence of breaches of any of the obligations under this Agreement, such damages may in no event include compensation for indirect loss or damages of any kind which may arise as a result of, or in connection with, such breach. Indirect loss includes, but is not limited to, loss of profit of any kind, losses as a consequence of disrupted operations, loss of data, lost savings. Gulfexchange’s liability under this Agreement is therefore limited to direct loss, unless otherwise set out in mandatory applicable law, for example, damages due to gross negligence or intent.

                    If standardized sanctions are agreed, these standardized sanctions shall be the sole and exclusive remedy for the matter and no other claims may be made based on the same situation.

                    Even though Gulfexchange will use appropriate care to ensure secure transmission of information between the User and the Services, the User recognizes that the Internet is an open system and that Gulfexchange cannot warrant that a third party cannot or will not intercept or alter data during the transmission. Gulfexchange takes no responsibility for such unauthorized access to, use or alternation or publication or loss of data.
                    Neither is Gulfexchange responsible for lack of availability of the Services when this is directly or indirectly caused by the User or by circumstances for which the User is responsible or the reconstruction of data regardless of cause.

                </Text>
                <Title>
                    8. FORCE MAJEURE
                </Title>
                <Text>
                    If the use and execution of the Services are wholly or partly prevented or materially impeded by circumstances beyond the parties’ control, both parties’ obligations are suspended for as long as the circumstances are relevant and as long as these circumstances last. Each party may, however, in accordance with section 10 of this Agreement, terminate the Agreement if the force majeure makes it particularly burdensome for that party to continue the Agreement.
                    <br />
                    <br />  In the event that law, rules or regulations applicable to the use or delivery of the Services is changed or new rules or regulations are adopted after the Services have been made available on the market and this prevents Gulfexchange from fulfilling the User’s instructions regarding processing of personal data or other obligations in this Agreement, and/or this requires full or partial termination of access to the Services for a limited or indefinite period of time, this shall be considered as a force majeure circumstance. Gulfexchange is not in any way responsible for any such or other force majeure circumstance.

                </Text>

                <Title>
                    9. TRANSFER OF SERVICES
                </Title>
                <Text>
                    The User is not entitled to transfer all or part of the right to use the Services to another entity. Gulfexchange may fully or partially transfer its rights and obligations under the Agreement to subsidiaries or other companies within the same group, hereunder use these as sub-contractors, provided that this is done in such a manner that it is ensuring compliance with the obligations under all relevant data protection laws from the User’s perspective.
                </Text>

                <Title>
                    10. COMPLAINTS
                </Title>
                <Text>
                    The Company shall maintain effective and transparent procedures for the reasonable and prompt
                    handling of complaints received from the User and shall keep a record of each complaint and the measures taken for its resolution or handling.
                    <br /><br />
                    The Parties agree to make every reasonable effort for resolving any disputes between them
                    before commencing any litigation proceedings.

                </Text>

                <Title>
                    11. GOVERNING LAW
                </Title>
                <Text>
                    This Agreement is governed by and construed in accordance with all the applicable international laws. Exclusive jurisdiction and venue for any action arising under this Agreement are in the Courts of Justice from the headquarters of Gulfexchange, and both parties hereby consent to such jurisdiction and venue for this purpose. In any action or proceeding to enforce or interpret this Agreement, the prevailing party will be entitled to recover from the other party its costs and expenses (including reasonable attorneys' fees) incurred in connection with such action or proceeding and enforcing any judgment or order obtained.
                </Text>

                <Title>
                    12. ENTIRE AGREEMENT
                </Title>
                <Text>
                    These Terms and Conditions, together with the Privacy Policy and the Risk Policies constitute the entire agreement between the parties concerning any level of contractual relationship.
                    No change, consent or waiver to this Agreement will be effective unless in writing and signed by the party against which enforcement is sought. The failure of Gulfexchange to enforce its rights under this Agreement at any time for any period shall not be construed as a waiver of such rights. Unless expressly provided otherwise, each right and remedy in this Agreement is in addition to any other right or remedy, at law or in equity, and the exercise of one right or remedy will not be deemed a waiver of any other right or remedy.

                </Text>

                <Title>
                    13.NOTIFICATIONS
                </Title>

                <Text>
                    Any notice hereunder will be effective upon receipt and shall be given in writing, in English and delivered to the other party at its address given herein for Gulfexchange and in the information for the User.
                </Text>

                <Title>
                    14. ACKNOWLEDGMENT OF TERMS
                </Title>
                <Text>
                    The User acknowledges that they: <br />
                    <br />(a) have read this agreement prior to initiation of use of our Services;
                    <br />(b) understand the terms of this agreement;
                    <br />(c) have signed this agreement voluntarily requesting the use of our Products and Services;
                    <br /><br />
                    IN WITNESS WHEREOF, the Parties have executed this Agreement.

                </Text>
            </Card>
        </PageWrapper>

    )
}
