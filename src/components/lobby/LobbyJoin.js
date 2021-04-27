import React from 'react';
import styled from 'styled-components';
import {Background, BaseeContainer} from '../profile/Profile';
import {withRouter} from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import {
  BaseContainer,
  TopBar,
  BackgroundContainer,
  InputFieldContainer,
  UsernameInputField,
  PasswordInputField,
  ArrowButton,
  LoginButton
} from "../../views/LoginManagement";
import {Button} from "../../views/design/Button";
import {PlayerContainer} from "../leaderboard/PlayerContainerRender";
import Player from "../../views/Player";
import {SpinnerAlt} from "../../views/design/SpinnerAlt";
import * as PropTypes from "prop-types";
import {GoSearch} from "react-icons/go";

const Lobbies = styled.ul`
  list-style: none;
  padding-left: 0;
`;


const LobbyContainer = styled.li`
  height: 50px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  align: center;
  margin-bottom: 55px;
  background: linear-gradient(90deg, rgba(37, 37, 37, 0.6) 7.03%, rgba(166, 166, 166, 0) 100%);
  border: 3px solid #F2AD43;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Name = styled.div`
  font-family: PT Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  /* or 625% */
  
  display: flex;
  margin-top: 7.5px;
  padding-left: 10px;
  align-items: center;
  text-align: center;
  
  color: #FFFFFF;
`;

const Id = styled.div`
  margin-left: auto;
  margin-right: 10px;
  font-weight: bold;
`;

const JoinButton = styled.div`
  &:hover {
  transform: translateY(-5px);
  }
  cursor: pointer;
  margin-top: 25px;
  margin-left: 79%;
  background: #3C3B38;
  font-family: Cornerstone;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: right;
  color: #F2AD43;
  text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
`;

const SearchInputField = styled(UsernameInputField)`

    width: 745px;
    height: 68px;
    text-align: left;
    padding-left: 60px;
    font-size: 30px;
    
`;

const SearchSymbol = styled(GoSearch)`

    color: #252525;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 90px;
    top: 30px;
    
`;

const Number = styled.div`
  margin-top: -24px;
  padding-right: 10px;
  font-family: Cornerstone;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: right;
  color: #F2AD43;
  text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    
`;


const Lobby = ({lobby}) => {
  return (
    <div>
      <Name>{lobby.lobbyName}</Name>
      <Number>{lobby.numbersOfPlayers}/5</Number>
    </div>
  );
}


class LobbyCreate extends React.Component {

  constructor() {
    super();
    this.state = {
      lobbies: null,
      joiningLobby: null
    };
  }

  async join(lobby) {
  try {
     const requestBody = JSON.stringify({
              token: localStorage.getItem('token')
            });
            await api.put(`/lobby/join/${lobby.lobbyId}`, requestBody);
            await new Promise(resolve => setTimeout(resolve, 1000));
      this.props.history.push(`/lobbies/${lobby.lobbyId}`);
   }
   catch (error) {
      alert(`Something went wrong while trying to join the lobby ${handleError(error)}`);
    }


  }

  async componentDidMount() {
    try {
      const request = JSON.stringify({
        token: localStorage.getItem('token')
      });
      const response = await api.get('/lobby/join');
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.setState({lobbies: response.data});
      console.log(response);
    } catch (error) {
      alert(`Something went wrong while fetching the lobbies ${handleError(error)}`);
    }
  }


  render() {
    return (
      <BaseeContainer>
        {!this.state.lobbies ? (
          <SpinnerAlt/>
        ) : (<BaseeContainer>
          <Background>
            <TopBar>LOBBY FINDER</TopBar>
            {/*          <InputFieldContainer>
            <SearchInputField
              placeholder="Search Lobbies..."
              onKeyDown={this.handleKeyDown}
              onChange={e => {
                this.handleInputChange('username', e.target.value);
              }}
            />
            <SearchSymbol></SearchSymbol>
          </InputFieldContainer>*/}
            <Lobbies>
              {this.state.lobbies.map(lobby => {
                return (
                  <LobbyContainer key={lobby.id}>
                    <Lobby lobby={lobby}/>{
                    lobby.numbersOfPlayers < 5 &&
                    <JoinButton onClick={() => {
                      this.join(lobby)
                    }}> Join Lobby </JoinButton>
                  }
                  </LobbyContainer>
                );
              })}
            </Lobbies>
          </Background>
        </BaseeContainer>)}
      </BaseeContainer>

    )
  }


}

export default withRouter(LobbyCreate);