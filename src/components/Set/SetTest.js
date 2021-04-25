import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import { BaseeContainer } from '../profile/Profile';
import CanvasDraw from "react-canvas-draw";

const Background = styled(BaseeContainer)`

    width: 1366px;
    height: 768px;

`;



class SetTest extends React.Component{

  constructor() {
    super();
    this.state ={
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
    this.stats ={
      lines: 0,
    }
  }


checkLines(){
    if (this.lines>2){
      this.setState({disabled: true})
    }
  }



  render(){

    return(
    <Background>
      <CanvasDraw brushColor={this.state.color}
                  hideGrid={this.state.hideGrid}
                  lazyRadius={this.state.lazyRadius}
                  canvasWidth={this.state.canvasWidth}
                  canvasHeight={this.state.canvasHeight}
                  brushRadius={this.state.brushRadius}
                  disabled={this.state.disabled}
                  onChange={() => {
                    this.stats.lines = this.stats.lines + 1;
                    this.checkLines();
                    this.setState({disabled: true})
                  }
                  }
      />
    </Background>
    )
  }
}

export default withRouter(SetTest);