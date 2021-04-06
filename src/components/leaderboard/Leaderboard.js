import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import { BaseeContainer } from '../profile/Profile';
import { TopBar, BackgroundContainer, UsernameInputField } from "../../views/LoginManagement";
import { BackToMenuButton } from "../profile/Profile";
import { GoSearch } from "react-icons/go";
import {Spinner} from "../../views/design/Spinner";

const Background = styled(BackgroundContainer)`

    width: 900px;
    height: 850px;
    transform: scale(0.72);
    position: relative;
    top: 20px;

`;

const InputFieldContainer = styled.div`

    display: flex;
    justify-content: center;
    position: relative;
    top: 25px;
    height: 100px;
    align-items: center;
    
`;

const SearchInputField = styled(UsernameInputField)`

    width: 745px;
    height: 68px;
    text-align: left;
    padding-left: 60px;
    font-size: 30px;
    
`;

const HeadingContainer = styled.div`
    
    position: absolute;
    top: 200px;
    height: 75px;
    left: 155px;
    width: 580px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    

`;

const Heading = styled.div`
    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    
    color: #FFF58F;
`;

const PlayerContainer = styled.div`
    height: 650px;
    display: flex;
    position: relative;
    top: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Player = styled.div`

    width: 619px;
    height: 61px;
    
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    
    background: linear-gradient(90deg, rgba(37, 37, 37, 0.6) 0%, #252525 0.01%, rgba(166, 166, 166, 0) 99.99%, rgba(255, 255, 255, 0) 100%);
    border: 3px solid #F2AD43;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 25px;
    &:hover {
    transform: translateY(-5px);
    }
    transition: all 0.3s ease;
    cursor: pointer;
    
`;

const PlayerInfo = styled.div`

    font-family: PT Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color: #FFFFFF;
`;

const FirstPlayer = styled(Player)`
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.6) 0%, rgba(37, 37, 37, 0) 100%);
`;

const SecondPlayer = styled(Player)`
    background: linear-gradient(90deg, rgba(198, 193, 193, 0.6) 0%, rgba(37, 37, 37, 0) 100%);
`;

const ThirdPlayer = styled(Player)`
    background: linear-gradient(90deg, rgba(206, 135, 65, 0.6) 0%, rgba(37, 37, 37, 0) 100%);
`;

const SearchSymbol = styled(GoSearch)`

    color: #252525;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 90px;
    top: 30px;
    
