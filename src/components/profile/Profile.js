import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import Player from "../../views/Player";
import {Spinner} from "../../views/design/Spinner";
import {BaseContainer} from "../../helpers/layout";
import { TopBar, BackgroundContainer } from "../../views/LoginManagement";

const BaseeContainer = styled(BaseContainer)`
    
    display: flex;
    justify-content: center;
    align-items: center;
        
`;

const Background = styled(BackgroundContainer)`

    width: 900px;
    transform: scale(0.85);
`;

const Container = styled.div`

    border: 2px solid black;
    position: absolute;
    top: 98px;
    bottom: 0px;
    left: 0px;
    right: 0px;
`;

const StatFieldContainer = styled.div`

    border: 2px solid grey;
    height: 50%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

`;

const StatField = styled.div`

    width: 296px;
    height: 68px;
    
    background: linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100%);
    border: 3px solid #F2AD43;
    box-sizing: border-box;
    border-radius: 25px;
`;

class Profile extends React.Component {


    constructor(){
        super();
        this.state = {
            user: null
        };
    }

    async componentDidMount() {
        try {

            if(!localStorage.getItem('token')){
                this.props.history.push('/');
            }
            else {

                const { match: { params } } = this.props;
                const response = await api.get(`/players/${params.id}`);

                await new Promise(resolve => setTimeout(resolve, 1));

                this.setState({user: response.data});

                // console.log('request to:', response.request.responseURL);
                // console.log('status code:', response.status);
                // console.log('status text:', response.statusText);
                // console.log('requested data:', response.data);
                //
                // console.log(response);

            }

        } catch (error) {
            alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
        }
    }

    render() {
        return(
            <BaseeContainer>
                <Background>
                    <TopBar>PROFILE</TopBar>
                    <Container>
                        <StatFieldContainer>
                            <StatField></StatField>
                            <StatField></StatField>
                        </StatFieldContainer>
                        <StatFieldContainer>
                            <StatField></StatField>
                            <StatField></StatField>
                        </StatFieldContainer>
                    </Container>
                </Background>



            </BaseeContainer>
        );
    }
}

export default withRouter(Profile);