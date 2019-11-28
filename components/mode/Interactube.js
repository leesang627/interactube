import React from 'react';
import { useSelector } from 'react-redux';
import Dialog from '../dialog/Dialog';
import DialogList from '../dialog/DialogList';
import DialogForm from '../dialog/DialogForm';

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