import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import {withRouter} from "react-router-dom";
import Header from "../../views/Header";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import '../../views/design/tooltip.css'

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 50px;
    
    height: 170px;
    justify-content: space-between;

`;

export const InfoButton = styled(AiOutlineInfoCircle)`

    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
    
    position: absolute;
    bottom: 40px;
    right: 70px;
    width: 45px;
    height: 45px;
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;

`;

const LoginButton = styled.div` 
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    color: #FFFFFF;
    
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    
`;

const RegisterButton = styled(LoginButton)`

    color: #7E7E7E;
 

`;

export const Footer = styled.div`

    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #7E7E7E;
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 900px;
    height: 45px;    
    
`;


class Home extends React.Component {

    componentDidMount() {}

    render(){
        return(
            <BaseContainer>
                <Header height={"400"} />
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