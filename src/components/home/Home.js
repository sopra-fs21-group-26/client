import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import {withRouter} from "react-router-dom";
import Header from "../../views/Header";

const Container = styled.div`

    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    height: 170px;
    top: 100px;

`;

const LoginButton = styled.div` 
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    color: #FFFFFF;
    
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    
    
`;

const RegisterButton = styled(LoginButton)`

    color: #7E7E7E;
 
    position: absolute;
    
    bottom: 0px;
    
`;

class Home extends React.Component {

    componentDidMount() {}

    render(){
        return(
            <BaseContainer>
                <Header height={"250"} />
                <Container>
                    <LoginButton onClick={ () => {this.props.history.push("/login")}}>
                        LOGIN
                    </LoginButton>
                    <RegisterButton>
                        REGISTER
                    </RegisterButton>
                </Container>
            </BaseContainer>
        );
    }
}

export default withRouter(Home);