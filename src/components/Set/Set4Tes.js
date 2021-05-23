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

const MySQ = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                  paddingRight: 20,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/sticksNstones/stick.png"}
         style={{
           width: 100,
           height: 100,
           position: 'relative',
         }}
    />
  </div>
}
const MySQ2 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                  paddingRight: 20,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/sticksNstones/stick.png"}
         style={{
           width: 100,
           height: 100,
           position: 'relative',
           transform: "rotate(90deg)",
         }}
    />
  </div>
}
const MySQ3 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                  paddingRight: 20,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/sticksNstones/stick.png"}
         style={{
           width: 100,
           height: 100,
           position: 'relative',
           transform: "rotate(45deg)",
         }}
    />
  </div>
}
const MySQ4 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                  paddingRight: 20,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/sticksNstones/stick.png"}
         style={{
           width: 100,
           height: 100,
           position: 'relative',
           transform: "rotate(135deg)",
         }}
    />
  </div>
}
const MySQ5 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                  paddingRight: 20,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/sticksNstones/stone.png"}
         style={{
           width: 100,
           height: 100,
           position: 'relative',
         }}
    />
  </div>
}




const ReactableSQ = reactable(MySQ);
const Reactable2SQ = reactable(MySQ2);
const Reactable3SQ = reactable(MySQ3);
const Reactable4SQ = reactable(MySQ4);
const Reactable5SQ = reactable(MySQ5);



const BasicDemo = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 20, y: -120 });
  return (
    <ReactableSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
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
const BasicDemo2 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 120, y: -120 });
  return (
    <Reactable2SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
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
const BasicDemo3 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 220, y: -120 });
  return (
    <Reactable3SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
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
const BasicDemo4 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 320, y: -120 });
  return (
    <Reactable4SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
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
const BasicDemo5 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 420, y: -120 });
  return (
    <Reactable5SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
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


class Set4Test extends React.Component {

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
            width: 400,
            height: 400,
            border: '1px solid black',
            position: 'absolute',
            background: '#FFFFFF'
          }}
        >
          <BasicDemo/>
          <BasicDemo/>
          <BasicDemo/>
          <BasicDemo2/>
          <BasicDemo2/>
          <BasicDemo2/>
          <BasicDemo3/>
          <BasicDemo3/>
          <BasicDemo3/>
          <BasicDemo4/>
          <BasicDemo4/>
          <BasicDemo4/>
          <BasicDemo5/>
          <BasicDemo5/>
          <BasicDemo5/>
          <BasicDemo5/>
          <BasicDemo5/>
          <BasicDemo5/>
          <BasicDemo5/>
        </div>
      </Background>
    )
  }
}

export default withRouter(Set4Test);