import React, { Component } from 'react';
import rest from 'rest';
import mime from 'rest/interceptor/mime';
import entity from 'rest/interceptor/entity';
import { WELCOME, GAME, ENDGAME } from './constants/Pages'
import WelcomeScreen from './components/WelcomeScreen.js'
import GameScreen from './components/GameScreen.js'
import EndgameScreen from './components/EndgameScreen.js'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: WELCOME,
            game: {
                ownScore: 0,
                ownSlots: [6, 6, 6, 6, 6, 6],
                opponentSlots: [6, 6, 6, 6, 6, 6],
                opponentScore: 0
            },
            error: null
        };

        this.joinGame = this.joinGame.bind(this);
    }

    joinGame() {
        console.log(">> join");
        var client = rest.wrap(mime, { mime: 'application/json' }).wrap(entity);
        client({ path: 'http://localhost:8080/api/kalah/join' })
            .done(response => {
                console.log(response);
                this.setState({ ...this.state, page: GAME, "playerId": response.id });
            }, e => {
                console.log('response error: ', JSON.stringify(e));
                this.setState({ ...this.state, "error": "Can not connect " + e });
            }
            );
    }

    render() {
        let currentComponent = null;
        switch (this.state.page) {
            case GAME: currentComponent = <GameScreen game={this.state.game} />; break;
            case ENDGAME: currentComponent = <EndgameScreen />; break;
            default: currentComponent = <WelcomeScreen onJoin={this.joinGame} />;
        }
        return (
            <div>
                {currentComponent}
                <div className="App-error">{this.state.error}</div>
            </div>
        );

    }

}

export default App 
