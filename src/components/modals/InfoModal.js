import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import {AiOutlineInfoCircle} from "react-icons/ai";
import '../../views/design/tooltip.css'

// Reworked
export const InfoButton = styled(AiOutlineInfoCircle)`

    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
       
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
    width: 100%;
    height: 100%;

`;

// Reworked
const Container = styled.div`

    display: flex;
    align-items: center;
    
    justify-content: center;

    width: 2.36%;
    height: 4.80%;
    position: absolute;
    bottom: 4.26%;
    right: 3.67%;

`;


const InfoModal = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const style = {
        overlay: {
            background: "grey"
        }
    };

    return (
        <Container>
            <InfoButton onClick={onOpenModal} data-tip data-for="infoTip"/>
            <ReactTooltip class ="buttonTooltip" textColor="#252525" backgroundColor="#F2AD43" id="infoTip" place="top" effect="solid">
                About Us
            </ReactTooltip>
            <Modal styles={style} open={open} onClose={onCloseModal} center>
                <h2>About Us</h2>
                <p>
                    This page is still a placeholder and will be reworked in a future release.
                    For now, if you are interested in learning more about us, be sure to check out our GitHub page or take a look at the README file.
                </p>
            </Modal>
        </Container>
    );
}

export default InfoModal;

/*
<ReactTooltip class ="buttonTooltip" textColor="#252525" backgroundColor="#F2AD43" id="infoTip" place="top" effect="solid">
    About Us
</ReactTooltip>

data-tip data-for="infoTip"*/
