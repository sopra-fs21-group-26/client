import React from "react";
import styled from 'styled-components';
import {api, handleError} from '../../helpers/api';
import {withRouter} from 'react-router-dom';
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
  position: relative;
  padding: 5px;
  z-index: 50;
  
      &:hover {
        transform:scale(4, 4);
        z-index: 50;
    }
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
    display: flex;
    align-items: center;
    justify-content: center;
    left: 10%;
        
`;
export const BasedContainer2 = styled(BaseeContainer)`
    
    position: absolute;
    left: 50%;
        
`;
export const BaseddContainer = styled(BaseeContainer)`
    
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
        
`;
export const DoneContainer = styled(BaseeContainer)`
    
    position: relative;
    left: -20%;
    top: 200px;
    height: 20%;
    width: 80%;
        
`;
const Recreation = styled(CanvasDraw)`
      position: relative;
      margin-right: 20px;
      float: left;
`;
const Username = styled.div` 
    
    transition: all 0.3s ease;
    width: 120px;
    margin-top: 20px;
    margin-right: 20px;
    position: relative;
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
    border: 4px solid #F2AD43;
    
`;
const DoneName = styled.div` 
    
    transition: all 0.3s ease;
    position: relative;
    width: 120px;
    margin-bottom: 20px;
    margin-right: 20px;
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
const Username1 = styled.div` 
    
    transition: all 0.3s ease;
    position: relative;
    width: 120px;
    top: 20px;
    float: left;
    text-align: center;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #F2AD43;
    shadow: 2px;
    z-index: 1;
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

  countPlayers() {
    let playerCount = 0;
    for (let user in this.state.guess.usernames) {
      playerCount = playerCount + 1;
    }
    this.setState({playerCount: playerCount});
  }

  async componentDidMount() {
    try {
      const {match: {params}} = this.props;
      this.ID = params.lobbyId;
      const requestBody = JSON.stringify({
        token: localStorage.getItem('token')
      });
      const response = await api.put(`/games/guessScreen/${params.lobbyId}`, requestBody);
      await new Promise(resolve => setTimeout(resolve, 50));
      const responseGrid = await api.get(`/games/${params.lobbyId}/grid`);
      await new Promise(resolve => setTimeout(resolve, 50));
      this.setState({guess: response.data});
      this.setState({grid: responseGrid.data});
      this.countPlayers();
    } catch (error) {
      alert(`Something went wrong while fetching the picture: \n${handleError(error)}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  intervalSet() {
    const confirmDoneGuesses = this.checkAllGuessed.bind(this);
    return setInterval(confirmDoneGuesses, 1000);

  }

  async guess(picture) {
    try {
      const {match: {params}} = this.props;
      this.ID = params.lobbyId;
      const requestBody = JSON.stringify({
        token: localStorage.getItem('token'),
        username: this.state.guessingName,
      });
      this.setState({coordinate: picture.coordinate});
      await new Promise(resolve => setTimeout(resolve, 50));
      console.log(this.state.coordinate);
      await api.put(`/games/correctGuess/${params.lobbyId}/${this.state.coordinate}`, requestBody);
      await new Promise(resolve => setTimeout(resolve, 50));
      this.state.doneGuesses.push(this.state.guessingName);
      console.log(this.state.coordinate, this.state.guessingName);
      this.setState({
        guessingName: null,
        coordinate: null
      })
      if (this.state.doneGuesses.length === this.state.playerCount) {
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


  render() {
    return (
      <BaseddContainer>
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
                      onClick={() => (
                        this.setState({coordinate: picture.coordinate}),
                          this.guess(picture)
                      )}
                    />
                  );
                })}
                <div
                  hidden={(this.state.guessingName)}
                  style={{
                    zIndex: 20,
                    background: "rgba(0,0,0,0.95)",
                    position: "absolute",
                    height: 520,
                    bottom: 40,
                    width: 500,
                  }}
                >
                  <DoneName
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    top: "30%",
                    left: "40%",
                  }}
                  >First select the name of the user whose picture you want to guess</DoneName>
                </div>
              </GridContainer>
            </div>
          )}
        </BasedContainer>
        <BasedContainer2>
          {!this.state.guess ? (
            <SpinnerAlt/>
          ) : (
            <div>
              <div
                hidden={!(this.state.doneGuesses.length != this.state.playerCount)}>
                <div>
                  {this.state.guess.usernames.map(guess => {
                    return (
                      <div>
                        <DoneName>
                          {guess}
                        </DoneName>
                      </div>
                    );
                  })}
                  {this.state.guess.recreatedPictures.map(pic => {
                    return (
                      <Picture
                        src={`data:image/jpeg;base64,${pic}`}
                        style={{
                          backgroundColor: "white",
                          width: 120,
                          height: 120,
                          marginRight: 20,
                        }
                        }
                      >
                      </Picture>
                    );
                  })}
                </div>
                <div>
                  <Username1
                    hidden={!(this.state.doneGuesses.length != this.state.playerCount)}
                  >Which Creation to guess: </Username1>
                </div>
                <div>
                  {this.state.guess.usernames.map(guess => {
                    return (
                      <div>
                        <Username
                          onClick={() => (
                            this.setState({guessingName: guess})
                          )}
                          hidden={this.state.doneGuesses.includes(guess)}
                        >
                          {guess}
                        </Username>
                      </div>
                    );
                  })}
                </div>
              </div>
              <DoneContainer>
                <DoneName>
                  Done Guesses:
                </DoneName>
                {this.state.doneGuesses.map(guess => {
                  return (
                    <DoneName>
                      {guess}
                    </DoneName>
                  );
                })}
              </DoneContainer>
            </div>
          )}
        </BasedContainer2>
      </BaseddContainer>
    )
  }

}

export default withRouter(GuessScreen);