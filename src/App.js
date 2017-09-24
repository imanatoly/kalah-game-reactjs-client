import React, {Component} from 'react';
import logo from './img/logo.svg';
import './App.css';
import rest from 'rest';
import mime from 'rest/interceptor/mime';
import entity from 'rest/interceptor/entity';

const Page = {
    WELCOME: "/welcome",
    GAME: '/game',
    ENDGAME: "/end"
};

class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="Cell"><span>{this.props.value}</span></div>)
    }
}

class Slot extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
    }

    play(e){
        alert(this.props.index)
    }

    render() {
        return (<div className="Slot" onClick={this.play}><span>{this.props.value}</span></div>)
    }
}

class Board extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const game = this.props.game;
        return (
            <div className="Board">
            <table>
            <tbody>
                <tr>
                    <td rowSpan={2}><div className="Kalah">{game.opponentScore}</div></td>
                    <td><Cell value={game.opponentSlots[5]} index={5}/></td>
                    <td><Cell value={game.opponentSlots[4]} index={4}/></td>
                    <td><Cell value={game.opponentSlots[3]} index={3}/></td>
                    <td><Cell value={game.opponentSlots[2]} index={2}/></td>
                    <td><Cell value={game.opponentSlots[1]} index={1}/></td>
                    <td><Cell value={game.opponentSlots[0]} index={0}/></td>
                    <td/>
                </tr>
                <tr>
                    <td colSpan={6}><span>&nbsp;</span></td>
                    <td rowSpan={2}><div className="Kalah">{game.opponentScore}</div></td>
                </tr>
                <tr>
                    <td/>
                    <td><Slot value={game.ownSlots[0]} index={0}/></td>
                    <td><Slot value={game.ownSlots[1]} index={1}/></td>
                    <td><Slot value={game.ownSlots[2]} index={2}/></td>
                    <td><Slot value={game.ownSlots[3]} index={3}/></td>
                    <td><Slot value={game.ownSlots[4]} index={4}/></td>
                    <td><Slot value={game.ownSlots[5]} index={5}/></td>
                </tr>
            </tbody>
            </table>
            </div>
        )
    }
}

class GameScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Board game={this.props.game}/>
    }

}

class WelcomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome</h2>
                </div>
                <div>
                    <button onClick={this.props.doJoin}>New Game</button>
                </div>
            </div>
        );
    }

}

class EndgameScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>TODO</div>)
    }
}

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            page : Page.WELCOME
        };

        this.join = this.join.bind(this);
    }

    join(e) {
		var client = rest.wrap(mime, { mime: 'application/json' }).wrap(entity);
    	client({ path: 'http://localhost:8080/api/kalah/join'})
        	.done(response => {
        		console.log(response);
        		console.log(response.id);
    			this.setState({
    				page: Page.GAME,
					game: {
						ownScore: 0,
						ownSlots: [6,6,6,6,6,6],
						opponentSlots: [6,6,6,6,6,6],
						opponentScore: 0
					},
    				playerId: response.id

    			});
    		});
    }

    render() {
        const page = this.state.page;
        if (page === Page.GAME) {
            return (<GameScreen game={this.state.game}/>)
        } else if (page === Page.ENDGAME) {
            return (<EndgameScreen/>)
        } else {
            return (<WelcomeScreen doJoin={this.join}/>)
        }
    }
}

export default App;
