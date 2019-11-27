import produce from 'immer';

const initialState = [
	{
		videoId: 0,
		dialogs: [
			{
				title: 'question 1',
				dialogItems: [
					{content: 'answer 1', jumpTo: '01:50'},
					{content: 'answer 2', jumpTo: '02:40'},
				],
				inTime: '0:10',
				outTime: '0:20',
			},
			{
				title: 'question 2',
				dialogItems: [
					{content: 'answer 3', jumpTo: '03:10'},
					{content: 'answer 4', jumpTo: '05:30'},
					{content: 'answer 5', jumpTo: '06:10'},
				],
				inTime: '0:50',
				outTime: '0:55',
			},
		]
	}
];

export const ADD_DIALOG = 'ADD_DIALOG';
export const DELETE_DIALOG = 'DELETE_DIALOG';

export const addDialog = (videoId, dialog) => ({
	type: ADD_DIALOG,
	payload: { videoId, dialog }
});

export const deleteDialog = (videoId) => ({
	type: DELETE_DIALOG,
	payload: { videoId }
});

const interactube = produce((draft, action) => {
	switch (action.type) {
		case ADD_DIALOG: {
			draft[action.payload.videoId].dialogs.push(action.payload.dialog);
			break;
		}
		case DELETE_DIALOG: {
			delete draft[action.payload.videoId];
			break;
		}
	}
}, initialState);

export default interactube;

