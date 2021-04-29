import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import RankingsHeader from "../../views/design/RankingsHeader";
import NextRound from "../../views/design/NexRound";

const NextRoundButtonWrapper = styled.div`
    
    position: absolute;
    bottom: 2%;
    
    &:hover {
    transform: ${props => (props.disabled ? "translateY(0px)" : "translateY(-5px)")}
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
    cursor: ${props => (props.disabled ? "default" : "pointer")};
    opacity: ${props => (props.disabled ? 0.4 : 1)};

`;

const BaseContainer = styled.div`
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    
`;

const RankingsWrapper = styled.div`
    
    padding-top: 1.5%;
    
`;

const PlayerContainer = styled.div`
    
    height: 75%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    
`;

const DummyPlayerContainer = styled(PlayerContainer)`

    height: 100%;
    
`;

const RankOne = styled.div`

    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 58px;
    width: 40%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    flex-direction: row;
    
    color: #D4AF37;

`;

const RankOneCircle = styled.div`

    height: 90px;
    width: 90px;
    background-color: #F2AD43;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #252525;
    
`;

const RankTwo = styled(RankOne)`

    color: #C6C1C1;
    font-size: 45px;
    
`;

const RankTwoCircle = styled(RankOneCircle)`

    height: 75px;
    width: 75px;
    
`;

const RankThree = styled(RankOne)`

    color: #CE8741;
    font-size: 30px;
    
`;

const RankThreeCircle = styled(RankOneCircle)`

    height: 50px;
    width: 50px;
    
`;

const RankFourFive = styled(RankOne)`

    color: #A48362;
    font-size: 25px;
        
`;

const RankFourFiveCircle = styled(RankOneCircle)`

    background-color: #252525;
    color: #A48362;
    
`;

class Scoring extends React.Component{

    interval = this.intervalSetter();

    intervalSetter(){
        const thisBoundedGetPlayers = this.getPlayers.bind(this);
        return setInterval(thisBoundedGetPlayers, 3000);

    }

    async getPlayers(){

        const lobbyId = localStorage.getItem('lobbyID');
        const response = await api.get(`/lobby/${lobbyId}`);

        this.setState({users: response.data.playersInLobby});
        this.setState({playersInLobby: response.data.numbersOfPlayers});

        console.log(response.data)
        this.allPlayersReady();

    }


    constructor(){
        super();
        this.state={
            scoresheet: null,
            usernames: null, // string
            scores: null,    // int
            playerCount: null,
            allPlayersReady: null, // bool

            // For next round / end game check
            users: null,
            playersInLobby: null
        }
    }

    async componentDidMount(){

        const lobbyId = localStorage.getItem('lobbyID');
        const response = await api.get(`/games/${lobbyId}/score`);

        console.log(response.data)

        this.setState({scoresheet: response.data});

        const arr = Object.keys(this.state.scoresheet.scoreSheet)
        this.setState({usernames: arr});

        const score_arr = Object.values(this.state.scoresheet.scoreSheet)
        this.setState({scores: score_arr})

        console.log(this.state.usernames)

        this.countPlayers();

    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    async signalReady(){

        const requestBody = JSON.stringify({
            token: localStorage.getItem('token')
        });

        await api.put(`/lobby/ready/${localStorage.getItem('lobbyID')}`, requestBody);
    }

    async allPlayersReady(){
        let playersReady = 0;
        let players = this.state.users;

        players.forEach(countReady);

        function countReady(value){
            if(value.playerStatus === "READY"){
                playersReady = playersReady + 1;
            }
        }

        if(playersReady === this.state.playersInLobby){
            this.props.history.push("/testend");
        }

    }

    countPlayers(){
        let playerCount = 0;
        for(let user in this.state.usernames){
            playerCount = playerCount + 1;
        }
        this.setState({playerCount: playerCount});
    }

    render(){
        return(
            <BaseContainer>
                <RankingsWrapper>
                    <RankingsHeader/>
                </RankingsWrapper>
                {!this.state.usernames ? ("") : (
                    <PlayerContainer>
                        {this.state.playerCount === 2 ? (
                            <DummyPlayerContainer>
                                <RankOne>1. {this.state.usernames[0]}<RankOneCircle>{this.state.scores[0]}</RankOneCircle></RankOne>
                                <RankTwo>2. {this.state.usernames[1]}<RankTwoCircle>{this.state.scores[1]}</RankTwoCircle></RankTwo>
                            </DummyPlayerContainer>
                        ) : ("")}
                        {this.state.playerCount === 3 ? (
                            <DummyPlayerContainer>
                                <RankOne>1. {this.state.usernames[0]}<RankOneCircle>{this.state.scores[0]}</RankOneCircle></RankOne>
                                <RankTwo>2. {this.state.usernames[1]}<RankTwoCircle>{this.state.scores[1]}</RankTwoCircle></RankTwo>
                                <RankThree>3. {this.state.username[2]}<RankThreeCircle>{this.state.scores[2]}</RankThreeCircle></RankThree>
                            </DummyPlayerContainer>
                        ) : ("")}
                        {this.state.playerCount === 4 ? (
                            <DummyPlayerContainer>
                                <RankOne>1. {this.state.usernames[0]}<RankOneCircle>{this.state.scores[0]}</RankOneCircle></RankOne>
                                <RankTwo>2. {this.state.usernames[1]}<RankTwoCircle>{this.state.scores[1]}</RankTwoCircle></RankTwo>
                                <RankThree>3. {this.state.username[2]}<RankThreeCircle>{this.state.scores[2]}</RankThreeCircle></RankThree>
                                <RankFourFive>4. {this.state.username[3]}<RankFourFiveCircle>{this.state.scores[3]}</RankFourFiveCircle></RankFourFive>
                            </DummyPlayerContainer>
                        ) : ("")}
                        {this.state.playerCount === 5 ? (
                            <DummyPlayerContainer>
                                <RankOne>1. {this.state.usernames[0]}<RankOneCircle>{this.state.scores[0]}</RankOneCircle></RankOne>
                                <RankTwo>2. {this.state.usernames[1]}<RankTwoCircle>{this.state.scores[1]}</RankTwoCircle></RankTwo>
                                <RankThree>3. {this.state.username[2]}<RankThreeCircle>{this.state.scores[2]}</RankThreeCircle></RankThree>
                                <RankFourFive>4. {this.state.username[3]}<RankFourFiveCircle>{this.state.scores[3]}</RankFourFiveCircle></RankFourFive>
                                <RankFourFive>5. {this.state.username[4]}<RankFourFiveCircle>{this.state.scores[4]}</RankFourFiveCircle></RankFourFive>
                            </DummyPlayerContainer>
                        ) : ("")}
                        <NextRoundButtonWrapper onClick = { () => {this.signalReady()}}>
                            <NextRound/>
                        </NextRoundButtonWrapper>
                    </PlayerContainer>
                )}
            </BaseContainer>
        )
    }
}

export default withRouter(Scoring);