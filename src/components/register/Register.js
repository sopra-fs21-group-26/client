import React from 'react';
import styled from 'styled-components';
import {BaseContainer, TopBar, BackgroundContainer, InputFieldContainer, UsernameInputField, PasswordInputField, ArrowButton} from "../../views/LoginManagement";
import {FaClipboardCheck} from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

export const RegisterButton = styled(FaClipboardCheck)`
    
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
    
    position: absolute;
    bottom: 100px;
    right: 120px;
    width: 60px;
    height: 60px;
    

    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
    transform: ${props => (props.disabled ? "translateY(0px)" : "translateY(-5px)")}
    }
    transition: all 0.3s ease;
    
    cursor: ${props => (props.disabled ? "default" : "pointer")};
    opacity: ${props => (props.disabled ? 0.4 : 1)};
  
`;


class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            username: null,
            password: null
        };
    }

    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({ [key]: value });
    }


    componentDidMount() {}

    render(){
        return(
            <BaseContainer>

                <BackgroundContainer>

                    <TopBar> Register </TopBar>

                    <InputFieldContainer>

                        <UsernameInputField
                            placeholder="username"
                            onChange={e => {
                                this.handleInputChange('username', e.target.value);
                            }}
                        />
                        <PasswordInputField
                            placeholder="password"
                            onChange={e => {
                                this.handleInputChange('password', e.target.value);
                            }}
                        />
                        <ArrowButton onClick={ () => {this.props.history.push("/")}}/>
                        <RegisterButton disabled={!this.state.username || !this.state.password}/>

                    </InputFieldContainer>


                </BackgroundContainer>

            </BaseContainer>

        );
    }
}

export default withRouter(Register);