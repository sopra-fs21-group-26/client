import React from 'react';
import styled from 'styled-components';
import Header from "../../views/Header";
import {BaseContainer} from '../../helpers/layout';
import {Container} from "../home/Home";
import {withRouter} from 'react-router-dom';
import {AiOutlineUser} from 'react-icons/ai';
import {IoMdLogOut} from 'react-icons/io';
import ReactTooltip from 'react-tooltip';
import InfoModal from '../modals/InfoModal';
import '../../views/design/tooltip.css'
import {api, handleError} from "../../helpers/api";
import User from "../shared/models/User";
import {Backdrop} from "@material-ui/core";

const MenuContainer = styled(Container)`

    height: 250px;
`;

const PlayButton = styled.div` 
    
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

const LeaderboardsButton = styled(PlayButton)`

    color: #7E7E7E;
 
    
`;

const TutorialButton = styled(PlayButton)`
    
    color: #FFFFFF;
    
`;

const CloseButton = styled(PlayButton)`
    
    color: #FFFFFF;
    position: relative;
    bottom: 20px;
    
`;

const TutorialHeader = styled(Container)`

    position: absolute;
    margin-top: -20px;
    left: 2%;

    
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 150px;
    /* or 417% */
    
    align-items: left;
    text-align: left;
    
    color: #252525;
`;


const PopupContainer = styled(Container)`
        
    position: absolute;
    width: 80%;
    height: 85%;
    left: 10%;
    top: 10px;
    
    background: #3C3B38;
    border-radius: 20px;
    
`;

const PopupHeaderContainer = styled(Container)`
      
    position: absolute;
    width: 80%;
    height: 10%;
    left: 10%;
    top: 10px;
    
    background: #F2AD43;
    border-radius: 20px 20px 0px 0px;
`;

const UserButton = styled(AiOutlineUser)`
    
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
    
    position: absolute;
    bottom: 50%;
    right: 70px;
    width: 45px;
    height: 45px;
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
`;

const LogoutButton = styled(IoMdLogOut)`

    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
    
    position: absolute;
    bottom: 39%;
    right: 70px;
    width: 45px;
    height: 45px;
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
`;

class Popup extends React.Component {
  render() {
    return (
      <div>
        <PopupContainer className='popup'>
          <h1>{this.props.text}</h1>
          <PlayButton
            onClick={() => {
              this.props.history.push(`/SetTest`);
            }}>
            SET 5 TEST
          </PlayButton>
          <CloseButton onClick={this.props.closePopup}>Back To Menu</CloseButton>
        </PopupContainer>
        <PopupHeaderContainer>
          <TutorialHeader>Welcome To The Tutorial</TutorialHeader>
        </PopupHeaderContainer>
      </div>
    )
  }
}

export default withRouter(Popup);