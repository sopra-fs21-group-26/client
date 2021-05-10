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
import Popup from "./Popup";

// Reworked
const MenuContainer = styled(Container)`

    height: 27.69%;
`;

// Reworked
const PlayButton = styled.div` 
    
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

// Reworked
const LeaderboardsButton = styled(PlayButton)`

    color: #7E7E7E;
 
`;

// Reworked
const TutorialButton = styled(PlayButton)`
    
    color: #FFFFFF;
    
`;

// Reworked
const UserButton = styled(AiOutlineUser)`
    
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
    
    position: absolute;
    bottom: 50%;
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
const LogoutButton = styled(IoMdLogOut)`

    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
    
    position: absolute;
    bottom: 39%;
    right: 3.67%;
    width: 2.36%;
    height: 4.80%;
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
`;

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

      localStorage.removeItem('token');
      localStorage.removeItem('userID');
      localStorage.removeItem('username');
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
        <Header height={"38.75"}/>
        <MenuContainer>

          <PlayButton
            onClick={() => {
                this.props.history.push(`/play`);
            }}>
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

/*const CloseButton = styled(PlayButton)`

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
    /!* or 417% *!/

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
`;*/