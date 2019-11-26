import React from 'react';
import { useSelector } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';

const Exp1 = () => {
	const { videoUrl } = useSelector(state => state.player);
	return (
		<VideoPlayer url={videoUrl} />
	)
};

export default Exp1;