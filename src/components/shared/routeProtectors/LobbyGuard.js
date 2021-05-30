import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

export const LobbyGuard = props => {

    if(localStorage.getItem('inLobby') === 'true'){
        return <Redirect to={`/lobbies/${localStorage.getItem('lobby_ID')}`} />;
    }

    else{
        return props.children;
    }
};