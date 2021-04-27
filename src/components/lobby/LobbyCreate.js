import React from 'react';
import styled from 'styled-components';
import { BaseeContainer } from '../profile/Profile';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import {BaseContainer, TopBar, BackgroundContainer, InputFieldContainer, UsernameInputField, PasswordInputField, ArrowButton, LoginButton} from "../../views/LoginManagement";

class LobbyCreate extends React.Component{

    constructor(){
        super();
        this.state={
            lobbyName: null,
            lobby: null
        }
    }

    componentDidMount() {}

    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({ [key]: value });
    }

    async createLobby(){
        try{
            const requestBody = JSON.stringify({
                token: localStorage.getItem('token')
            });

            const response = await api.post(`/lobby/create/${this.state.lobbyName}`, requestBody);

            this.setState({lobby: response.data});

            this.props.history.push(`/lobbies/${this.state.lobby.lobbyId}`)
        }

        catch(error){
            alert(`Something went wrong: \n${handleError(error)}`);
        }
    }

    render () {
        return(
            <BaseeContainer>
                <BackgroundContainer>
                    <TopBar> Create Lobby </TopBar>
                    <InputFieldContainer>

                        <UsernameInputField
                            placeholder="Enter Lobbyname..."
                            onChange={e => {
                                this.handleInputChange('lobbyName', e.target.value);
                            }}
                        />
                        <ArrowButton onClick={ () => {this.props.history.push("/play")}}/>
                        <LoginButton disabled={!this.state.lobbyName}
                                     onClick={() => {
                                         this.createLobby();
                                     }}
                        />

                    </InputFieldContainer>
                </BackgroundContainer>
            </BaseeContainer>
        );
    }
}

export default withRouter(LobbyCreate);