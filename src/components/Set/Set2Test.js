import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import { BaseeContainer } from '../profile/Profile';
import CanvasDraw from "react-canvas-draw";
import reactable from 'reactablejs';
import interact from 'interactjs';
import html2canvas from 'html2canvas';
import {SpinnerAlt} from "../../views/design/SpinnerAlt";

const Background = styled(BaseeContainer)`

    width: 1366px;
    height: 768px;

`;
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

const BlkSQ = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                }
              }
  >
    <div
      style={{
        width: 50,
        height: 50,
        //align: "center",
        background: "black",
      }}
    />
  </div>
}
const RdSQ = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                }
              }
  >
    <div
      style={{
        width: 50,
        height: 50,
        align: "center",
        background: "red",
      }}
    />
  </div>
}
const GrSQ = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                }
              }
  >
    <div
      style={{
        width: 50,
        height: 50,
        align: "center",
        background: "green",
      }}
    />
  </div>
}
const BlSQ = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                }
              }
  >
    <div
      style={{
        width: 50,
        height: 50,
        align: "center",
        background: "blue",
      }}
    />
  </div>
}
const YlSQ = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                }
              }
  >
    <div
      style={{
        width: 50,
        height: 50,
        align: "center",
        background: "#F2AD43",
      }}
    />
  </div>
}
const GrySQ = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                }
              }
  >
    <div
      style={{
        width: 50,
        height: 50,
        align: "center",
        background: "grey",
      }}
    />
  </div>
}

const ReactableSQ = reactable(BlkSQ);
const RedSQ = reactable(RdSQ);
const GreenSQ = reactable(GrSQ);
const BlueSQ = reactable(BlSQ);
const YellowSQ = reactable(YlSQ);
const GreySQ = reactable(GrySQ);

const BasicSQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: -115, y: -120 });
  return (
    <ReactableSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            //range: Infinity,
            relativePoints: [{ x: 1, y: 1 }],
            //offset: { x: 0, y: 0 },
      }),
        ],
      origin: "parent",}
      }
      onDragMove={event => {
        const {dx, dy} = event;
        setCoordinate(prev => ({
          x: prev.x + dx,
          y: prev.y + dy,
        }));
      }}
      x={coordinate.x}
      y={coordinate.y}
    />
  );
};
const BasicRedSQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: -50, y: -120 });
  return (
    <RedSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            //range: Infinity,
            relativePoints: [{ x: 1, y: 1 }],
            //offset: { x: 35, y: 10 },
          }),
        ],
      origin: "parent",
      }}
      onDragMove={event => {
        const {dx, dy} = event;
        setCoordinate(prev => ({
          x: prev.x + dx,
          y: prev.y + dy,
        }));
      }}
      x={coordinate.x}
      y={coordinate.y}
    />
  );
};
const BasicGreenSQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 15, y: -120 });
  return (
    <GreenSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            //range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
          }),
        ], origin: "parent",}}
      onDragMove={event => {
        const {dx, dy} = event;
        setCoordinate(prev => ({
          x: prev.x + dx,
          y: prev.y + dy,
        }));
      }}
      x={coordinate.x}
      y={coordinate.y}
    />
  );
};
const BasicBlueSQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 80, y: -120 });
  return (
    <BlueSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
          }),
        ], origin:"parent"}}
      onDragMove={event => {
        const {dx, dy} = event;
        setCoordinate(prev => ({
          x: prev.x + dx,
          y: prev.y + dy,
        }));
      }}
      x={coordinate.x}
      y={coordinate.y}
    />
  );
};
const BasicYellowSQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 145, y: -120 });
  return (
    <YellowSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
          }),
        ], origin:"parent"}}
      onDragMove={event => {
        const {dx, dy} = event;
        setCoordinate(prev => ({
          x: prev.x + dx,
          y: prev.y + dy,
        }));
      }}
      x={coordinate.x}
      y={coordinate.y}
    />
  );
};
const BasicGreySQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 210, y: -120 });
  return (
    <GreySQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
          }),
        ], origin:"parent"}}
      onDragMove={event => {
        const {dx, dy} = event;
        setCoordinate(prev => ({
          x: prev.x + dx,
          y: prev.y + dy,
        }));
      }}
      x={coordinate.x}
      y={coordinate.y}
    />
  );
};



class Set2Test extends React.Component {

  interval = this.intervalSet();

  constructor() {
    super();
    this.state = {
      picture: null,
      disabled: false,
      recreation: null,
      isDone: null,
      allDone: null
    }
  }

  async savePicture(){
    await html2canvas(document.getElementById("recreation")).then(function(canvas) {
      console.log("yeet");
      let pic = canvas.toDataURL("image/png").split(';base64,');
      localStorage.setItem("savedDrawing", pic[1]);
      console.log(localStorage.getItem("savedDrawing"))
    });
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


  render() {
    return (
      <Background>
        {!this.state.picture ? (
          <SpinnerAlt/>
        ) : (
        <div>
          <Picture src={`${this.state.picture.url}&fit=crop&w=800&h=800`}>
          </Picture>
          <LabelCircle>{this.state.picture.coordinate}</LabelCircle>
        <div
          style={{
            top:"20%",
            width: 400,
            height: 400,
            border: '1px solid black',
            position: 'absolute',
            background: '#FFFFFF'
          }}
        >
          <div
            id="recreation"
            style={{
              width: 150,
              height: 150,
              left: "125px",
              top: "125px",
              border: '1px solid black',
              position: 'absolute',
              background: '#FFFFFF',
              display: 'inline-block',
            }}
          >
          <BasicSQ/>
          <BasicSQ/>
          <BasicSQ/>
          <BasicRedSQ/><BasicRedSQ/><BasicRedSQ/>
          <BasicGreenSQ/><BasicGreenSQ/><BasicGreenSQ/>
          <BasicBlueSQ/><BasicBlueSQ/><BasicBlueSQ/>
          <BasicYellowSQ/><BasicYellowSQ/><BasicYellowSQ/>
          <BasicGreySQ/><BasicGreySQ/><BasicGreySQ/>
        </div>
        </div>
          {!this.state.isDone ? (
            <TokenButton
              onClick={() => {
                this.savePicture();
              }}
            >
              Save
            </TokenButton>) :(
            <Waiting>
              Waiting for others to finish creating...
            </Waiting>
          )
          }
        </div>
        )}
      </Background>
    )
  }
}

export default withRouter(Set2Test);