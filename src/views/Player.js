import React from "react";
import styled from "styled-components";
import {BsCheck} from "react-icons/bs";
import {VscError} from "react-icons/vsc";
import {api} from "../helpers/api";
import ReadyButton from "../views/design/ReadyButton";

const PlayerWrapper = styled.div`
    
    width: 90%;
    height: 12%;
    border: 2px solid red;
    display: flex;
    justify-content: space-evenly;;
    align-items: center;
    flex-direction: row;

`;

const PlayerBar = styled.div`
    width: 70%;
    height: 70%;
    background: linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100%);
    border: 3px solid #F2AD43;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
    padding-left: 5%;
    padding-right: 5%;
    
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #FFFFFF;
`;

const NotReadySymbol = styled(VscError)`
    
    color: #C75858;
    
`;

const ReadySymbol = styled(BsCheck)`

    color: #56CB62
    
`;

const ReadyButtonStyled = styled.div`

    &:hover{
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
`;

class Player extends React.Component{

    interval = this.intervalSetter();

    constructor(){
        super();
        this.state={
            isReady: null
        }
    }


    componentDidMount(){}

    intervalSetter(){
        const thisBoundedGetReadyStatus = this.getReadyStatus.bind(this);
        setInterval(thisBoundedGetReadyStatus, 3000);

    }

    async getReadyStatus(){
        const response = await api.get(`/lobby/${this.props.lobbyId}`);
        this.setState({isReady: response.data.playersInLobby[0].playerStatus})
        console.log(this.state.isReady)

    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    async setReady(){

        const requestBody = JSON.stringify({
            token: localStorage.getItem('token')
        });
        await api.put(`/lobby/ready/${this.props.lobbyId}`, requestBody);
    }


    render(){
        if(this.state.isReady !== "READY"){
            return (
                <PlayerWrapper>
                    <PlayerBar>
                        <div>{this.props.user.username}</div>
                        <NotReadySymbol></NotReadySymbol>
                    </PlayerBar>
                    <ReadyButtonStyled onClick = {() => {this.setReady()}}>
                        <ReadyButton></ReadyButton>
                    </ReadyButtonStyled>
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
                </PlayerWrapper>
            )
        }
    }
}
export default Player;


// <ReadyButtonStyled onClick = { () => {this.setReady()}}>
//     <ReadyButton></ReadyButton>
// </ReadyButtonStyled>