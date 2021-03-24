import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';
import {AiOutlineInfoCircle} from "react-icons/ai";
import '../../views/design/tooltip.css'


export const InfoButton = styled(AiOutlineInfoCircle)`

    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    color: #F2AD43;
    
    
    position: absolute;
    width: 45px;
    height: 45px;
    bottom: 40px;
    right: 70px;
    
    
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;

`;

function InfoModal(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(

        <div>
            <InfoButton onClick={() => setModalIsOpen(true)} data-tip data-for="infoTip" />
            <Modal isOpen={modalIsOpen} style={
                {
                    overlay: {
                        textAlign: 'center',
                        backgroundColor: 'white',
                        margin: 'auto',
                        width: '400px',
                        height: '400px',
                        fontFamily: 'PT Mono',
                        paddingLeft: '0px'

                    },
                    content: {
                        color: 'orange',
                        backgroundColor: '#252525'
                    }
                }
            }>
                <h2> TEST </h2>
                <p> TEST BODY </p>
                <div>
                    <button onClick={() => setModalIsOpen(false)}> Close </button>
                </div>
            </Modal>
            <ReactTooltip class ="buttonTooltip" textColor="#252525" backgroundColor="#F2AD43" id="infoTip" place="top" effect="solid">
                About Us
            </ReactTooltip>
        </div>
    );
};

export default InfoModal;