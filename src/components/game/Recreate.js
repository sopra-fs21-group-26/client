import React from 'react';
import styled from 'styled-components';
import { api, handleError } from '../../helpers/api';
import { withRouter } from 'react-router-dom';
import {BaseeContainer} from "../profile/Profile";
import {SpinnerAlt} from "../../views/design/SpinnerAlt";
import CanvasDraw from "react-canvas-draw";
import html2canvas from "html2canvas";

const Picture = styled.img`
  height: 400px;
  width: 400px;
  position: absolute;
  left: 10%;
  top: 20%;
  border: 2px solid #F2AD43;
  box-sizing: border-box;
  padding: 5px;
`;


const LabelCircle = styled.div`

    height: 100px;
    width: 100px;
    position: absolute;
    left: 21%;
    top: 80%;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #252525;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

const Recreation = styled(CanvasDraw)`
      position: absolute;
      top: 20%;
      left: 50%;
`;

const TokenButton = styled.button`
  &:hover {
  transform: translateY(-5px);
  }
  transition: all 0.3s ease;
  position: absolute;
  cursor: pointer;
  top: 40%;
  left: 85%;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  font-family: Cornerstone;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: right;
  color: #F2AD43;
  text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    
`;

const Waiting = styled.div` 
    
    transition: all 0.3s ease;
    position: absolute;
    top: 40%;
    left: 82%;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #FFFFFF;
    
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    
`;

class Recreate extends React.Component {

  interval = this.intervalSet();

  constructor() {
    super();
    this.state = {
      picture: null,
      disabled: false,
      recreation: null,
      isDone: null,
      allDone: null
    };
  }



  async componentDidMount() {
    try {
      const { match: { params } } = this.props;
      this.ID = params.lobbyId;
      const requestBody = JSON.stringify({
        token: localStorage.getItem('token')
      });
      const response = await api.put(`/games/${params.lobbyId}/picture`, requestBody);
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.setState({ picture: response.data });
    } catch (error) {
      alert(`Something went wrong while fetching the picture: \n${handleError(error)}`);
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  async getAllCreated() {
    try {
      const { match: { params } } = this.props;
      this.ID = params.lobbyId;
      const response = await api.get(`/games/allCreated/${params.lobbyId}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.setState({ allDone: response.data });
      if(this.state.allDone){
        this.props.history.push(`/game/${params.lobbyId}/guess`);
      }
    } catch (error) {
      alert(`Something went wrong while fetching the created status: \n${handleError(error)}`);
    }
  }


  intervalSet(){
    const thisGetAllPlayersReady = this.getAllCreated.bind(this);
    return setInterval(thisGetAllPlayersReady, 1000);

  }

  async savePicture(){
      let canvas = this.saveableCanvas.canvasContainer.children[1];
      console.log("yeet");
      let pic = canvas.toDataURL("image/png").split(';base64,');
      localStorage.setItem("savedDrawing", pic[1]);
      console.log(localStorage.getItem("savedDrawing"))
    ;
    try{
      const requestBody = JSON.stringify({
        token: localStorage.getItem("token"),
        recreation: localStorage.getItem("savedDrawing")
      })
      await api.put(`/games/saveCreation`, requestBody);
      await new Promise(resolve => setTimeout(resolve, 50));
      const SecondRequest = JSON.stringify({
        token: localStorage.getItem("token"),
      })
      await api.put(`/games/creation`, SecondRequest);
      await new Promise(resolve => setTimeout(resolve, 50));
      this.setState({isDone: true});
      console.log("success");
    }
    catch(error){
      alert(`Something went wrong while saving your picture: \n${handleError(error)}`);
    }
  }

  render() {
    return (
      <BaseeContainer>
        {!this.state.picture ? (
          <SpinnerAlt/>
        ) : (
          <div>
            <Picture src={`${this.state.picture.url}&fit=crop&w=800&h=800`}>
            </Picture>
            <LabelCircle>{this.state.picture.coordinate}</LabelCircle>
            <div id="recreation">
            <Recreation
  ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
  hideGrid
  lazyRadius={0}
  brushRadius={2}
  brushColor={"#000000"}
  disabled={this.state.disabled}
  onChange={() => {
    this.setState({disabled: true})
  }
  }
  />
            </div>
            {!this.state.isDone ? (
                <TokenButton
                  onClick={() => {
                    this.savePicture();
                  }}
                >
                  Save
                </TokenButton>
            ) : (
              <Waiting>
                Waiting for others to finish creating...
              </Waiting>

            )}

          </div>
        )}
      </BaseeContainer>
    )
  }
}

export default withRouter(Recreate);