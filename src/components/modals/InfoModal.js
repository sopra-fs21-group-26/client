import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import {AiOutlineInfoCircle} from "react-icons/ai";
import '../../views/design/tooltip.css'


export const InfoButton = styled(AiOutlineInfoCircle)`

    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
       
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
    width: 45px;
    height: 45px;

`;

const Container = styled.div`

    display: flex;
    align-items: center;
    
    justify-content: center;

    width: 45px;
    height: 45px;
    position: absolute;
    bottom: 40px;
    right: 70px;

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
                <h2>TEST</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                    hendrerit risus, sed porttitor quam.
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
