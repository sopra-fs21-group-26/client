import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import {BaseContainer} from "../../helpers/layout";
import {BsPencilSquare} from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import BackToMenu from '../../views/design/BackToMenu';
import {SpinnerAlt} from "../../views/design/SpinnerAlt";

export const BaseeContainer = styled(BaseContainer)`
    
    display: flex;
    justify-content: center;
    align-items: center;
        
`;

// Reworked
export const Background = styled.div`

    width: 47.29vw;
    height: 57.31vh;
    transform: scale(0.70);
    background: #3C3B38;
    border-radius: 20px;
`;

// Reworked
const TopBar = styled.div`

  font-family: Cornerstone;
  font-style: normal;
  font-weight: normal;
  font-size: 4.16vh;
  color: #252525;
  
  height: 10.45vh;
  padding-left: 1.31vw; 
  display: flex;
  align-items: center;
  position: relative;
  
  background: #F2AD43;
  border-radius: 20px 20px 0px 0px;

`;

// Reworked
const Container = styled.div`

    position: absolute;
    top: 10.45vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border: 2px solid green;

`;

// Reworked
const StatFieldContainer = styled.div`

    height: 50%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 1.60vh;
    
    border: 2px solid blue;

`;

// Reworked
const Title = styled.div`
    
    
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 3.52vh;
    color: #FFF58F;
    position: relative;
    bottom: 12.80vh;
    
    
`;

// Reworked
const ProfileName = styled.div`
    
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 3.20vh;
    position: absolute;
    right: 2.36vw;

`;

// Reworked
const StatField = styled.div`

    width: 15.55vw;
    height: 7.25vh;

    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 3.20vh;
    line-height: 6.40vh;

    text-align: center;
        
    color: #FFFFFF;

    background: linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100%);
    border: 3px solid #F2AD43;
    box-sizing: border-box;
    border-radius: 25px;
`;

export const BackToMenuButton = styled.div`
    
    position: absolute;
    height: 35px;
    top: 30px;
    left: 30px;
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;

`;

// Reworked
const EditButton = styled(BsPencilSquare)`
    
    width: 2.62vw;
    height: 5.33vh;
    position: absolute;
    left: 20.49vw;
    color: #898989;
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;

`;

// Reworked
const CancelButton = styled(ImCancelCircle)`

    width: 2.62vw;
    height: 5.33vh;
    position: absolute;
    left: 20.49vw;
    color: #898989;
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;

`;

// Reworked
const StatFieldEdit = styled.input`

    width: 15.55vw;
    height: 7.25vh;

    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 3.20vh;
    line-height: 6.40vh;

    text-align: center;
        
    color: #FFFFFF;

    background: linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100%);
    border: 3px solid #F2AD43;
    box-sizing: border-box;
    border-radius: 25px;
    
`;

// Reworked
const EloTitle = styled.div`

    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 3.20vh;
    color: #FFF58F;
    position: relative;
    bottom: 12.80vh;
    
`;


class Profile extends React.Component {

    ID = null;

    constructor(){
        super();
        this.state = {
            user: null,
            username: null,
            hasEditorPermission: null
        };
    }

    async componentDidMount() {
        try {

            if(!localStorage.getItem('token')){
                this.props.history.push('/');
            }
            else {

                const { match: { params } } = this.props;
                this.ID = params.id
                const response = await api.get(`/players/${params.id}`);

                console.log(response.data)

                await new Promise(resolve => setTimeout(resolve, 1000));

                this.setState({user: response.data});


            }

        } catch (error) {
            alert(`Something went wrong while fetching the profile: \n${handleError(error)}`);
            this.props.history.push('/menu');
        }
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.editUsername();
        }
    }

    async editUsername(){
        try {
            const requestBody = JSON.stringify({
                username: this.state.username,
                token: localStorage.getItem('token')
            });

            const response = await api.put('/edit/profile', requestBody);
            this.setState({user: response.data});
            this.setState({hasEditorPermission: null});

            localStorage.removeItem('username');
            localStorage.setItem('username', this.state.username);

        } catch (error) {
            alert(`Something went wrong: \n${handleError(error)}`);
        }
    }

    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({ [key]: value });
    }

    async checkEditorPermission(){
        try{
            const response = await api.put(`edit/${localStorage.getItem('token')}/${this.ID}`);
            response.data == 'FORBIDDEN' ? alert("You are not allowed to edit other user's profiles!") : this.setState({hasEditorPermission: true});
        }
        catch (error){
            alert(`Something went wrong: \n${handleError(error)}`);
            this.props.history.push('/menu');
        }

    }

    render() {
        if(this.state.hasEditorPermission){
            return(
                <BaseeContainer>
                    <div>
                        <Background>
                            <TopBar>PROFILE
                                <ProfileName>{this.state.user.username}</ProfileName>
                            </TopBar>
                            <Container>
                                <StatFieldContainer>
                                    <CancelButton onClick ={ () => {this.setState({hasEditorPermission: null})}}/>
                                    <StatFieldEdit placeholder="Enter username"
                                                   onKeyDown={this.handleKeyDown}
                                                   onChange={e => {
                                                       this.handleInputChange('username', e.target.value);
                                                   }}>
                                    </StatFieldEdit>
                                    <StatField> {this.state.user.score}
                                        <EloTitle>ELO Score</EloTitle>
                                    </StatField>
                                </StatFieldContainer>
                                <StatFieldContainer>
                                    <StatField> {this.state.user.gamesPlayed}
                                        <Title>Games Played</Title>
                                    </StatField>
                                    <StatField> {this.state.user.gamesWon}
                                        <Title>Games Won</Title>
                                    </StatField>
                                </StatFieldContainer>
                            </Container>
                        </Background>
                        <BackToMenuButton onClick = { () => {this.props.history.push('/menu')}}>
                            <BackToMenu/>
                        </BackToMenuButton>
                    </div>
                </BaseeContainer>
            );
        }
        else{
            return(
                <BaseeContainer>
                    {!this.state.user ? (
                        <SpinnerAlt />
                    ) : (
                        <div>
                            <Background>
                                <TopBar>PROFILE
                                    <ProfileName>{this.state.user.username}</ProfileName>
                                </TopBar>
                                <Container>
                                    <StatFieldContainer>

                                        <EditButton onClick = { () => {this.checkEditorPermission()}}></EditButton>
                                        <StatField> {this.state.user.username}
                                            <Title>Username</Title>
                                        </StatField>
                                        <StatField> {this.state.user.score}
                                            <EloTitle>ELO Score</EloTitle>
                                        </StatField>
                                    </StatFieldContainer>
                                    <StatFieldContainer>
                                        <StatField> {this.state.user.gamesPlayed}
                                            <Title>Games Played</Title>
                                        </StatField>
                                        <StatField> {this.state.user.gamesWon}
                                            <Title>Games Won</Title>
                                        </StatField>
                                    </StatFieldContainer>
                                </Container>
                            </Background>
                            <BackToMenuButton onClick = { () => {this.props.history.push('/menu')}}>
                                <BackToMenu/>
                            </BackToMenuButton>
                        </div>
                    )}
                </BaseeContainer>
            );
        }
    }
}

export default withRouter(Profile);
