import React, { useState } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import soundtrack from '../home/soundtrack.mp3';

const PlayButton = styled.div`

    &:hover {
        transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 2.33vh;
    color: #F2AD43;
    
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);

`;

const PlayButtonWrapper = styled.div`
    
    width: 18%;
    
    position: absolute;
    top: 2.7vh;
    right: 0vw;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Soundtrack = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <div>
            <PlayButtonWrapper>
                <PlayButton onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? '<< Play Soundtrack >>' : '<< Stop Soundtrack >>'}</PlayButton>
            </PlayButtonWrapper>
            <Sound
                url={soundtrack}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPLaying={handleSongFinishedPlaying}
            />
        </div>
    )
}

export default Soundtrack;