import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import Player from '../../views/Player';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';
import {BaseeContainer} from "../profile/Profile";
import {SpinnerAlt} from "../../views/design/SpinnerAlt";

const Picture = styled.img`
  height: 400px;
  width: 400px;
  border: 2px solid #F2AD43;
  box-sizing: border-box;
  padding: 5px;
`;


class Recreate extends React.Component {
  constructor() {
    super();
    this.state = {
      picture: null,
    };
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
    return (
      <BaseeContainer>
        {!this.state.picture ? (
          <SpinnerAlt/>
        ) : (
          <div>
            <Picture src={`${this.state.picture.url}&fit=crop&w=800&h=800`}>

            </Picture>
          </div>
        )}
      </BaseeContainer>
    )
  }
}

export default withRouter(Recreate);