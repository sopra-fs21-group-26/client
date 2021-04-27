import React from 'react';
import styled from 'styled-components';
import { BaseeContainer } from '../profile/Profile';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import {TopBar, BackgroundContainer, ArrowButton} from "../../views/LoginManagement";

const PlayerContainer = styled.div`

    border: 2px solid red;
    height: 82%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
`;

const PlayerBar = styled.div`
    
    width: 60%;
    height: 10%;
    background: linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100%);
    border: 3px solid #F2AD43;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #FFFFFF;

`;

class Lobby extends React.Component{

    constructor(){
        super();
        this.state={
            lobbyName: null,
            users: null
        }
    }

    async componentDidMount(){

        const { match: { params } } = this.props;
        const response = await api.get(`/lobby/${params.lobbyId}`);
        this.setState({lobbyName: response.data.lobbyName});
        this.setState({users: response.data.playersInLobby});

        const thisBoundedGetPlayers = this.getPlayers.bind(this);
        setInterval(thisBoundedGetPlayers, 1000);
    }

    async getPlayers(){

        const { match: { params } } = this.props;
        const response = await api.get(`/lobby/${params.lobbyId}`);
        this.setState({users: response.data.playersInLobby});
        console.log(this.state.users);

    }

    render(){
        return(
            <BaseeContainer>
                <BackgroundContainer>
                    <TopBar>{this.state.lobbyName}</TopBar>
                    {!this.state.users ? (
                        ""
                    ) : (
                        <PlayerContainer>
                            {this.state.users.map(user => {
                                return(
                                    <PlayerBar>{user.username}</PlayerBar>
                                )
                            })}
                        </PlayerContainer>
                    )}
                </BackgroundContainer>
            </BaseeContainer>
        );
    }
}

export default withRouter(Lobby);
