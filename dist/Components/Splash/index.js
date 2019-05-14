import * as React from 'react';
import { ImageBackground, View, } from 'react-native';
const defaultProps = {
    backgroundImage: require('../../Assets/Images/pankod-dark.png'),
    resizeMode: 'contain',
    style: {
        backgroundColor: '#F9D92D',
        height: '100%',
        width: '100%',
        zIndex: 1
    }
};
export const Splash = (props) => (React.createElement(View, { style: {
        backgroundColor: props.style && props.style.backgroundColor ? props.style.backgroundColor : '#F9D92D',
        flex: 1,
        padding: 30
    } },
    React.createElement(ImageBackground, { source: props.backgroundImage || defaultProps.backgroundImage, style: props.style || defaultProps.style, resizeMode: props.resizeMode || defaultProps.resizeMode })));
//# sourceMappingURL=index.js.map