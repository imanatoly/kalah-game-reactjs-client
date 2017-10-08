import React, { Component } from 'react';
import Cell from './Cell.js';
import Slot from './Slot.js';

class Board extends Component {

  render() {
    const game = this.props.game;
    return (
      <div className="Board">
        <table>
          <tbody>
            <tr>
              <td rowSpan={2}><div className="Kalah">{game.opponentScore}</div></td>
              <td><Cell value={game.opponentSlots[5]} index={5} /></td>
              <td><Cell value={game.opponentSlots[4]} index={4} /></td>
              <td><Cell value={game.opponentSlots[3]} index={3} /></td>
              <td><Cell value={game.opponentSlots[2]} index={2} /></td>
              <td><Cell value={game.opponentSlots[1]} index={1} /></td>
              <td><Cell value={game.opponentSlots[0]} index={0} /></td>
              <td />
            </tr>
            <tr>
              <td colSpan={6}><span>&nbsp;</span></td>
              <td rowSpan={2}><div className="Kalah">{game.opponentScore}</div></td>
            </tr>
            <tr>
              <td />
              <td><Slot value={game.ownSlots[0]} index={0} /></td>
              <td><Slot value={game.ownSlots[1]} index={1} /></td>
              <td><Slot value={game.ownSlots[2]} index={2} /></td>
              <td><Slot value={game.ownSlots[3]} index={3} /></td>
              <td><Slot value={game.ownSlots[4]} index={4} /></td>
              <td><Slot value={game.ownSlots[5]} index={5} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Board
