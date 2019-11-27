import React from 'react';
import Dialog from '../Dialog';
import { useSelector } from 'react-redux';
import DialogList from '../DialogList';
import DialogForm from '../DialogForm';

const Interactube = ({playedSec, player}) => {
	const interactube = useSelector(state => state.interactube);

	return (
		<>
			<div style={{height: 10}}></div>
			<Dialog dialogs={interactube[0].dialogs} playedSec={playedSec} player={player} />
			<div style={{height: 10}}></div>
			<DialogList dialogs={interactube[0].dialogs} />
			<div style={{height: 10}}></div>
			<DialogForm />
		</>
	)
};

export default Interactube;