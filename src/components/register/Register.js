import React from 'react';
import {BaseContainer, TopBar, BackgroundContainer, InputFieldContainer, UsernameInputField, PasswordInputField, ArrowButton, RegisterButton} from "../../views/LoginManagement";
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import User from "../shared/models/User";

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

    async register() {

        try {
            const requestBody = JSON.stringify({
                username: this.state.username,
                password: this.state.password
            });

            const response = await api.post('/players', requestBody);

            const user = new User(response.data);

            console.log('request to:', response.request.responseURL);
            console.log('status code:', response.status);
            console.log('status text:', response.statusText);
            console.log('requested data:', response.data);

            localStorage.setItem('token', user.token);
            localStorage.setItem('userID', user.id);
            localStorage.setItem('username', user.username);

            this.props.history.push('/menu');

        } catch (error) {
            alert(`Something went wrong during the registration: \n${handleError(error)}`);
        }
    }

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
                          type="password"
                            placeholder="password"
                            onChange={e => {
                                this.handleInputChange('password', e.target.value);
                            }}
                        />
                        <ArrowButton onClick={ () => {this.props.history.push("/")}}/>
                        <RegisterButton disabled={!this.state.username || !this.state.password}
                                        onClick={() => {
                                            this.register();
                                        }}/>

                    </InputFieldContainer>


                </BackgroundContainer>

            </BaseContainer>

        );
    }
}

export default withRouter(Register);