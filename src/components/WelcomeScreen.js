import React, { Component } from 'react';
import logo from '../assets/logo.svg';

export default class WelcomeScreen extends Component {

    joinGame = () => this.props.onJoin();

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Kalah Game</h2>
                </div>
                <div className="App-menu">
                    <button onClick={this.joinGame}>Start</button>
                </div>
            </div>
        );
    }

}
