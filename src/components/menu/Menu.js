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

    position: relative;
    margin-top: -20px;
    left: -20%;

    
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
    width: 932px;
    height: 782px;
    left: 254px;
    top: 121px;
    
    background: #3C3B38;
    border-radius: 20px;
    
`;

const BackdropContainer = styled(Container)`
    
  position: absolute;
  width: 100%;
  top: 0px;
  bottom: 10px;
  
  background: #252525;
  filter: blur(10px);
    
`;

const PopupHeaderContainer = styled(Container)`
      
    position: absolute;
    width: 932px;
    height: 98px;
    left: 254px;
    top: 121px;
    
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
          <CloseButton onClick={this.props.closePopup}>Back To Menu</CloseButton>
      </PopupContainer>
        <PopupHeaderContainer>
          <TutorialHeader>Welcome To The Tutorial</TutorialHeader>
          </PopupHeaderContainer>
      </div>
    )
  }
}

class Menu extends React.Component {

  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  async logout() {
    try {
      const requestBody = JSON.stringify({
        token: localStorage.getItem('token')
      });

      await api.put('/logout', requestBody);
      console.log()

      localStorage.removeItem('token');
      localStorage.removeItem('userID')
      this.props.history.push('/');

    } catch (error) {
      alert(`Something went wrong during the logout: \n${handleError(error)}`);
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {

    return (
      <BaseContainer>
        <Header height={"400"}/>
        <MenuContainer>

          <PlayButton>
            PLAY
          </PlayButton>
          <LeaderboardsButton
            onClick={() => {
              this.props.history.push(`/leaderboard`);
            }}>
            LEADERBOARDS
          </LeaderboardsButton>
          <TutorialButton onClick={this.togglePopup.bind(this)}>
            TUTORIAL
          </TutorialButton>

        </MenuContainer>

        <UserButton
          data-tip
          data-for="userTip"
          onClick={() => {
            this.props.history.push(`/players/${localStorage.getItem('userID')}`);
          }}/>
        <ReactTooltip class="buttonTooltip" textColor="#252525" backgroundColor="#F2AD43" id="userTip" place="top"
                      effect="solid">
          My Profile
        </ReactTooltip>

        <LogoutButton data-tip
                      data-for="logoutTip"
                      onClick={() => {
                        this.logout();
                      }}
        />
        {this.state.showPopup ?
          <Popup
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        <ReactTooltip class="buttonTooltip" textColor="#252525" backgroundColor="#F2AD43" id="logoutTip" place="top"
                      effect="solid">
          Logout
        </ReactTooltip>
        <InfoModal></InfoModal>

      </BaseContainer>
    );
  }
}

export default withRouter(Menu);