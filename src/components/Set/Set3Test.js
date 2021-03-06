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
  left: 90%;
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
    left: 90%;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #FFFFFF;
    
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    
`;

const MySQ = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon1.png"}
         style={{
           width: 80,
           height: 80,
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
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon2.png"}
         style={{
           width: 80,
           height: 80,
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
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon3.png"}
         style={{
           width: 80,
           height: 80,
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
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon4.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
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
                  position: "relative",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon5.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ6 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon6.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ7 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon7.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ8 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon8.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ9 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  display: "block",
                  float:"left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon9.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ10 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  display: "block",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon10.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ11 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon11.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ12 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon12.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ13 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  display: "block",
                  float:"left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon13.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ14 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  display: "block",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon14.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ15 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon15.png"}
         style={{
           width: 80,
           height: 80,
           border: '1px solid black',
           position: 'relative',
           float: 'left',
         }}
    />
  </div>
}
const MySQ16 = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "relative",
                  float: "left",
                  paddingRight: 15,
                }
              }
  >
    <img src={process.env.PUBLIC_URL + "/setimg/top/icon16.png"}
         style={{
           width: 80,
           height: 80,
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
const Reactable5SQ = reactable(MySQ5);
const Reactable6SQ = reactable(MySQ6);
const Reactable7SQ = reactable(MySQ7);
const Reactable8SQ = reactable(MySQ8);
const Reactable9SQ = reactable(MySQ9);
const Reactable10SQ = reactable(MySQ10);
const Reactable11SQ = reactable(MySQ11);
const Reactable12SQ = reactable(MySQ12);
const Reactable13SQ = reactable(MySQ13);
const Reactable14SQ = reactable(MySQ14);
const Reactable15SQ = reactable(MySQ15);
const Reactable16SQ = reactable(MySQ16);




const BasicDemo = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 10, y: -120 });
  return (
    <ReactableSQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo2 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 10, y: -120 });
  return (
    <Reactable2SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo3 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 10, y: -120 });
  return (
    <Reactable3SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo4 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 10, y: -120 });
  return (
    <Reactable4SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo5 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 10, y: 350 });
  return (
    <Reactable5SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo6 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 10, y: 350 });
  return (
    <Reactable6SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo7 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 10, y: 350 });
  return (
    <Reactable7SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo8 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 10, y: 350 });
  return (
    <Reactable8SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo9 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: -100, y: -150 });
  return (
    <Reactable9SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo10 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: -195, y: -60 });
  return (
    <Reactable10SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo11 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: -290, y: 30 });
  return (
    <Reactable11SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo12 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: -385, y: 125 });
  return (
    <Reactable12SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo13 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 420, y: -230 });
  return (
    <Reactable13SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo14 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 325, y: -140 });
  return (
    <Reactable14SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo15 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 230, y: -50 });
  return (
    <Reactable15SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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
const BasicDemo16 = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 135, y: 40 });
  return (
    <Reactable16SQ
      draggable={{modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          }),
          interact.modifiers.snap({
            targets: [interact.createSnapGrid({ x: 133, y: 133 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
            offset: { x: 33, y: 33 },
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


class Set3Test extends React.Component {

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
    console.log(this.state);
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
          id="recreation"
          style={{
            top: "20%",
            width: 400,
            height: 400,
            border: '1px solid black',
            position: 'absolute',
            background: '#FFFFFF'
          }}
        >
          <BasicDemo/>
          <BasicDemo2/>
          <BasicDemo3/>
          <BasicDemo4/>
          <BasicDemo5/>
          <BasicDemo6/>
          <BasicDemo7/>
          <BasicDemo8/>
          <BasicDemo9/>
          <BasicDemo10/>
          <BasicDemo11/>
          <BasicDemo12/>
          <BasicDemo13/>
          <BasicDemo14/>
          <BasicDemo15/>
          <BasicDemo16/>
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

export default withRouter(Set3Test);