import React from 'react';
import styled from 'styled-components';
import {api, handleError} from '../../helpers/api';
import {withRouter} from 'react-router-dom';
import {BaseeContainer} from "../profile/Profile";
import {SpinnerAlt} from "../../views/design/SpinnerAlt";

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

const TokenButton = styled.button`
  &:hover {
  transform: translateY(-5px);
  }
  transition: all 0.3s ease;
  position: absolute;
  cursor: pointer;
  margin-top: -20%;
  margin-left: 40%;
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


class Game extends React.Component {

  interval = this.intervalSet();

  constructor() {
    super();
    this.state = {
      grid: null,
      isAdmin: null,
      ifGrid: null,
      set: null,
    };
  }


  async componentDidMount() {
    try {
      const {match: {params}} = this.props;
      this.ID = params.lobbyId;
      const admindata = await api.get(`lobby/${params.lobbyId}`);
      const setnumber = await api.get(`rotation`);
      const ifGrid = await api.get(`games/${params.lobbyId}/grid/status`);
      this.setState({ifGrid:ifGrid.data});
      this.setState({set:setnumber.data});
      console.log(this.state);
      if (admindata.data.admin.token === localStorage.getItem('token')) {
        this.setState({isAdmin: true})
      }
      if (this.state.isAdmin && !this.state.ifGrid) {
        await api.get(`/games/${params.lobbyId}/grid/make`);
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      this.timeoutCall();

    } catch (error) {
      alert(`Something went wrong while fetching the grid: \n${handleError(error)}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  intervalSet() {
    const thisGetAllPlayersReady = this.checkGrid.bind(this);
    return setInterval(thisGetAllPlayersReady, 2000);

  }

  async checkGrid() {
      const {match: {params}} = this.props;
      this.ID = params.lobbyId;
      const ifGrid = await api.get(`games/${params.lobbyId}/grid/status`);
      if (ifGrid.data == true) {
        const response = await api.get(`/games/${params.lobbyId}/grid`);
        await new Promise(resolve => setTimeout(resolve, 500));
        this.setState({grid: response.data})
      }
  }

  timeoutCall() {

    setTimeout(() => {
      this.resetGame();
    }, 1000);

  }

  async resetGame() {
    const {match: {params}} = this.props;
    await api.put(`/games/preparation-next-round/${params.lobbyId}`)
  }

  recreate() {
    const {match: {params}} = this.props;
    this.ID = params.lobbyId;
    this.props.history.push(`/game/${params.lobbyId}/recreate/${this.state.set}`)
  }


  render() {
    return (
      <BaseeContainer>
        {!this.state.grid ? (
          <SpinnerAlt/>
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
                    src={`${picture.url}&fit=crop&w=800&h=800`}
                  />
                );
              })}
            </GridContainer>
            <TokenButton onClick={() => this.recreate()}>Generate Picture</TokenButton>
          </div>
        )}
      </BaseeContainer>
    );
  }
}


export default withRouter(Game);
