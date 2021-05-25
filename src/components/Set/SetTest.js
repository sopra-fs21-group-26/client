import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import { BaseeContainer } from '../profile/Profile';
import CanvasDraw from "react-canvas-draw";
import reactable from 'reactablejs';
import interact from 'interactjs';
import html2canvas from 'html2canvas';

const Background = styled(BaseeContainer)`

    width: 1366px;
    height: 768px;

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

const MySQ = (props) => {
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
        width: 80,
        height: 80,
        align: "center",
        background: "#F2AD43",
      }}
    />
  </div>
}

const MyCR = (props) => {
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
        width: 80,
        height: 80,
        align: "center",
        background: "#F2AD43",
        borderRadius: "50%"
      }}
    />
  </div>
}

const MyTR = (props) => {
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
        width: 0,
        height: 0,
        align: "center",
        borderLeft: "40px solid transparent",
        borderRight: "40px solid transparent",
        borderBottom: "80px solid #F2AD43",
      }}
    />
  </div>
}

const ReactableSQ = reactable(MySQ);

const ReactableCR = reactable(MyCR);

const ReactableTR = reactable(MyTR);

const BasicDemo = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 33, y: -120 });
  return (
    <ReactableSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
        ]}}
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
const BasicCR = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 166, y: -120 });
  return (
    <ReactableCR
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
        ]}}
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

const BasicTR = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 280, y: -120 });
  return (
    <ReactableTR
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
        ]}}
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



class SetTest extends React.Component {

  constructor() {
    super();
    this.state = {
      color: "#000000",
      canvasWidth: 600,
      canvasHeight: 600,
      lines: 0,
      twoLinesDrawn: false,
      brushRadius: 2,
      lazyRadius: 0,
      gridColor: "rgba(150,150,150,0)",
      hideGrid: true,
      disabled: false
    }
    this.stats = {
      lines: 0,
    }
  }


  checkLines() {
    if (this.lines > 2) {
      this.setState({disabled: true})
    }
  }
  async savePicture(){
    await html2canvas(document.getElementById("recreation")).then(function(canvas) {
      console.log("yeet");
      let pic = canvas.toDataURL("image/png").split(';base64,');
      localStorage.setItem("savedDrawing", pic[1]);
      console.log(localStorage.getItem("savedDrawing"))
    });
    /*    try{
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
        }*/
  }


  render() {
    console.log(this.state);
    return (
      <Background>
        <div
          id="recreation"
          style={{
            width: 400,
            height: 400,
            border: '1px solid black',
            position: 'absolute',
            background: '#FFFFFF'
          }}
        >
        <BasicDemo/>
        <BasicDemo/>
        <BasicCR/>
        <BasicCR/>
        <BasicTR/>
        <BasicTR/>
        </div>
        <TokenButton
          onClick={() => {
            this.savePicture();
          }}
        >
          Save
        </TokenButton>
      </Background>
    )
  }
}

export default withRouter(SetTest);