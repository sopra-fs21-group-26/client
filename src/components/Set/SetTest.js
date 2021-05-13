import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import { BaseeContainer } from '../profile/Profile';
import CanvasDraw from "react-canvas-draw";
import reactable from 'reactablejs';
import interact from 'interactjs';
import {border} from "@material-ui/system";

const Background = styled(BaseeContainer)`

    width: 1366px;
    height: 768px;

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
        width: 100,
        height: 100,
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
        width: 100,
        height: 100,
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
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: "100px solid #F2AD43",
      }}
    />
  </div>
}

const ReactableSQ = reactable(MySQ);

const ReactableCR = reactable(MyCR);

const ReactableTR = reactable(MyTR);

const BasicDemo = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 50, y: -120 });
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
  const [coordinate, setCoordinate] = React.useState({ x: 200, y: -120 });
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
  const [coordinate, setCoordinate] = React.useState({ x: 350, y: -120 });
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


  render() {
    console.log(this.state);
    return (
      <Background>
        <div
          style={{
            width: 500,
            height: 500,
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
      </Background>
    )
  }
}

export default withRouter(SetTest);