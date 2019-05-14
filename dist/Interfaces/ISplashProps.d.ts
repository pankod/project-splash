import { ImageResizeMode, ImageSourcePropType, ImageStyle } from 'react-native';
export interface ISplashProps {
    backgroundImage?: ImageSourcePropType;
    splashStyle?: ImageStyle;
    resizeMode?: ImageResizeMode;
}
