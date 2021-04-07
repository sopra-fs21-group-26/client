import React from "react";
import styled from 'styled-components';

export const PlayerContainer = styled.div`
    height: 650px;
    display: flex;
    position: relative;
    top: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Player = styled.div`

    width: 619px;
    height: 61px;
    
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    
    background: linear-gradient(90deg, rgba(37, 37, 37, 0.6) 0%, #252525 0.01%, rgba(166, 166, 166, 0) 99.99%, rgba(255, 255, 255, 0) 100%);
    border: 3px solid #F2AD43;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 25px;
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
`;

export const PlayerInfo = styled.div`

    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #FFFFFF;
`;

const FirstPlayer = styled(Player)`
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.6) 0%, rgba(37, 37, 37, 0) 100%);
`;

const SecondPlayer = styled(Player)`
    background: linear-gradient(90deg, rgba(198, 193, 193, 0.6) 0%, rgba(37, 37, 37, 0) 100%);
`;

const ThirdPlayer = styled(Player)`
    background: linear-gradient(90deg, rgba(206, 135, 65, 0.6) 0%, rgba(37, 37, 37, 0) 100%);
`;

function PlayerContainerRender(props){


    return(
        <PlayerContainer>
            <FirstPlayer onClick = { () => {props.history.push(`/players/${props.users[0].id}`)}}>
                <PlayerInfo>{props.users[0].username}</PlayerInfo>
                <PlayerInfo>{props.users[0].score}</PlayerInfo>
            </FirstPlayer>
            <SecondPlayer onClick = { () => {props.history.push(`/players/${props.users[1].id}`)}}>
                <PlayerInfo>{props.users[1].username}</PlayerInfo>
                <PlayerInfo>{props.users[1].score}</PlayerInfo>
            </SecondPlayer>
            <ThirdPlayer onClick = { () => {props.history.push(`/players/${props.users[2].id}`)}}>
                <PlayerInfo>{props.users[2].username}</PlayerInfo>
                <PlayerInfo>{props.users[2].score}</PlayerInfo>
            </ThirdPlayer>
            <Player onClick = { () => {props.history.push(`/players/${props.users[3].id}`)}}>
                <PlayerInfo>{props.users[3].username}</PlayerInfo>
                <PlayerInfo>{props.users[3].score}</PlayerInfo>
            </Player>
            <Player onClick = { () => {props.history.push(`/players/${props.users[4].id}`)}}>
                <PlayerInfo>{props.users[4].username}</PlayerInfo>
                <PlayerInfo>{props.users[4].score}</PlayerInfo>
            </Player>
        </PlayerContainer>
    );



}

export default PlayerContainerRender;