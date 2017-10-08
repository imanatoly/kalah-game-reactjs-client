import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Pages from '../constants/Pages.js';
import WelcomeScreen from '../components/WelcomeScreen.js'
import GameScreen from '../components/GameScreen.js'
import EndgameScreen from '../components/EndgameScreen.js'
import * as GameActions from '../actions'

const App = ({ page, game, error, actions }) => {
    let currentComponent = null;
    switch (page) {
        case Pages.GAME: currentComponent = <GameScreen game={game}/>; break;
        case Pages.ENDGAME: currentComponent = <EndgameScreen />; break;
        default: currentComponent = <WelcomeScreen onJoin={actions.joinGame}/>;
    }
    return (
        <div>
            {currentComponent}
            <div className="App-error">{error}</div>
        </div>
    );

}

App.propTypes = {
    page: PropTypes.string.isRequired,
    game: PropTypes.object.isRequired,
    gameId: PropTypes.string,
    error: PropTypes.string
}

const mapStateToProps = state => {
    console.log("State! "+JSON.stringify(state));
    return ({
        page: state.page,
        game: state.game,
        gameId: state.gameId,
        error: state.error
    })
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GameActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

