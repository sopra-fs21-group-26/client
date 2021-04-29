import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import Player from '../../views/Player';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';
import {BaseeContainer} from "../profile/Profile";
import {SpinnerAlt} from "../../views/design/SpinnerAlt";
import * as PropTypes from "prop-types";

const GridContainer = styled.div`
  height: 600px;
  width: 610px;
  margin-left: auto;
  margin-right: auto;
  align: center;
  margin-bottom: 55px;
  box-sizing: border-box;
`;

const Picture = styled.img`
  height: 150px;
  width: 150px;
  border: 2px solid #F2AD43;
  box-sizing: border-box;
  padding: 5px;
`;




class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      grid: null,
      height: 100,
      width: 100,
      padding: 5,
    };
  }


  async componentDidMount() {
    try {
      const { match: { params } } = this.props;
      this.ID = params.lobbyId;
      const response = await api.get(`/games/${params.lobbyId}/grid`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.setState({ grid: response.data });
    } catch (error) {
      alert(`Something went wrong while fetching the grid: \n${handleError(error)}`);
    }
  }

  render() {
    return (
      <BaseeContainer>
        {!this.state.grid ? (
          <SpinnerAlt />
        ) : (
            <GridContainer>
            {this.state.grid.map(picture => {
              return (
                  <Picture
                    src = {`${picture.url}&fit=crop&w=400&h=400`}
                  />
              );
                })}
            </GridContainer>
        )}
      </BaseeContainer>
    );
  }
}

export default withRouter(Game);
