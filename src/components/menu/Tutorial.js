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
                Following this, each player decides which of the 16 displayed pictures has been copied. The game ends after five rounds, when each player has used each material once.
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
                <b>There are three exceptions:</b> The drawable string must be used. Players must place 2 to 5 icon cards side by side and they must use exactly 9 color cubes and place them in a 3 by 3 square grid.
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
                PLACEHOLDER
            </p>
        </TextContainer>
    );
};

export default Tutorial;
