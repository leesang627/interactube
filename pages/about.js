import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
	return (
		<div style={{width: "60vw"}}>
			<Title level={1}>실험 소개</Title>
			<Title level={2}>실험 순서</Title>
			<Paragraph style={{fontSize: 20}}>
				실험 순서는 다음과 같습니다. <br />
			</Paragraph>
		</div>
	)
};

export default About;