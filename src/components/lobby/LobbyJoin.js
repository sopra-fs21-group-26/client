import React from 'react';
import styled from 'styled-components';
import {Background, BaseeContainer} from '../profile/Profile';
import {withRouter} from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import {
  TopBar,
  UsernameInputField
} from "../../views/LoginManagement";
import {SpinnerAlt} from "../../views/design/SpinnerAlt";
import {GoSearch} from "react-icons/go";
import {AiOutlineReload} from "react-icons/ai";
import BackToMenu from '../../views/design/BackToMenu';

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

const Lobbies = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 100px;
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
  transition: all 0.3s ease;
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
  position: fixed;
  height: 50px;
  width: 70%;
  margin-left: 10%;
  margin-right: auto;
  margin-top: 70px;
  align: center;
  font-size: 30px;
    
`;

const SearchSymbol = styled(GoSearch)`
    position: fixed;
    width: 40px;
    height: 40px;
    position: absolute;
    margin-left: 83%;
    top: 132px;
      filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  &:hover {
  transform: translateY(-5px);
  }
  transition: all 0.3s ease;
  color: #F2AD43;
    
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
const Refresh = styled(AiOutlineReload)`
  position: fixed;
  width: 40px;
  height: 40px;
  margin-left: 92%;
  margin-top: -7.5%;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  &:hover {
  transform: translateY(-5px);
  }
  transition: all 0.3s ease;
  color: #F2AD43;
`


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
      foundLobby: null,
      resultLobby: null,
    };
  }

  async join(lobby) {
  try {
     const requestBody = JSON.stringify({
              token: localStorage.getItem('token')
            });
            await api.put(`/lobby/join/${lobby.lobbyId}`, requestBody);
            await new Promise(resolve => setTimeout(resolve, 1000));


            // TODO

      localStorage.setItem('lobby_ID', lobby.lobbyId);
      localStorage.setItem('inLobby', 'true');

      this.props.history.push(`/lobbies/${lobby.lobbyId}`);
   }
   catch (error) {
      alert(`Something went wrong while trying to join the lobby ${handleError(error)}`);
    }


  }

  refresh(){
    window.location.reload()
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

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
    this.setState({foundLobby: value});

  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.searchLobby();
    }
  }

  async searchLobby(){
    try{
      const response = await api.get(`/lobby/search/${this.state.foundLobby}`);
      this.setState({resultLobby: response.data});
    }
    catch (error){
      alert(`This lobby does not exist: \n${handleError(error)}`);
      this.props.history.push('/lobbies');
    }

  }

  // TODO: Milestone 4, working search field, scroll bar if open lobbies > 4

  render() {
    return (
      <BaseeContainer>
        {!this.state.lobbies ? (
          <SpinnerAlt/>
        ) : (<BaseeContainer>
          <Background>
            <TopBar>LOBBY FINDER</TopBar>


            <SearchSymbol></SearchSymbol>
            <Lobbies>
              <div>
                <Refresh onClick={() => {
                  this.refresh();
                }}></Refresh>
              <SearchInputField
                placeholder="Search Lobbies..."
                onKeyDown={this.handleKeyDown}
                onChange={e => {
                  this.handleInputChange('lobbyName', e.target.value);
                }}>
              </SearchInputField>
              </div>

              {!this.state.resultLobby ? (
                <div>
                {this.state.lobbies.map(lobby => {
                  return (
                    <LobbyContainer>
                      <Lobby lobby={lobby}/>{
                      lobby.numbersOfPlayers < 5 &&
                      <JoinButton onClick={() => {
                        this.join(lobby)
                      }}> Join Lobby </JoinButton>
                    }
                    </LobbyContainer>
                  );
                })}
                </div>) : (
                <LobbyContainer>
                  <Lobby lobby={this.state.resultLobby}/>
                  <JoinButton onClick={() => {
                    this.join(this.state.resultLobby)
                  }}> Join Lobby </JoinButton>
                </LobbyContainer>

                )}

            </Lobbies>
          </Background>
          <BackToMenuButton onClick = {() => {this.props.history.push(`/menu`)}}>
            <BackToMenu/>
          </BackToMenuButton>
        </BaseeContainer>)}
      </BaseeContainer>

    )
  }


}

export default withRouter(LobbyCreate);