import React from "react";
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import Player from '../../views/Player';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';
import {BaseeContainer} from "../profile/Profile";
import {SpinnerAlt} from "../../views/design/SpinnerAlt";
import CanvasDraw from "react-canvas-draw";

class GuessScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      grid: null,
      isAdmin: null
    };
  }

  async componentDidMount(){


  }

}
export default withRouter(GuessScreen);