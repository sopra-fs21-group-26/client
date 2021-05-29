import React from 'react';
import styled from "styled-components";

const TextContainer = styled.div`

    height: 72.5%;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 18px;
      height: 18px;
    }
    ::-webkit-scrollbar-button {
      width: 70px;
      height: 70px;
    }
    ::-webkit-scrollbar-thumb {
      background: #F2AD43;
      border: 0px none #ffffff;
      border-radius: 26px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #FFF58F;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #ffffff;
    }
    ::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 26px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    ::-webkit-scrollbar-track:active {
      background: #666666;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
 
    padding-left: 4%;
    padding-right: 3%;
    
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 2.2vh;
    line-height: 220%;
    color: #FFFFFF;

`;

function Tutorial(){
    return(
        <TextContainer>
            <h1>What is "Pictures"?</h1>
            <p>

                In Pictures, each player simultaneously tries to copy a picture with one of five different materials: building blocks, sticks and stones, icon cards, color cubes, or a drawable string. <b>You can find further information on each of the material sets at the bottom of this tutorial.</b>
                <br/>
                Following this, each player decides which of the 16 displayed pictures has been copied. The game ends after five rounds.
            </p>
            <h1>Sequence of a Round</h1>
            <p>
                1. Each player has to click on the "Generate Picture" button to be assigned a random picture from the grid.
                <br/>
                <br/>
                2. All players simultaneously rebuild the image with their set of materials in such a way that it is recognizable. After a player has rebuilt the assigned picture, he shall click the "Submit Guess" button.
                <br/>
                <br/>
                The materials of the set may be arranged in any way and not all of them have to be used.
                <br/>
                <br/>
                3. What photo have the other players pictured?
                <br/>
                <br/>
                After every player has submitted his picture, all the recreations are shown on the Guessing screen. In order to guess, a player must first click on the user he wants to submit a guess for, and then click the respective image on the grid.
                <br/>
                <br/>
                4. After every player has submitted his guesses, the scoreboard (total scores) is shown. A player gets 2 points everytime his recreation was correctly guessed, and 1 point for correctly guessing the creation of another player.
                <br/>
                <br/>
                After every player has clicked on the "Next Round" button, the material sets are rotated and the next round starts.
            </p>
            <h1>End of the Game</h1>
            <p>
                The game ends after 5 rounds. Each player then has pictured one photo with each set of materials once. Whoever has scored the most points wins the game. In case of a tie, all players participating in the tie win together.
            </p>
            <h1>Set Tutorial</h1>
            <p>
                Set 1: <b>Drawable String</b> - With this set you are able to redraw the assigned picture by holding the left mouse button and moving around on the white canvas. Do this in one continuous stroke. Please note that if you touch the edges of the canvas, or lift your mouse, the recreation process stops.
                <br/>
                <br/>
                Set 2: <b>Color Cubes</b> - You are presented a square canvas and a selection of colored cubes. You can simply drag and drop the cubes onto the canvas. Please note that the cubes snap to the canvas after you drop them. You can use each color three times at most. Attention: once dropped onto the canvas, you are not able to drag them out. However, you are always able to rearrange them between each other.
                <br/>
                <br/>
                Set 3: <b>Building Blocks</b> - Similar to the colored cubes, you are presented a canvas and a selection of shapes. You can choose between circles, squares or triangles. Please note that you can use each building block at most twice. Attention: once dropped on to the canvas, you are not able to drag them out. However, you are always able to rearrange them between each other.
                <br/>
                <br/>
                Set 4: <b>Icon Cards</b> - You are presented a canvas and a selection of icon cards. You can drag and drop the icon cards onto the canvas. Depending on the assigned picture, you may feel like it is impossible to recreate it with these cards. We encourage you to be as creative as possible! Attention: once dropped on to the canvas, you are not able to drag them out. However, you are always able to rearrange them between each other.
                <br/>
                <br/>
                Set 5: <b>Sticks & Stones</b> - Similar to the building blocks, you are presented a canvas and a selection of sticks and stones. You can simply drag and drop them onto the canvas. Attention: once dropped on to the canvas, you are not able to drag them out. However, you are always able to rearrange them between each other.
            </p>
        </TextContainer>
    );
}

export default Tutorial;
