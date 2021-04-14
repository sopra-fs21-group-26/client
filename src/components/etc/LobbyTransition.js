import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import { BaseeContainer } from '../profile/Profile';
import CreateLobby from '../../views/design/CreateLobby';
import JoinLobby from '../../views/design/JoinLobby';
import BackToMenu from '../../views/design/BackToMenu';

const Button = styled.div`

    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    height: 35px;

`;

const ButtonContainer = styled.div`

    width: 60%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
`;

const BackToMenuButton = styled.div`

    height: 35px;
    position: absolute;
    top: 30px;
    left: 30px;
    &:hover{
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
`;



function LobbyTransition(props){
    return(
        <BaseeContainer>

            <ButtonContainer>

                <Button onClick = {() => {props.history.push(`/lobby/create`)}}>
                    <CreateLobby/>
                </Button>

                <Button onClick = {() => {props.history.push(`/lobbies`)}}>
                    <JoinLobby/>
                </Button>

            </ButtonContainer>
            <BackToMenuButton onClick = {() => {props.history.push(`/menu`)}}>
                <BackToMenu/>
            </BackToMenuButton>


        </BaseeContainer>
    );
}

export default withRouter(LobbyTransition);