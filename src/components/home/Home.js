import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import {withRouter} from "react-router-dom";
import Header from "../../views/Header";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import '../../views/design/tooltip.css'

// Reworked

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 6.33%;
    
    height: 18.14%;
    justify-content: space-between;

`;

// Reworked

export const InfoButton = styled(AiOutlineInfoCircle)`

    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
    
    position: absolute;
    bottom: 4.26%;
    right: 3.67%;
    width: 2.36%;
    height: 4.80%;
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;

`;

// Reworked

const LoginButton = styled.div` 
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 5.33vh;
    color: #FFFFFF;
    
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    
`;

const RegisterButton = styled(LoginButton)`

    color: #7E7E7E;
 

`;

// Reworked

export const Footer = styled.div`

    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 1.49vh;
    color: #7E7E7E;
    text-align: center;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 47.29%;
    height: 4.80%;    
    
`;


class Home extends React.Component {

    render(){
        return(
            <BaseContainer>
                <Header height={"38.75"} />
                <Container>
                    <LoginButton onClick={ () => {this.props.history.push("/login")}}>
                        LOGIN
                    </LoginButton>
                    <RegisterButton onClick={ () => {this.props.history.push("/register")}}>
                        REGISTER
                    </RegisterButton>
                </Container>
                <Footer>
                    <div>made by students @ University of Zurich</div>
                    <div style={{color: "#FFFFFF"}}>An adaption of the board game “Pictures”, created by Christian & Daniela Stöhr</div>
                </Footer>
                <InfoButton data-tip data-for="infoTip" />
                <ReactTooltip class ="buttonTooltip" textColor="#252525" backgroundColor="#F2AD43" id="infoTip" place="top" effect="solid">
                    About Us
                </ReactTooltip>
            </BaseContainer>
        );
    }
}

export default withRouter(Home);