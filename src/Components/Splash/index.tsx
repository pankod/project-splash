import * as React from 'react';
import {
	ImageBackground,
	ImageResizeMode,
	ImageSourcePropType,
	ImageStyle,
	View
} from 'react-native';

import { ISplashProps } from '@Interfaces';

const defaultProps = {
	backgroundImage: require('@Assets/Images/pankod-dark.png') as ImageSourcePropType,
	resizeMode: 'contain' as ImageResizeMode,
	style: {
		backgroundColor: '#F9D92D',
		height: '100%',
		width: '100%',
		zIndex: 1
	} as ImageStyle
};

export const Splash = (props: ISplashProps): React.ReactElement => (
	<View style={{
		backgroundColor: props.style && props.style.backgroundColor ? props.style.backgroundColor : '#F9D92D',
		flex: 1,
		padding: 30
	}}>
		<ImageBackground source={props.backgroundImage || defaultProps.backgroundImage}
			style={props.style || defaultProps.style}
			resizeMode={props.resizeMode || defaultProps.resizeMode}>
		</ImageBackground>
	</View>
);
