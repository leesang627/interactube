import { combineReducers } from 'redux';
import player from './player';
import interactube from './interactube';

const rootReducer = combineReducers({
	player,
	interactube,
});

export default rootReducer;