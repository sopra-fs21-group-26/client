import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import {Spinner} from "../../views/design/Spinner";
import {BaseContainer} from "../../helpers/layout";
import { TopBar, BackgroundContainer } from "../../views/LoginManagement";
import {BsPencilSquare} from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import BackToMenu from '../../views/design/BackToMenu';
import {SpinnerAlt} from "../../views/design/SpinnerAlt";

export const BaseeContainer = styled(BaseContainer)`
    
    display: flex;
    justify-content: center;
    align-items: center;
        
`;

export const Background = styled(BackgroundContainer)`

    width: 900px;
    transform: scale(0.70);
`;

const Container = styled.div`

    position: absolute;
    top: 98px;
    bottom: 0px;
    left: 0px;
    right: 0px;
`;

const StatFieldContainer = styled.div`

    height: 50%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 15px;

`;

const Title = styled.div`
    

    
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 33px;
    color: #FFF58F;
    position: relative;
    bottom: 120px;
    
    
`;

const ProfileName = styled.div`
    
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    position: absolute;
    right: 45px;

`;


const StatField = styled.div`

    width: 296px;
    height: 68px;

    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 60px;

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

const EditButton = styled(BsPencilSquare)`
    
    width: 50px;
    height: 50px;
    position: absolute;
    left: 390px;
    color: #898989;
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;

`;

const CancelButton = styled(ImCancelCircle)`

    width: 50px;
    height: 50px;
    position: absolute;
    left: 390px;
    color: #898989;
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;

`;

const StatFieldEdit = styled.input`

    width: 296px;
    height: 68px;

    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 60px;

    text-align: center;
        
    color: #FFFFFF;

    background: linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100%);
    border: 3px solid #F2AD43;
    box-sizing: border-box;
    border-radius: 25px;
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
                                        <CancelButton onClick ={ () => {this.setState({hasEditorPermission: null})}}/>
                                        <StatFieldEdit placeholder="Enter username"
                                                       onKeyDown={this.handleKeyDown}
                                                       onChange={e => {
                                                           this.handleInputChange('username', e.target.value);
                                                       }}>
                                        </StatFieldEdit>
                                        <StatField> {this.state.user.score}
                                            <Title>ELO Score</Title>
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
                                            <Title>ELO Score</Title>
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
