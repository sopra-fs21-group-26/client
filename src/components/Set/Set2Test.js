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
        align: "center",
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
            endOnly: true,
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: -50 }],
            offset: { x: 35, y: 10 },
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

const BasicRedSQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: -50, y: -120 });
  return (
    <RedSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: -50 }],
            offset: { x: 35, y: 10 },
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

const BasicGreenSQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 15, y: -120 });
  return (
    <GreenSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: -50 }],
            offset: { x: 35, y: 10 },
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

const BasicBlueSQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 80, y: -120 });
  return (
    <BlueSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: -50 }],
            offset: { x: 35, y: 10 },
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

const BasicYellowSQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 145, y: -120 });
  return (
    <YellowSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: -50 }],
            offset: { x: 35, y: 10 },
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

const BasicGreySQ = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 210, y: -120 });
  return (
    <GreySQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 50, y: 50 })],
            range: Infinity,
            relativePoints: [{ x: 40, y: -50 }],
            offset: { x: 35, y: 10 },
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



class Set2Test extends React.Component {

  constructor() {
    super();
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
          <div
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
      </Background>
    )
  }
}

export default withRouter(Set2Test);