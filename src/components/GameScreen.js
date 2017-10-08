import React, { Component } from 'react';
import Board from './Board.js';

class GameScreen extends Component {

    render() {
        return <Board game={this.props.game}/>
    }
}

export default GameScreen
