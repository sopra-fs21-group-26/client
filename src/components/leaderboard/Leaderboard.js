import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import { BaseeContainer } from '../profile/Profile';
import { TopBar, BackgroundContainer, UsernameInputField } from "../../views/LoginManagement";
import { BackToMenuButton } from "../profile/Profile";
import { GoSearch } from "react-icons/go";
import {Spinner} from "../../views/design/Spinner";
import PlayerContainerRender from "../leaderboard/PlayerContainerRender";
import {Player, PlayerInfo} from "../leaderboard/PlayerContainerRender";
import BackToMenu from "../../views/design/BackToMenu";
import {SpinnerAlt} from "../../views/design/SpinnerAlt";

const Background = styled(BackgroundContainer)`

    width: 900px;
    height: 850px;
    transform: scale(0.72);
    position: relative;
    top: 20px;

`;

const InputFieldContainer = styled.div`

    display: flex;
    justify-content: center;
    position: relative;
    top: 25px;
    height: 100px;
    align-items: center;
    
`;

const SearchInputField = styled(UsernameInputField)`

    width: 745px;
    height: 68px;
    text-align: left;
    padding-left: 60px;
    font-size: 30px;
    
`;

const HeadingContainer = styled.div`
    
    position: absolute;
    top: 200px;
    height: 75px;
    left: 155px;
    width: 580px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    

`;

const Heading = styled.div`
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    
    color: #FFF58F;
`;

const SearchSymbol = styled(GoSearch)`

    color: #252525;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 90px;
    top: 30px;
    
`;

const PlayerContainer = styled.div`

    display: flex;
    justify-content: center;
    position: relative;
    top: 78px;
`;

class Leaderboard extends React.Component {


    constructor() {
        super();
        this.state = {
            users: null,
            username: null,
            foundUser: null
        };
    }

    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({ [key]: value });
        this.setState({foundUser: null});

    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.searchPlayer();
        }
    }

    async searchPlayer(){
        try{
            const response = await api.get(`/players/search/${this.state.username}`);
            this.setState({foundUser: response.data});
        }
        catch (error){
            alert(`This user does not exist: \n${handleError(error)}`);
            this.props.history.push('/leaderboard');
        }

    }
    async componentDidMount(){

        try {

            const response = await api.get(`/players/leaderboard`);

            await new Promise(resolve => setTimeout(resolve, 1000));

            this.setState({users: response.data});

        } catch (error) {
            alert(`Something went wrong while fetching the leaderboards: \n${handleError(error)}`);
            this.props.history.push('/menu');
        }

    }

    render(){

        if(this.state.foundUser){
            return(
                <BaseeContainer>

                    {!this.state.users ? (
                        <Spinner />
                    ) : (
                        <div>
                            <Background>
                                <TopBar>LEADERBOARDS</TopBar>
                                <InputFieldContainer>
                                    <SearchInputField
                                        placeholder="Search Player..."
                                        onKeyDown={this.handleKeyDown}
                                        onChange={e => {
                                            this.handleInputChange('username', e.target.value);
                                        }}
                                    />
                                    <SearchSymbol></SearchSymbol>
                                </InputFieldContainer>
                                <PlayerContainer>
                                    <Player onClick = { () => {this.props.history.push(`/players/${this.state.foundUser.id}`)}}>
                                        <PlayerInfo>{this.state.foundUser.username}</PlayerInfo>
                                        <PlayerInfo>{this.state.foundUser.score}</PlayerInfo>
                                    </Player>
                                </PlayerContainer>

                                <HeadingContainer>
                                    <Heading>Username</Heading>
                                    <Heading>ELO Score</Heading>
                                </HeadingContainer>
                            </Background>
                            <BackToMenuButton onClick = { () => {this.props.history.push('/menu')}}>
                                <BackToMenu/>
                            </BackToMenuButton>
                        </div>
                    )}

                </BaseeContainer>
            );
        }

        else{
            return(
                <BaseeContainer>

                    {!this.state.users ? (
                        <SpinnerAlt />
                    ) : (
                        <div>
                            <Background>
                                <TopBar>LEADERBOARDS</TopBar>
                                <InputFieldContainer>
                                    <SearchInputField
                                        placeholder="Search Player..."
                                        onKeyDown={this.handleKeyDown}
                                        onChange={e => {
                                            this.handleInputChange('username', e.target.value);
                                        }}
                                    />
                                    <SearchSymbol></SearchSymbol>
                                </InputFieldContainer>

                                {/*Render player container via functional component*/}

                                <PlayerContainerRender users={this.state.users} history={this.props.history}></PlayerContainerRender>

                                <HeadingContainer>
                                    <Heading>Username</Heading>
                                    <Heading>ELO Score</Heading>
                                </HeadingContainer>
                            </Background>
                            <BackToMenuButton onClick = { () => {this.props.history.push('/menu')}}>
                                <BackToMenu/>
                            </BackToMenuButton>
                        </div>
                    )}

                </BaseeContainer>

            );
        }
    }
}

export default withRouter(Leaderboard);