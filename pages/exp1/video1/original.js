import React from 'react';
import ReactPlayer from 'react-player';

const Original = () => {
	return (
		<div>
			<ReactPlayer
				url='https://www.youtube.com/watch?v=LrJsWl9miZY'
				controls={true}
				playing={true}
				config={{
					youtube: {
						playerVars: {
							start: 1,
						}
					}
				}}
			/>
		</div>
	)
};

export default Original;