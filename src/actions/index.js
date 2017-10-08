import * as types from '../constants/ActionTypes'

export const joinGame = () => ({ type: types.JOIN_GAME })
export const play = id => ({ type: types.PLAY, id })
