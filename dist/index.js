import React from 'react';
import { Splash } from '@Components/Splash';
export default class Index extends React.Component {
    render() {
        const customStyle = {
            flex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: '#2C3E50',
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        };
        return (React.createElement(Splash, { backgroundImage: require('@Assets/Images/pankod-light.png'), splashStyle: customStyle }));
    }
}
//# sourceMappingURL=index.js.map