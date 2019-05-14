import * as React from 'react';
import { ImageBackground, View } from 'react-native';
const defaultProps = {
    backgroundImage: require('@Assets/Images/pankod-dark.png'),
    splashStyle: {
        backgroundColor: '#F9D92D',
        height: '100%',
        width: '100%',
        zIndex: 1
    }
};
export const Splash = (props) => (React.createElement(View, { style: {
        backgroundColor: props.splashStyle && props.splashStyle.backgroundColor ? props.splashStyle.backgroundColor : '#F9D92D',
        flex: 1,
        padding: 30
    } },
    React.createElement(ImageBackground, { source: props.backgroundImage || defaultProps.backgroundImage, style: props.splashStyle || defaultProps.splashStyle, resizeMode: "contain" })));
//# sourceMappingURL=index.js.map