import styled from 'styled-components';
import {FaArrowAltCircleLeft, FaCheckCircle, FaClipboardCheck} from "react-icons/fa";

export const BaseContainer = styled.div`
  margin-left: auto;
  padding-left: 15px;
  margin-right: auto;
  padding-right: 15px;
  
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  bottom: 20px;
  
`;

export const TopBar = styled.div`

  font-family: Cornerstone;
  font-style: normal;
  font-weight: normal;
  font-size: 39px;
  color: #252525;
  
  height: 98px;
  padding-left: 25px; 
  display: flex;
  align-items: center;
  position: relative;
  
  background: #F2AD43;
  border-radius: 20px 20px 0px 0px;

`;

export const BackgroundContainer = styled.div`
  
  width: 552px;
  height: 537px;

  background: #3C3B38;
  border-radius: 20px;

`;

export const InputFieldContainer = styled(BackgroundContainer)`

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid red;
    
 
`;

export const UsernameInputField = styled.input`

    &::placeholder {
    color: #252525;
    }
    width: 375px;
    height: 86px;
    
    border: none;
    border-radius: 20px;
    margin-bottom: 20px;
    background: #777777;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    color: #252525;
    font-family: PT Mono;
    font-size: 25px;
      
    position: absolute;
    top: 10%;
    text-align: center;
`;

export const PasswordInputField = styled(UsernameInputField)`
    
    top: 40%;

`;

export const ArrowButton = styled(FaArrowAltCircleLeft)`

  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  color: #F2AD43;
  
  position: absolute;
  bottom: 100px;
  left: 120px;
  width: 60px;
  height: 60px;
  
  &:hover {
  transform: translateY(-5px);
  }
  transition: all 0.3s ease;
  cursor: pointer;

`;

export const LoginButton = styled(FaCheckCircle)`

  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  color: #F2AD43;
  
  position: absolute;
  bottom: 100px;
  right: 120px;
  width: 60px;
  height: 60px;
  
  &:hover {
  transform: ${props => (props.disabled ? "translateY(0px)" : "translateY(-5px)")}
  }
  transition: all 0.3s ease;

  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};

`;

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