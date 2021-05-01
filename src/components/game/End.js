import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import "./style.css";
import BackToMenu2 from '../../views/design/BackToMenu2';
import PlayAgain from "../../views/design/PlayAgain";

const BaseContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`;

const BackToMenuButton = styled.div`
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;

`;

const ButtonWrapper = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    bottom: 0%;
    width: 50%;
    height: 30%;
    
`;

const PlayAgainButton = styled.div`

    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
`;

class End extends React.Component{

    constructor(){
        super();
    }

    componentDidMount() {}

    async unregisterClientMenu(){
        const { match: { params } } = this.props;
        await api.put(`/lobbies/${params.lobbyId}/end-game`)
        this.props.history.push(`/menu`)
    }

    async unregisterClientPlay(){
        const { match: { params } } = this.props;
        await api.put(`/lobbies/${params.lobbyId}/end-game`)
        this.props.history.push(`/play`)
    }

    render(){
        return(
            <BaseContainer>
                <div className="stage">
                    <div className="box bounce-6"> Thank you for playing the first prototype of Pictures!</div>
                </div>
                <ButtonWrapper>
                    <BackToMenuButton onClick={ () => {this.unregisterClientMenu()}}>
                        <BackToMenu2/>
                    </BackToMenuButton>
                    <PlayAgainButton onClick={ () => {this.unregisterClientPlay()}}>
                        <PlayAgain/>
                    </PlayAgainButton>

                </ButtonWrapper>
            </BaseContainer>
        )
    }
}

export default withRouter(End);