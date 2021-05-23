import React, { useState } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import soundtrack from '../home/soundtrack.mp3';
import { makeStyles } from '@material-ui/core/styles';
import {BsVolumeUp} from 'react-icons/bs';
import {BsVolumeDown} from 'react-icons/bs';
import Slider from '@material-ui/core/Slider';

const PlayButton = styled.div`

    &:hover {
        transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: Cornerstone;
    font-style: normal;
    font-weight: normal;
    font-size: 1.88vh;
    color: #F2AD43;
    
    text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);

`;

const PlayButtonWrapper = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SliderWrapper = styled.div`
    
    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: 15%;
`;

const SliderWrapper2 = styled.div`
    
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Wrapper = styled.div`
    
    position: absolute;
    right: 0vw;
    top: 1vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 12vh;
    width: 13vw;
    
`;

const VolumeUp = styled(BsVolumeUp)`
    color: #F2AD43;
`;

const VolumeDown = styled(BsVolumeDown)`
    color: #F2AD43;
`;

const useStyles = makeStyles({
    slider: {
        color: '#F2AD43',
    },
});

const Soundtrack = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const classes = useStyles();
    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
            <Wrapper>
                <PlayButtonWrapper>
                    <PlayButton onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? '<< Play Soundtrack >>' : '<< Pause Soundtrack >>'}</PlayButton>
                </PlayButtonWrapper>
                <Sound
                    volume={value}
                    url={soundtrack}
                    playStatus={
                        isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED
                    }
                />
                <SliderWrapper>
                    <VolumeDown/>
                    <SliderWrapper2>
                        <Slider className={classes.slider} value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </SliderWrapper2>
                    <VolumeUp/>
                </SliderWrapper>
            </Wrapper>
    )
}

export default Soundtrack;