`;

class Leaderboard extends React.Component {


    constructor() {
        super();
        this.state = {
            users: null,
            username: null
        };
    }

    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({ [key]: value });
    }

    async componentDidMount(){

        try {

            const response = await api.get(`/players/leaderboard`);

            this.setState({users: response.data});

            console.log(this.state.users);

        } catch (error) {
            alert(`Something went wrong while fetching the user: \n${handleError(error)}`);
            this.props.history.push('/menu');
        }

    }

    render(){
        return(
            <BaseeContainer>

                {!this.state.users ? (
                    <Spinner />
                ) : (
                    <div>
                        <Background>
                            <TopBar>LEADERBOARDS</TopBar>
                            <InputFieldContainer>
                                <SearchInputField
                                    placeholder="Search Player..."
                                    onChange={e => {
                                        this.handleInputChange('username', e.target.value);
                                    }}
                                />
                                <SearchSymbol></SearchSymbol>
                            </InputFieldContainer>
                            <PlayerContainer>
                                <FirstPlayer onClick = { () => {this.props.history.push(`/players/${this.state.users[0].id}`)}}>
                                    <PlayerInfo>{this.state.users[0].username}</PlayerInfo>
                                    <PlayerInfo>{this.state.users[0].score}</PlayerInfo>
                                </FirstPlayer>
                                <SecondPlayer onClick = { () => {this.props.history.push(`/players/${this.state.users[1].id}`)}}>
                                    <PlayerInfo>{this.state.users[1].username}</PlayerInfo>
                                    <PlayerInfo>{this.state.users[1].score}</PlayerInfo>
                                </SecondPlayer>
                                <ThirdPlayer onClick = { () => {this.props.history.push(`/players/${this.state.users[2].id}`)}}>
                                    <PlayerInfo>{this.state.users[2].username}</PlayerInfo>
                                    <PlayerInfo>{this.state.users[2].score}</PlayerInfo>
                                </ThirdPlayer>
                                <Player onClick = { () => {this.props.history.push(`/players/${this.state.users[3].id}`)}}>
                                    <PlayerInfo>{this.state.users[3].username}</PlayerInfo>
                                    <PlayerInfo>{this.state.users[3].score}</PlayerInfo>
                                </Player>
                                <Player onClick = { () => {this.props.history.push(`/players/${this.state.users[4].id}`)}}>
                                    <PlayerInfo>{this.state.users[4].username}</PlayerInfo>
                                    <PlayerInfo>{this.state.users[4].score}</PlayerInfo>
                                </Player>
                            </PlayerContainer>
                            <HeadingContainer>
                                <Heading>Username</Heading>
                                <Heading>ELO Score</Heading>
                            </HeadingContainer>
                        </Background>
                        <BackToMenuButton onClick = { () => {this.props.history.push('/menu')}}>
                            <svg width="317" height="44" viewBox="0 0 317 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9294 31.8588L23.2881 28.5L10.7175 15.9294L23.2881 3.35876L19.9294 0L4 15.9294L19.9294 31.8588ZM35.1631 28.5L22.5925 15.9294L35.1631 3.35876L31.8044 0L15.875 15.9294L31.8044 31.8588L35.1631 28.5Z" fill="#F2AD43"/>
                                    <path d="M66.4297 15.0273C67.1328 15.0273 67.7422 15.2852 68.2578 15.8008C68.75 16.293 68.9961 16.9023 68.9961 17.6289C68.9961 19.3633 68.9961 21.9531 68.9961 25.3984C68.9961 26.125 68.75 26.7344 68.2578 27.2266C67.7422 27.7422 67.1328 28 66.4297 28C64.6953 28 62.0938 28 58.625 28C57.4766 28 55.7539 28 53.457 28C53.457 26.8516 53.457 25.1289 53.457 22.832C53.457 21.6602 53.457 19.9258 53.457 17.6289C53.457 16.4805 53.457 14.7578 53.457 12.4609C53.457 11.875 53.457 11.1484 53.457 10.2812C53.457 9.41406 53.457 8.40625 53.457 7.25781C53.457 6.10938 53.457 4.38672 53.457 2.08984C54.6055 2.08984 56.3281 2.08984 58.625 2.08984C60.3594 2.08984 62.9609 2.08984 66.4297 2.08984C67.1328 2.08984 67.7422 2.33594 68.2578 2.82812C68.75 3.34375 68.9961 3.95312 68.9961 4.65625C68.9961 6.39063 68.9961 8.99219 68.9961 12.4609C68.9961 13.1641 68.75 13.7734 68.2578 14.2891C67.7422 14.7812 67.1328 15.0273 66.4297 15.0273ZM58.625 12.4609C59.7969 12.4609 61.5312 12.4609 63.8281 12.4609C63.8281 12.25 63.8281 11.9453 63.8281 11.5469C63.8281 10.5859 63.8281 9.15625 63.8281 7.25781C62.6797 7.25781 60.9453 7.25781 58.625 7.25781C58.625 8.40625 58.625 10.1406 58.625 12.4609ZM58.625 22.832C59.7969 22.832 61.5312 22.832 63.8281 22.832C63.8281 22.6211 63.8281 22.3164 63.8281 21.918C63.8281 20.957 63.8281 19.5273 63.8281 17.6289C62.6797 17.6289 60.9453 17.6289 58.625 17.6289C58.625 18.7773 58.625 20.5117 58.625 22.832ZM89.7383 28C88.5898 28 86.8672 28 84.5703 28C84.5703 25.7031 84.5703 22.2461 84.5703 17.6289C83.4219 17.6289 81.6875 17.6289 79.3672 17.6289C79.3672 19.9258 79.3672 23.3828 79.3672 28C78.2188 28 76.4961 28 74.1992 28C74.1992 26.0547 74.1992 23.125 74.1992 19.2109C74.1992 17.5938 74.1992 15.5781 74.1992 13.1641C74.1992 10.7266 74.1992 7.89062 74.1992 4.65625C74.1992 3.95312 74.457 3.34375 74.9727 2.82812C75.4648 2.33594 76.0742 2.08984 76.8008 2.08984C79.0977 2.08984 82.5547 2.08984 87.1719 2.08984C87.875 2.08984 88.4844 2.33594 89 2.82812C89.4922 3.34375 89.7383 3.95312 89.7383 4.65625C89.7383 9.85938 89.7383 17.6406 89.7383 28ZM84.5703 12.4609C84.5703 12.25 84.5703 11.9453 84.5703 11.5469C84.5703 10.5859 84.5703 9.15625 84.5703 7.25781C83.4219 7.25781 81.6875 7.25781 79.3672 7.25781C79.3672 8.40625 79.3672 10.1406 79.3672 12.4609C80.5391 12.4609 82.2734 12.4609 84.5703 12.4609ZM105.312 9.85938C105.312 9.27344 105.312 8.40625 105.312 7.25781C104.164 7.25781 102.43 7.25781 100.109 7.25781C100.109 10.7266 100.109 15.918 100.109 22.832C101.281 22.832 103.016 22.832 105.312 22.832C105.312 22.2461 105.312 21.3789 105.312 20.2305C106.461 20.2305 108.184 20.2305 110.48 20.2305C110.48 21.3789 110.48 23.1016 110.48 25.3984C110.48 26.125 110.234 26.7344 109.742 27.2266C109.227 27.7422 108.617 28 107.914 28C105.594 28 102.137 28 97.543 28C96.8164 28 96.207 27.7422 95.7148 27.2266C95.1992 26.7344 94.9414 26.125 94.9414 25.3984C94.9414 23.6641 94.9414 21.0625 94.9414 17.5938C94.9414 16.1641 94.9414 14.3828 94.9414 12.25C94.9414 10.0703 94.9414 7.53906 94.9414 4.65625C94.9414 3.95312 95.1992 3.34375 95.7148 2.82812C96.207 2.33594 96.8164 2.08984 97.543 2.08984C99.8398 2.08984 103.297 2.08984 107.914 2.08984C108.617 2.08984 109.227 2.33594 109.742 2.82812C110.234 3.34375 110.48 3.95312 110.48 4.65625C110.48 5.82813 110.48 7.5625 110.48 9.85938C109.332 9.85938 107.609 9.85938 105.312 9.85938ZM131.223 15.0273C131.223 17.9102 131.223 22.2344 131.223 28C130.074 28 128.352 28 126.055 28C126.055 25.7031 126.055 22.2461 126.055 17.6289C124.906 17.6289 123.172 17.6289 120.852 17.6289C120.852 19.9258 120.852 23.3828 120.852 28C119.703 28 117.98 28 115.684 28C115.684 25.1172 115.684 21.5195 115.684 17.207C115.684 12.8945 115.684 7.85547 115.684 2.08984C116.832 2.08984 118.555 2.08984 120.852 2.08984C120.852 4.38672 120.852 7.84375 120.852 12.4609C121.109 12.4609 121.484 12.4609 121.977 12.4609C122.914 10.1406 124.32 6.68359 126.195 2.08984C127.484 2.08984 129.43 2.08984 132.031 2.08984C130.953 4.38672 129.336 7.84375 127.18 12.4609C127.508 12.4609 128 12.4609 128.656 12.4609C129.359 12.4609 129.969 12.707 130.484 13.1992C130.977 13.7148 131.223 14.3242 131.223 15.0273ZM173.516 2.08984C170.938 2.08984 165.758 2.08984 157.977 2.08984C157.977 2.51172 157.977 3.15625 157.977 4.02344C157.977 4.89062 157.977 5.96875 157.977 7.25781C158.844 7.25781 160.566 7.25781 163.145 7.25781C163.145 10.7266 163.145 17.6406 163.145 28C164.012 28 165.746 28 168.348 28C168.348 24.5547 168.348 17.6406 168.348 7.25781C169.215 7.25781 170.938 7.25781 173.516 7.25781C173.516 6.10938 173.516 4.38672 173.516 2.08984ZM194.258 4.65625C194.258 9.27344 194.258 16.1875 194.258 25.3984C194.258 26.125 194.012 26.7344 193.52 27.2266C193.004 27.7422 192.395 28 191.691 28C189.371 28 185.914 28 181.32 28C180.594 28 179.984 27.7422 179.492 27.2266C178.977 26.7344 178.719 26.125 178.719 25.3984C178.719 23.6641 178.719 21.0625 178.719 17.5938C178.719 16.1641 178.719 14.3828 178.719 12.25C178.719 10.0703 178.719 7.53906 178.719 4.65625C178.719 3.95312 178.977 3.34375 179.492 2.82812C179.984 2.33594 180.594 2.08984 181.32 2.08984C183.617 2.08984 187.074 2.08984 191.691 2.08984C192.395 2.08984 193.004 2.33594 193.52 2.82812C194.012 3.34375 194.258 3.95312 194.258 4.65625ZM183.887 22.832C185.059 22.832 186.793 22.832 189.09 22.832C189.09 22.5977 189.09 22.2578 189.09 21.8125C189.09 18.5781 189.09 13.7266 189.09 7.25781C187.941 7.25781 186.207 7.25781 183.887 7.25781C183.887 8.99219 183.887 11.582 183.887 15.0273C183.887 16.7617 183.887 19.3633 183.887 22.832ZM246.113 4.65625C246.113 9.85938 246.113 17.6406 246.113 28C244.965 28 243.242 28 240.945 28C240.945 23.3828 240.945 16.4688 240.945 7.25781C239.797 7.25781 238.062 7.25781 235.742 7.25781C235.742 11.875 235.742 18.7891 235.742 28C234.594 28 232.871 28 230.574 28C230.574 23.3828 230.574 16.4688 230.574 7.25781C229.426 7.25781 227.691 7.25781 225.371 7.25781C225.371 11.875 225.371 18.7891 225.371 28C224.223 28 222.5 28 220.203 28C220.203 26.0547 220.203 23.125 220.203 19.2109C220.203 17.5938 220.203 15.5781 220.203 13.1641C220.203 10.7266 220.203 7.89062 220.203 4.65625C220.203 3.95312 220.461 3.34375 220.977 2.82812C221.469 2.33594 222.078 2.08984 222.805 2.08984C224.516 2.08984 227.105 2.08984 230.574 2.08984C231.301 2.08984 231.91 2.33594 232.402 2.82812C232.918 3.34375 233.176 3.95312 233.176 4.65625C233.176 3.95312 233.422 3.34375 233.914 2.82812C234.43 2.33594 235.039 2.08984 235.742 2.08984C237.477 2.08984 240.078 2.08984 243.547 2.08984C244.25 2.08984 244.859 2.33594 245.375 2.82812C245.867 3.34375 246.113 3.95312 246.113 4.65625ZM266.855 7.25781C266.855 6.39063 266.855 4.66797 266.855 2.08984C265.145 2.08984 261.688 2.08984 256.484 2.08984C255.641 2.08984 253.918 2.08984 251.316 2.08984C251.316 2.95703 251.316 4.67969 251.316 7.25781C251.316 8.125 251.316 9.85938 251.316 12.4609C251.316 13.3047 251.316 15.0273 251.316 17.6289C251.316 18.4961 251.316 20.2305 251.316 22.832C251.316 23.3945 251.316 24.1094 251.316 24.9766C251.316 25.8438 251.316 26.8516 251.316 28C252.465 28 254.188 28 256.484 28C258.805 28 262.262 28 266.855 28C266.855 26.8516 266.855 25.1289 266.855 22.832C264.559 22.832 261.102 22.832 256.484 22.832C256.484 21.6602 256.484 19.9258 256.484 17.6289C258.219 17.6289 260.82 17.6289 264.289 17.6289C264.289 16.4805 264.289 14.7578 264.289 12.4609C262.555 12.4609 259.953 12.4609 256.484 12.4609C256.484 11.2891 256.484 9.55469 256.484 7.25781C258.805 7.25781 262.262 7.25781 266.855 7.25781ZM287.598 4.65625C287.598 9.85938 287.598 17.6406 287.598 28C286.449 28 284.727 28 282.43 28C282.43 23.3828 282.43 16.4688 282.43 7.25781C281.281 7.25781 279.547 7.25781 277.227 7.25781C277.227 11.875 277.227 18.7891 277.227 28C276.078 28 274.355 28 272.059 28C272.059 25.1172 272.059 21.5195 272.059 17.207C272.059 12.8945 272.059 7.85547 272.059 2.08984C273.207 2.08984 274.93 2.08984 277.227 2.08984C278.961 2.08984 281.562 2.08984 285.031 2.08984C285.734 2.08984 286.344 2.33594 286.859 2.82812C287.352 3.34375 287.598 3.95312 287.598 4.65625ZM308.34 2.08984C308.34 7.26953 308.34 15.0391 308.34 25.3984C308.34 26.125 308.094 26.7344 307.602 27.2266C307.086 27.7422 306.477 28 305.773 28C303.453 28 299.996 28 295.402 28C294.676 28 294.066 27.7422 293.574 27.2266C293.059 26.7344 292.801 26.125 292.801 25.3984C292.801 22.8203 292.801 19.5859 292.801 15.6953C292.801 11.8047 292.801 7.26953 292.801 2.08984C293.949 2.08984 295.672 2.08984 297.969 2.08984C297.969 6.68359 297.969 13.5977 297.969 22.832C299.141 22.832 300.875 22.832 303.172 22.832C303.172 18.2148 303.172 11.3008 303.172 2.08984C304.32 2.08984 306.043 2.08984 308.34 2.08984Z" fill="#F2AD43"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d" x="0" y="0" width="312.34" height="43.8588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dy="8"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </BackToMenuButton>
                    </div>
                )}

            </BaseeContainer>

        );
    }
}

export default withRouter(Leaderboard);