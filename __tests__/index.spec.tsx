import { shallow, ShallowWrapper, mount } from 'enzyme';
import React from 'react';
import { ImageResizeMode, ImageSourcePropType, ImageStyle, View, ImageBackground } from 'react-native';
import { Splash } from '../src/Components/Splash/index';
import console = require('console');

describe('SplashComponent', () => {
	let wrapper, wrapperWithCustomProps: ShallowWrapper;
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

	const component = <Splash />;

	const componentWithProps = (
		<Splash
			resizeMode={'cover'}
			style={defaultProps.style}
			backgroundImage={{ uri: 'test.png' }}
		/>);

	beforeEach(() => {
		wrapper = shallow(component);
		wrapperWithCustomProps = shallow(componentWithProps);
	});

	test('should render a <View />', () => {
		expect(wrapper.find(View)).toHaveLength(1);
	});

	test('should render a <ImageBackground />', () => {
		expect(wrapper.find(ImageBackground)).toHaveLength(1);
	});

	test('should render a <View /> with Custom Props', () => {
		expect(wrapperWithCustomProps.find(View)).toHaveLength(1);
	});

	test('should render a <ImageBackground /> with Custom Props', () => {
		expect(wrapperWithCustomProps.find(ImageBackground)).toHaveLength(1);
	});

	test('should image background source correct', () => {
		expect(wrapper.find({ source: defaultProps.backgroundImage })).toHaveLength(1);
	});

	test('should custom image background source correct', () => {
		expect(wrapperWithCustomProps.find({ source: { uri: 'test.png' } })).toHaveLength(1);
	});

	test('should image resize mode correct', () => {
		expect(wrapper.find({ resizeMode: 'contain' })).toHaveLength(1);
	});

	test('should custom resize mode correct', () => {
		expect(wrapperWithCustomProps.find({ resizeMode: 'cover' })).toHaveLength(1);
	});

	test('should image background style correct', () => {
		expect(wrapper.find({ style: defaultProps.style })).toHaveLength(1);
	});

	test('should custom image background correct', () => {
		expect(wrapperWithCustomProps.find({ style: defaultProps.style })).toHaveLength(1);
	});
});
