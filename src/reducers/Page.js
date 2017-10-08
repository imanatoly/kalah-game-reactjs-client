import { WELCOME, GAME, ENDGAME } from '../constants/Pages'
import { JOIN_GAME, WAIT, PLAY } from '../constants/ActionTypes'

const initialState = WELCOME

export default function page(state = initialState, action) {
  console.log(JSON.stringify(state));
  console.log("page: " + state.page);
  console.log("action: " + action.type);
  //alert("game " + state + ", " + action);
  switch (action.type) {
    case JOIN_GAME:
      return GAME;
    case WAIT:
    case PLAY:
    default:
      return state
  }
}
