import React from 'react';
import { api, handleError } from '../../helpers/api';
import User from '../shared/models/User';
import { withRouter } from 'react-router-dom';
import {BaseContainer, TopBar, BackgroundContainer, InputFieldContainer, UsernameInputField, PasswordInputField, ArrowButton, LoginButton} from "../../views/LoginManagement";

/**
 * Classes in React allow you to have an internal state within the class and to have the React life-cycle for your component.
 * You should have a class (instead of a functional component) when:
 * - You need an internal state that cannot be achieved via props from other parent components
 * - You fetch data from the server (e.g., in componentDidMount())
 * - You want to access the DOM via Refs
 * https://reactjs.org/docs/react-component.html
 * @Class
 */
class Login extends React.Component {
  /**
   * If you don’t initialize the state and you don’t bind methods, you don’t need to implement a constructor for your React component.
   * The constructor for a React component is called before it is mounted (rendered).
   * In this case the initial state is defined in the constructor. The state is a JS object containing two fields: name and username
   * These fields are then handled in the onChange() methods in the resp. InputFields
   */
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };
  }

  async login() {
    try {
      const requestBody = JSON.stringify({
        username: this.state.username,
        password: this.state.password
      });
      const response = await api.put('/login', requestBody);

      // Get the returned user and update a new object.
      const user = new User(response.data);

      // Store the token into the local storage.
      localStorage.setItem('token', user.token);
      localStorage.setItem('userID', user.id);
      localStorage.setItem('username', user.username);

      // Login successfully worked --> navigate to the route /game in the GameRouter
      this.props.history.push(`/menu`);
    } catch (error) {
      alert(`Something went wrong during the login: \n${handleError(error)}`);
    }
  }

  /**
   *  Every time the user enters something in the input field, the state gets updated.
   * @param key (the key of the state for identifying the field that needs to be updated)
   * @param value (the value that gets assigned to the identified state key)
   */
  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }

  render(){
    return(
        <BaseContainer>

          <BackgroundContainer>

            <TopBar> Login </TopBar>

            <InputFieldContainer>

              <UsernameInputField
                  placeholder="username"
                  onChange={e => {
                    this.handleInputChange('username', e.target.value);
                  }}
              />
              <PasswordInputField
                  placeholder="password"
                  type="password"
                  onChange={e => {
                    this.handleInputChange('password', e.target.value);
                  }}
              />
              <ArrowButton onClick={ () => {this.props.history.push("/")}}/>
              <LoginButton disabled={!this.state.username || !this.state.password}
                           onClick={() => {
                             this.login();
                           }}
              />

            </InputFieldContainer>

          </BackgroundContainer>

        </BaseContainer>

    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Login);