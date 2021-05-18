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
                  position: "relative",
                  float: "left",
                  paddingRight: 20,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon1.png"}
         style={{
           width: 100,
           height: 100,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
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
                  position: "relative",
                  float: "left",
                  paddingRight: 20,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon2.png"}
         style={{
           width: 100,
           height: 100,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
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
                  position: "relative",
                  float: "left",
                  paddingRight: 20,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon3.png"}
         style={{
           width: 100,
           height: 100,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
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
                  position: "relative",
                  float: "left",
                  paddingRight: 20,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon4.png"}
         style={{
           width: 100,
           height: 100,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}


const ReactableSQ = reactable(MySQ);
const Reactable2SQ = reactable(MySQ2);
const Reactable3SQ = reactable(MySQ3);
const Reactable4SQ = reactable(MySQ4);



const BasicDemo = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 20, y: -120 });
  return (
    <ReactableSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 170, y: 168 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: 50 }],
            offset: { x: 70, y: 130 },
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
  const [coordinate, setCoordinate] = React.useState({ x: 20, y: -120 });
  return (
    <Reactable2SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 170, y: 168 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: 50 }],
            offset: { x: 70, y: 130 },
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
  const [coordinate, setCoordinate] = React.useState({ x: 20, y: -120 });
  return (
    <Reactable3SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 170, y: 168 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: 50 }],
            offset: { x: 70, y: 130 },
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
  const [coordinate, setCoordinate] = React.useState({ x: 20, y: -120 });
  return (
    <Reactable4SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 170, y: 168 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: 50 }],
            offset: { x: 70, y: 130 },
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


class Set3Test extends React.Component {

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
          <BasicDemo2/>
          <BasicDemo3/>
          <BasicDemo4/>
        </div>
      </Background>
    )
  }
}

export default withRouter(Set3Test);