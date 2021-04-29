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
  margin-bottom: 100px;
  height: 480px;
  width: 500px;
  box-sizing: border-box;
`;

const Picture = styled.img`
  height: 120px;
  width: 120px;
  border: 2px solid #F2AD43;
  box-sizing: border-box;
  padding: 5px;
`;

const LabelCircle = styled.div`

    height: 100px;
    width: 100px;
    float: left;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

const LeftLabelCircleA = styled.div`

    height: 100px;
    width: 100px;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-top: 140px;
    margin-left: -140px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

const LeftLabelCircleB = styled.div`

    height: 100px;
    width: 100px;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-top: 264px;
    margin-left: -140px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

const LeftLabelCircleC = styled.div`

    height: 100px;
    width: 100px;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-top: 388px;
    margin-left: -140px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;

const LeftLabelCircleD = styled.div`

    height: 100px;
    width: 100px;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    color: #252525;
    margin-top: 512px;
    margin-left: -140px;
    margin-right: 10px;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    padding-left: 8px;
    
`;





class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      grid: null,
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
          <div>
            <LeftLabelCircleA>A</LeftLabelCircleA>
            <LeftLabelCircleB>B</LeftLabelCircleB>
            <LeftLabelCircleC>C</LeftLabelCircleC>
            <LeftLabelCircleD>D</LeftLabelCircleD>
          <GridContainer>
            <div>
              <LabelCircle>1</LabelCircle>
              <LabelCircle>2</LabelCircle>
              <LabelCircle>3</LabelCircle>
              <LabelCircle>4</LabelCircle>
            </div>
            {this.state.grid.map(picture => {
              return (
                <Picture
                  src = {`${picture.url}&fit=crop&w=800&h=800`}
                />
              );
            })}
          </GridContainer>
          </div>
        )}
      </BaseeContainer>
    );
  }
}

export default withRouter(Game);
