import { combineReducers } from 'redux';
import player from './player';
import interactube from './interactube';
import bookmarks from './bookmarks';

const rootReducer = combineReducers({
	player,
	interactube,
	bookmarks,
});

export default rootReducer;