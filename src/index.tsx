import React from 'react';
import { ImageStyle } from 'react-native';

import { Splash } from '@Components/Splash'

export default class Index extends React.Component {
	public render(): JSX.Element {
		const customStyle: ImageStyle = {
			flex: 1,
			width: '100%',
			height: '100%',
			backgroundColor: '#2C3E50',
			zIndex: 1,
			justifyContent: 'center',
			alignItems: 'center'

		} as ImageStyle;

		return (
			<Splash backgroundImage={require('@Assets/Images/pankod-light.png')}
				splashStyle={customStyle} />
		);
	}
}