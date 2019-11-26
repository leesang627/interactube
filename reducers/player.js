const initialState = {
	mode: 'original',
	videoUrl: 'https://www.youtube.com/watch?v=LrJsWl9miZY',
};

export const CHANGE_PLAYER_MODE = 'CHANGE_PLAYER_MODE';
export const CHANGE_VIDEO_URL = 'CHANGE_VIDEO_URL';

export const changePlayerMode = (mode) => ({
	type: CHANGE_PLAYER_MODE,
	data: mode,
});

export const changeVideoUrl = (url) => ({
	type: CHANGE_VIDEO_URL,
	data: url,
});

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_PLAYER_MODE: {
			return {
				...state,
				mode: action.data,
			};
		}
		case CHANGE_VIDEO_URL: {
			return {
				...state,
				videoUrl: action.data,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

