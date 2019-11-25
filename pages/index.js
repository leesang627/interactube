import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Index = () => (
	<div style={{width: "60vw"}}>
		<Title level={1}>Interactube</Title>
		<Title level={2}>Interactube 란?</Title>
		<Paragraph style={{fontSize: 20}}>
			Interactube는 Interactio  Youtube 의 합성어로서 Youtube를 보는 도중에 질문 혹은 답변을
			할 수 있는 선택지를 제공하여 영상과 상호작용할 수 있게 해주는 시스템입니다. <br />
			동영상 제작자는 Interactube를 이용하여 자신이 의도하는 대로 동영상의 내러티브를 설계할 수 있으며,
			이를 통해 짧은 시간에 더 효율적인 정보제공을 우선시하거나 재미있는 선택지를 통해 탐험하는 재미를
			강조할 수 있습니다. <br />
		</Paragraph>
	</div>
);

export default Index;