import React from "react";
import styled, {keyframes} from "styled-components";
import { PicturesLogo } from "./PicturesLogo";

/**
 * Using styled-components you can visual HTML primitives and use props with it!
 * The idea behind this external package, it's to have a better structure and overview for your HTML and CSS
 * Using styled-components, you can have styling conditions using the following syntax: ${props => ...}
 * https://www.styled-components.com/
 */

const Container = styled.div`

  height: ${props => props.height}%;
  background: ${props => props.background};
  
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(360deg) scale(0.7);
  }
  
  100% {
    transform: rotate(720deg) scale(1);
  }
  
`;

const LogoWrapper = styled.div`

    
    animation: ${rotate} 45s linear infinite;
`;

/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const Header = props => {
  return (
    <Container height={props.height}>

        <LogoWrapper><PicturesLogo width={15.76} height={32.01} /></LogoWrapper>

    </Container>
  );
};

/**
 * Don't forget to export your component!
 */
export default Header;
