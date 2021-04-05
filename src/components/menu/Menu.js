import React from 'react';
import styled from 'styled-components';
import Header from "../../views/Header";
import { BaseContainer } from '../../helpers/layout';
import {Container} from "../home/Home";
import { withRouter } from 'react-router-dom';
import {AiOutlineUser} from 'react-icons/ai';
import {IoMdLogOut} from 'react-icons/io';
import ReactTooltip from 'react-tooltip';
import InfoModal from '../modals/InfoModal';
import '../../views/design/tooltip.css'

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

const UserButton =  styled(AiOutlineUser)`
    
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


class Menu extends React.Component {

    logout() {

        localStorage.removeItem('token');
        localStorage.removeItem('userID');

        this.props.history.push('/');
    }

    render(){

        return(
            <BaseContainer>
                <Header height={"400"}/>

                <MenuContainer>

                    <PlayButton>
                        PLAY
                    </PlayButton>
                    <LeaderboardsButton
                        onClick = { () => {
                        this.props.history.push(`/leaderboard`);
                    }}>
                        LEADERBOARDS
                    </LeaderboardsButton>
                    <TutorialButton>
                        TUTORIAL
                    </TutorialButton>

                </MenuContainer>

                <UserButton
                    data-tip
                    data-for="userTip"
                    onClick = { () => {
                    this.props.history.push(`/players/${localStorage.getItem('userID')}`);
                }} />
                <ReactTooltip class ="buttonTooltip" textColor="#252525" backgroundColor="#F2AD43" id="userTip" place="top" effect="solid">
                    My Profile
                </ReactTooltip>

                <LogoutButton data-tip
                              data-for="logoutTip"
                              onClick={() => {
                                  this.logout();
                              }}
                />
                <ReactTooltip class ="buttonTooltip" textColor="#252525" backgroundColor="#F2AD43" id="logoutTip" place="top" effect="solid">
                    Logout
                </ReactTooltip>
                <InfoModal></InfoModal>

            </BaseContainer>
        );
    }
}

export default withRouter(Menu);