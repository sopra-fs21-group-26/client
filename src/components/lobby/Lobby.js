import React from 'react';
import styled from 'styled-components';
import { BaseeContainer } from '../profile/Profile';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import {TopBar, BackgroundContainer, ArrowButton} from "../../views/LoginManagement";
import Player from "../../views/Player";
import StartGameButton from '../../views/design/StartGameButton';

const PlayerContainer = styled.div`
    
    position: relative;
    height: 82%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
`;

export const StartGameButtonWrapper = styled.div`
    
    position: absolute;
    bottom: 3%;
    &:hover {
    transform: ${props => (props.disabled ? "translateY(0px)" : "translateY(-5px)")}
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
    cursor: ${props => (props.disabled ? "default" : "pointer")};
    opacity: ${props => (props.disabled ? 0.4 : 1)};

`;


class Lobby extends React.Component{

    interval = this.intervalSetter();


    ID = null;

    constructor(){
        super();
        this.state={
            lobbyName: null,
            users: null,
            isAdmin: null,
            adminUsername: null,
            playersInLobby: null,
            allPlayersReady: null
        }
    }

    async componentDidMount(){

        const { match: { params } } = this.props;
        this.ID = params.lobbyId;
        const response = await api.get(`/lobby/${params.lobbyId}`);
        this.setState({lobbyName: response.data.lobbyName});
        this.setState({users: response.data.playersInLobby});

        console.log(response.data)

        this.setState({adminUsername: response.data.admin.username});

        if(response.data.admin.token === localStorage.getItem('token')){
            this.setState({isAdmin: true})
        }

    }

    intervalSetter(){
        const thisBoundedGetPlayers = this.getPlayers.bind(this);
        return setInterval(thisBoundedGetPlayers, 3000);

    }

    async getPlayers(){

        const { match: { params } } = this.props;
        const response = await api.get(`/lobby/${params.lobbyId}`);
        this.setState({users: response.data.playersInLobby});
        this.setState({playersInLobby: response.data.numbersOfPlayers});
        console.log(this.state.users);
        if(response.data.admin.playerStatus === "PLAYING"){
            this.props.history.push("/testgame")
        }
        this.allPlayersReady();
    }
    

    async startGame(){

        const { match: { params } } = this.props;

        const requestBody = JSON.stringify({
            token: localStorage.getItem('token')
        });

        const response = await api.put(`/lobby/start/${params.lobbyId}`, requestBody);


    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    async allPlayersReady(){
        let playersReady = 0;
        let players = this.state.users;

        players.forEach(countReady);

        function countReady(value){
            if(value.playerStatus === "READY"){
                playersReady = playersReady + 1;
            }
        }

        if(playersReady === this.state.playersInLobby && this.state.playersInLobby >= 2){
            this.setState({allPlayersReady: true});
        }

        else{
            this.setState({allPlayersReady: false});
        }

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
                            {this.state.isAdmin ? (
                                <StartGameButtonWrapper disabled={!this.state.allPlayersReady} onClick = { () => {this.startGame()}}>
                                    <StartGameButton/>
                                </StartGameButtonWrapper>
                            ) : ("")}
                            {this.state.users.map(user => {
                                return(
                                    <Player adminUsername={this.state.adminUsername} user={user} lobbyId={this.ID}/>
                                )
                            })}
                        </PlayerContainer>

                    )}
                </BackgroundContainer>
            </BaseeContainer>
        )

    }
}

export default withRouter(Lobby);
