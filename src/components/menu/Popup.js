import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import '../../views/design/tooltip.css'

import {BaseContainer, TopBar, BackgroundContainer} from "../../views/LoginManagement";
import Tutorial from '../menu/Tutorial';

import { keyframes } from 'styled-components'


const opacityAnimation = keyframes`
    0% { opacity: 0 }
    30% { opacity: 0.3 }
    40% { opacity: 0.4; }
    60% { opacity: 0.6}
    100% { opacity: 1; }
`;

const BaseeContainer = styled(BaseContainer)`

    position: absolute;
    
    width: 80vw;
    left: 10.55%;

`;

const BackgroundContaineer = styled(BackgroundContainer)`
    
    width: 55.00%;
    height: 84.31%;
    animation-name: ${opacityAnimation};
    animation-duration: 0.4s;
    animation-timing-function: linear;
  
`;

const ToppBar = styled(TopBar)`
    
   height: 13%;
   
`;

const CloseButton = styled.div`

    position: absolute;
    left: 41.3%;
    bottom: 11.5%;
    
    &:hover {
        transform: translateY(-5px);
    }
    
    transition: all 0.3s ease;
    cursor: pointer;
    
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 4.16vh;
    color: #F2AD43;

`;

class Popup extends React.Component {
  render() {
    return (
        <BaseeContainer>
            <BackgroundContaineer>
                <ToppBar>Welcome to the Tutorial</ToppBar>
                <Tutorial/>
                <CloseButton onClick={this.props.closePopup}>Close Tutorial</CloseButton>
            </BackgroundContaineer>
        </BaseeContainer>
    )
  }
}

export default withRouter(Popup);