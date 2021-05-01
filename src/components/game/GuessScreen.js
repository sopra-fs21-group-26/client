import React from "react";
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import Player from '../../views/Player';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';
import {BaseeContainer} from "../profile/Profile";
import {SpinnerAlt} from "../../views/design/SpinnerAlt";
import CanvasDraw from "react-canvas-draw";

const GridContainer = styled.div`
  margin-bottom: 100px;
  height: 480px;
  width: 500px;
  box-sizing: border-box;
`;

const Picture = styled.img`
  height: 120px;
  width: 120px;
  border: 2px solid #F2AD43;
  box-sizing: border-box;
  padding: 5px;
`;

const LabelCircle = styled.div`

    height: 100px;
    width: 100px;
    float: left;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

const LeftLabelCircleA = styled.div`

    height: 100px;
    width: 100px;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-top: 140px;
    margin-left: -140px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

const LeftLabelCircleB = styled.div`

    height: 100px;
    width: 100px;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-top: 264px;
    margin-left: -140px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

const LeftLabelCircleC = styled.div`

    height: 100px;
    width: 100px;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-top: 388px;
    margin-left: -140px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

const LeftLabelCircleD = styled.div`

    height: 100px;
    width: 100px;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-top: 512px;
    margin-left: -140px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

export const BasedContainer = styled(BaseeContainer)`
    
    position: absolute;
    left: 10%;
        
`;

export const BasedContainer2 = styled(BaseeContainer)`
    
    position: absolute;
    left: 50%;
        
`;

const Recreation = styled(CanvasDraw)`
      position: absolute;
      top: 20%;
      float: left;
`;

const Username = styled.div` 
    
    transition: all 0.3s ease;
    width: 120px;
    position: absolute;
    cursor: pointer;
    top: 37%;
    float: left;
    text-align: center;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #FFFFFF;
      &:hover {
  transform: translateY(-5px);
  }
    shadow: 2px;
    
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    
`;

const DoneName = styled.div` 
    
    transition: all 0.3s ease;
    width: 120px;
    cursor: pointer;
    float: left;
    text-align: center;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #F2AD43;
    shadow: 2px;
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    
`;


const Pictures = styled.img`
  height: 120px;
  width: 120px;
  border: 2px solid #F2AD43;
  box-sizing: border-box;
  padding: 5px;
  cursor: pointer;
  &:hover {
  transform: translateY(-5px);
  }
  transition: all 0.3s ease;
`;

class GuessScreen extends React.Component {

  interval = this.intervalSet();

  async checkAllGuessed() {
    try {
      const {match: {params}} = this.props;
      this.ID = params.lobbyId;
      const response = await api.get(`/games/allGuessed/${params.lobbyId}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.setState({allGuessed: response.data});
      if (this.state.allGuessed) {
        this.props.history.push(`/game/${params.lobbyId}/scoresheet`);
      }
    } catch (error) {
      alert(`Something went wrong while fetching the guessed status: \n${handleError(error)}`);
    }

  }

  constructor() {
    super();
    this.state = {
      guess: null,
      grid: null,
      guessingName: null,
      coordinate: null,
      doneGuesses: [],
      playerCount: 0,
      allGuessed: null,
    };
  }

  countPlayers(){
    let playerCount = 0;
    for(let user in this.state.guess.usernames){
      playerCount = playerCount + 1;
    }
    this.setState({playerCount: playerCount});
  }

  async componentDidMount(){
    try {
      const { match: { params } } = this.props;
      this.ID = params.lobbyId;
      const requestBody = JSON.stringify({
        token: localStorage.getItem('token')
      });
      const response = await api.put(`/games/guessScreen/${params.lobbyId}`, requestBody);
      await new Promise(resolve => setTimeout(resolve, 50));
      const responseGrid = await api.get(`/games/${params.lobbyId}/grid`);
      await new Promise(resolve => setTimeout(resolve, 50));
      this.setState({ guess: response.data });
      this.setState({ grid: responseGrid.data });
      this.countPlayers();
    } catch (error) {
      alert(`Something went wrong while fetching the picture: \n${handleError(error)}`);
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  intervalSet(){
    const confirmDoneGuesses = this.checkAllGuessed.bind(this);
    return setInterval(confirmDoneGuesses, 1000);

  }

  async guess(){
    try {
      const { match: { params } } = this.props;
      this.ID = params.lobbyId;
      console.log(this.state.guessingName);
      const requestBody = JSON.stringify({
        token: localStorage.getItem('token'),
        username: this.state.guessingName,
      });
      console.log(this.state);
      await api.put(`/games/correctGuess/${params.lobbyId}/${this.state.coordinate}`, requestBody);
      await new Promise(resolve => setTimeout(resolve, 50));
      this.state.doneGuesses.push(this.state.guessingName);
      console.log(this.state.coordinate, this.state.guessingName);
      this.setState({
        guessingName: null,
        coordinate: null
      })
      if(this.state.doneGuesses.length === this.state.playerCount){
        const requestGuessed = JSON.stringify({
          token: localStorage.getItem('token'),
        });
        await api.put(`/games/guess`, requestGuessed);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    } catch (error) {
      alert(`Something went wrong while fetching the picture: \n${handleError(error)}`);
    }

  }


  render(){
    return (
      <div>
      <BasedContainer>
        {!this.state.grid ? (
          <SpinnerAlt/>
        ) : (
          <div>
            <LeftLabelCircleA>A</LeftLabelCircleA>
            <LeftLabelCircleB>B</LeftLabelCircleB>
            <LeftLabelCircleC>C</LeftLabelCircleC>
            <LeftLabelCircleD>D</LeftLabelCircleD>
            <GridContainer>
              <div>
                <LabelCircle>1</LabelCircle>
                <LabelCircle>2</LabelCircle>
                <LabelCircle>3</LabelCircle>
                <LabelCircle>4</LabelCircle>
              </div>
              {this.state.grid.map(picture => {
                return (
                  <Pictures
                    src={`${picture.url}&fit=crop&w=800&h=800`}
                    onClick={() =>(
                      this.setState({coordinate:picture.coordinate}),
                      this.guess()
                      )}
                  />
                );
              })}
            </GridContainer>
          </div>
        )}
      </BasedContainer>
        <BasedContainer2>
          {!this.state.guess ? (
            <SpinnerAlt/>
          ) : (
            <div>
              {this.state.guess.recreatedPictures.map(pic => {
                return (
                  <Recreation
                    hideGrid
                    canvasWidth={120}
                    canvasHeight={120}
                    lazyRadius={0}
                    brushRadius={2}
                    brushColor={"#000000"}
                    disabled={true}
                    saveData={pic}
                    onChange={() => {
                      this.setState({disabled: true})
                    }
                    }>
                  </Recreation>
                );
              })}
              {this.state.guess.usernames.map(guess => {
                return (
                  <Username
                  onClick={() => (
                    this.setState({guessingName: guess})
                  )}
                  hidden={this.state.doneGuesses.includes(guess)}
                  >
                    {guess}
                  </Username>
                );
              })}
              {this.state.doneGuesses.map(guess => {
                return (
                  <div>
                  <DoneName>
                    Done Guesses:
                  </DoneName>
                  <DoneName>
                    {guess}
                  </DoneName>
                </div>
                );
              })}
            </div>
          )}
        </BasedContainer2>
      </div>
    )
  }

}
export default withRouter(GuessScreen);