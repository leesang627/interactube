import produce from 'immer';

const initialState = {
	mode: 'original',
	videoUrl: 'https://www.youtube.com/watch?v=cVPX3tzQwo0',
};

export const CHANGE_PLAYER_MODE = 'CHANGE_PLAYER_MODE';
export const CHANGE_VIDEO_URL = 'CHANGE_VIDEO_URL';

export const changePlayerMode = (mode) => ({
	type: CHANGE_PLAYER_MODE,
	payload: mode,
});

export const changeVideoUrl = (url) => ({
	type: CHANGE_VIDEO_URL,
	payload: url,
});

const player = produce((draft, action) => {
	switch(action.type) {
		case CHANGE_PLAYER_MODE: {
			draft.mode = action.payload;
			return;
		}
		case CHANGE_VIDEO_URL: {
			draft.videoUrl = action.payload;
			return;
		}
	}
}, initialState);

export default player;

