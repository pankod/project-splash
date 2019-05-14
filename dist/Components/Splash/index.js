"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Splash = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var defaultProps = {
  backgroundImage: require("../../Assets/Images/pankod-dark.png"),
  splashStyle: {
    backgroundColor: '#F9D92D',
    height: '100%',
    width: '100%',
    zIndex: 1
  }
};

var Splash = function Splash(props) {
  return React.createElement(_reactNative.View, {
    style: {
      backgroundColor: props.splashStyle && props.splashStyle.backgroundColor ? props.splashStyle.backgroundColor : '#F9D92D',
      flex: 1,
      padding: 30
    }
  }, React.createElement(_reactNative.ImageBackground, {
    source: props.backgroundImage || defaultProps.backgroundImage,
    style: props.splashStyle || defaultProps.splashStyle,
    resizeMode: "contain"
  }));
};

exports.Splash = Splash;