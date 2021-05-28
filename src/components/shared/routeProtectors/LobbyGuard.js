import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const LobbyGuard = props => {

    const params = useParams();
    let history = useHistory();

    if (localStorage.getItem("lobby_ID")) {

        if(localStorage.getItem("lobby_ID") === params.lobbyId){
            return props.children;
        }
    }
    return history.goBack();
};