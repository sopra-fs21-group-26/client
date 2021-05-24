import React from "react";
import styled from "styled-components";
import {BsCheck, BsStar} from "react-icons/bs";
import {VscError} from "react-icons/vsc";
import {api} from "../helpers/api";
import ReadyButton from "../views/design/ReadyButton";
import {AiOutlineUser} from 'react-icons/ai';


const PlayerWrapper = styled.div`

    position: relative;
    width: 100%;
    height: 8%;
    
    display: flex;
    justify-content: space-evenly;;
    align-items: center;

`;

const PlayerBar = styled.div`

    width: 55%;
    height: 85%;
    background: linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100%);
    border: 3px solid #F2AD43;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
    padding-left: 3%;
    padding-right: 3%;
    
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #FFFFFF;
`;

const NotReadySymbol = styled(VscError)`
    
    color: #C75858;
    
`;

const ReadySymbol = styled(BsCheck)`

    color: #56CB62
    
`;

const ReadyButtonStyled = styled.div`

    position: absolute;
    right: 4%;
    top: 25%;

    &:hover{
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
`;

const AdminIconStyled = styled(BsStar)`

    position: absolute;
    left: 13%;
    top: 33%;
    color: #F2AD43;

`;

const PlayerIconStyled = styled(AiOutlineUser)`

    position: absolute;
    left: 18%;
    top: 33%;
    color: #F2AD43;

`;

class Player extends React.Component{


    constructor(){
        super();
        this.state={
            isReady: null
        }
    }

    async setReady(){

        const requestBody = JSON.stringify({
            token: localStorage.getItem('token')
        });

        await api.put(`/lobby/ready/${this.props.lobbyId}`, requestBody);
    }


    render(){
        if(this.props.user.playerStatus !== "READY"){
            return (
                <PlayerWrapper>
                    <PlayerBar>
                        <div>{this.props.user.username}</div>
                        <NotReadySymbol></NotReadySymbol>
                    </PlayerBar>
                    {this.props.user.username === localStorage.getItem('username') ? (
                        <ReadyButtonStyled onClick = {() => {this.setReady()}}>
                            <ReadyButton></ReadyButton>
                        </ReadyButtonStyled>

                    ) : ("")}
                    {this.props.user.username === this.props.adminUsername ? (
                        <AdminIconStyled/>
                    ) : ("")}
                    {this.props.user.username === localStorage.getItem('username') ? (
                        <PlayerIconStyled/>
                    ) : ("")}
                </PlayerWrapper>
            );
        }
        else{
            return(
                <PlayerWrapper>
                    <PlayerBar>
                        <div>{this.props.user.username}</div>
                        <ReadySymbol></ReadySymbol>
                    </PlayerBar>
                    {this.props.user.username === this.props.adminUsername ? (
                        <AdminIconStyled/>
                    ) : ("")}
                    {this.props.user.username === localStorage.getItem('username') ? (
                        <PlayerIconStyled/>
                    ) : ("")}
                </PlayerWrapper>
            )
        }
    }
}
export default Player;

