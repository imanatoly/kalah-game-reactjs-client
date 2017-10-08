import rest from 'rest';
import mime from 'rest/interceptor/mime';
import entity from 'rest/interceptor/entity';
import { WELCOME, GAME, ENDGAME } from '../constants/Pages'
import { JOIN_GAME, WAIT, PLAY } from '../constants/ActionTypes'

const initialState = {
    ownScore: 0,
    ownSlots: [6, 6, 6, 6, 6, 6],
    opponentSlots: [6, 6, 6, 6, 6, 6],
    opponentScore: 0
}


function join() {
  alert("join");
  var client = rest.wrap(mime, { mime: 'application/json' }).wrap(entity);
  client({ path: 'http://localhost:8080/api/kalah/join' })
    .done(response => {
      console.log(response);
      console.log(response.error);
      console.log(response.id);
      return response.id;
    }, e => {
      console.log('response error: ', e);
      return null;
    }
    );
}

export default function game(state = initialState, action) {
  console.log("state: " + JSON.stringify(state));
  console.log("page: " + state.page);
  console.log("action: " + action.type);
  switch (action.type) {
    case JOIN_GAME:
      return {
        ...state, playerId: join()
      }
    case WAIT:
      return state.filter(todo =>
        todo.id !== action.id
      )
    case PLAY:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    default:
      return state
  }
}
