import * as React from 'react';
import {
	ImageBackground,
	ImageStyle,
	View
} from 'react-native';

import { ISplashProps } from '@Interfaces';

const defaultProps = {
	backgroundImage: require('@Assets/Images/pankod-dark.png'),
	splashStyle: {
		backgroundColor: '#F9D92D',
		height: '100%',
		width: '100%',
		zIndex: 1
	} as ImageStyle
};

export const Splash = (props: ISplashProps): React.ReactElement => (
	<View style={{
		backgroundColor: props.splashStyle && props.splashStyle.backgroundColor ? props.splashStyle.backgroundColor : '#F9D92D',
		flex: 1,
		padding: 30
	}}>
		<ImageBackground source={props.backgroundImage || defaultProps.backgroundImage}
			style={props.splashStyle || defaultProps.splashStyle}
			resizeMode="contain">
		</ImageBackground>
	</View>
);
