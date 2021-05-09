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

// Reworked
export const TopBar = styled.div`

  font-family: Cornerstone;
  font-style: normal;
  font-weight: normal;
  font-size: 4.16vh;
  color: #252525;
  
  height: 18%;
  padding-left: 4%; 
  display: flex;
  align-items: center;
  position: relative;
  
  background: #F2AD43;
  border-radius: 20px 20px 0px 0px;

`;

// Reworked

export const BackgroundContainer = styled.div`
  
  width: 29.00%;
  height: 57.31%;

  background: #3C3B38;
  border-radius: 20px;
  
`;

// Reworked
export const InputFieldContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 92%;

`;

// Reworked
export const UsernameInputField = styled.input`

    &::placeholder {
    color: #252525;
    }
    width: 72%;
    height: 16.5%;
    
    border: none;
    border-radius: 20px;
    margin-bottom: 20px;
    background: #777777;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    color: #252525;
    font-family: PT Mono;
    font-size: 2.66vh;
      
    position: absolute;
    top: 10%;
    text-align: center;
`;

// Reworked
export const PasswordInputField = styled(UsernameInputField)`
    
    top: 40%;

`;

// Reworked
export const ArrowButton = styled(FaArrowAltCircleLeft)`

  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  color: #F2AD43;
  
  position: absolute;
  bottom: 16.07%;
  left: 25.30%;
  width: 9.45%;
  height: 19.2%;
  
  &:hover {
  transform: translateY(-5px);
  }
  transition: all 0.3s ease;
  cursor: pointer;

`;

// Reworked
export const LoginButton = styled(FaCheckCircle)`

  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  color: #F2AD43;
  
  position: absolute;
  bottom: 16.07%;
  right: 23.30%;
  width: 9.45%;
  height: 19.2%;
  
  &:hover {
  transform: ${props => (props.disabled ? "translateY(0px)" : "translateY(-5px)")}
  }
  transition: all 0.3s ease;

  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};

`;

// Reworked
export const RegisterButton = styled(FaClipboardCheck)`
    
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
    
    position: absolute;
    bottom: 19%;
    right: 23.30%;
    width: 7.08%;
    height: 14.4%;
    

    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
    transform: ${props => (props.disabled ? "translateY(0px)" : "translateY(-5px)")}
    }
    transition: all 0.3s ease;
    
    cursor: ${props => (props.disabled ? "default" : "pointer")};
    opacity: ${props => (props.disabled ? 0.4 : 1)};
  
`;