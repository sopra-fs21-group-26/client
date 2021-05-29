import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {api} from "../../../helpers/api";

export const InGameGuard = props => {

    const params = useParams();
    let history = useHistory();
    const isPlaying = checkPlayerStatus();

    console.log("CHECKING...")

    async function checkPlayerStatus(){

        const response = await api.get(`/players/${localStorage.getItem('userID')}`);

        console.log(response.data.playerStatus)

        if(response.data.playerStatus === "PLAYING"){
            return true;
        }

        else{
            return false;
        }

    }

    console.log(isPlaying)

    if(isPlaying === true){
        history.goBack();
    }
    else{
        return props.children;
    }
};