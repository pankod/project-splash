import { ImageResizeMode, ImageSourcePropType, ImageStyle } from 'react-native';
export interface ISplashProps {
    backgroundImage?: ImageSourcePropType;
    style?: ImageStyle;
    resizeMode?: ImageResizeMode;
}
