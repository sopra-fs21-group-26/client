import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import { BaseeContainer } from '../profile/Profile';
import CanvasDraw from "react-canvas-draw";
import reactable from 'reactablejs';
import {border} from "@material-ui/system";

const Background = styled(BaseeContainer)`

    width: 1366px;
    height: 768px;

`;

const MyComponent = (props) => {
  return <div ref={props.getRef}
              style={
                {
                  left: props.x,
                  top: props.y,
                  position: "absolute",
                }
              }
  >
   <img
      width={40}
      height={40}
      align={"center"}
      src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
    />
  </div>
}

const Reactable = reactable(MyComponent);

const BasicDemo = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 50, y: -100 });
  return (
    <Reactable
      draggable
      onDragMove={event => {
          const {dx, dy} = event;
          setCoordinate(prev => ({
            x: prev.x + dx,
            y: prev.y + dy,
          }));
      }

      }
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
        </div>
      </Background>
    )
  }
}

export default withRouter(SetTest);