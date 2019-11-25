import React from 'react';
import { Typography, Progress } from 'antd';
import DialogItem from './DialogItem';
import hmsToSec from '../func/hmsToSec';

const { Title } = Typography;

const Dialog = ( { dialogs, playedSec, player } ) => {
	return (
		<div>
			{
				dialogs.map((dialog) => {
					return (
						<div>
						{
							playedSec > hmsToSec(dialog.inTime) &&
							playedSec < hmsToSec(dialog.outTime) &&
							<div>
								<div>
									<Title level={3}>{dialog.title}</Title>
								</div>
								<div style={{width: 250}}>
									<Progress percent={
										100-100*(playedSec-hmsToSec(dialog.inTime))/(hmsToSec(dialog.outTime)-hmsToSec(dialog.inTime))
									} showInfo={false} size="small"/>
								</div>
								<div>
									{
										dialog.dialogItems.map((item) => {
											return (
												<DialogItem dialog={item.content} jumpTo={item.jumpTo} player={player} />
											)
										})
									}
								</div>
							</div>
						}
						</div>
					);
				})
			}
		</div>
	);
};

export default Dialog;