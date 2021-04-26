import React from 'react';
import styled from 'styled-components';
import { BaseeContainer } from '../profile/Profile';
import { withRouter } from 'react-router-dom';
import {TopBar, BackgroundContainer, InputFieldContainer, UsernameInputField, PasswordInputField, ArrowButton, LoginButton} from "../../views/LoginManagement";

class Lobby extends React.Component{


    constructor(){
        super();
        this.state={
            ID: null
        }
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        this.setState({ID: params.lobbyId});
    }

    render(){
        return(
            <BaseeContainer>
                <BackgroundContainer>
                    <TopBar>Lobby {this.state.ID}</TopBar>
                </BackgroundContainer>

            </BaseeContainer>
        );
    }
}

export default withRouter(Lobby);