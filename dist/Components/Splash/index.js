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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL1NwbGFzaC9pbmRleC50c3giXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiYmFja2dyb3VuZEltYWdlIiwicmVxdWlyZSIsInNwbGFzaFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJ6SW5kZXgiLCJTcGxhc2giLCJwcm9wcyIsImZsZXgiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFRQSxJQUFNQSxZQUFZLEdBQUc7QUFDcEJDLEVBQUFBLGVBQWUsRUFBRUMsT0FBTyx1Q0FESjtBQUVwQkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1pDLElBQUFBLGVBQWUsRUFBRSxTQURMO0FBRVpDLElBQUFBLE1BQU0sRUFBRSxNQUZJO0FBR1pDLElBQUFBLEtBQUssRUFBRSxNQUhLO0FBSVpDLElBQUFBLE1BQU0sRUFBRTtBQUpJO0FBRk8sQ0FBckI7O0FBVU8sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3JCLG9CQUFDLGlCQUFEO0FBQU0sSUFBQSxLQUFLLEVBQUU7QUFDWkwsTUFBQUEsZUFBZSxFQUFFSyxLQUFLLENBQUNOLFdBQU4sSUFBcUJNLEtBQUssQ0FBQ04sV0FBTixDQUFrQkMsZUFBdkMsR0FBeURLLEtBQUssQ0FBQ04sV0FBTixDQUFrQkMsZUFBM0UsR0FBNkYsU0FEbEc7QUFFWk0sTUFBQUEsSUFBSSxFQUFFLENBRk07QUFHWkMsTUFBQUEsT0FBTyxFQUFFO0FBSEc7QUFBYixLQUtDLG9CQUFDLDRCQUFEO0FBQWlCLElBQUEsTUFBTSxFQUFFRixLQUFLLENBQUNSLGVBQU4sSUFBeUJELFlBQVksQ0FBQ0MsZUFBL0Q7QUFDQyxJQUFBLEtBQUssRUFBRVEsS0FBSyxDQUFDTixXQUFOLElBQXFCSCxZQUFZLENBQUNHLFdBRDFDO0FBRUMsSUFBQSxVQUFVLEVBQUM7QUFGWixJQUxELENBRHFCO0FBQUEsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdEltYWdlQmFja2dyb3VuZCxcblx0SW1hZ2VTdHlsZSxcblx0Vmlld1xufSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBJU3BsYXNoUHJvcHMgfSBmcm9tICdASW50ZXJmYWNlcyc7XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblx0YmFja2dyb3VuZEltYWdlOiByZXF1aXJlKCdAQXNzZXRzL0ltYWdlcy9wYW5rb2QtZGFyay5wbmcnKSxcblx0c3BsYXNoU3R5bGU6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjRjlEOTJEJyxcblx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdHpJbmRleDogMVxuXHR9IGFzIEltYWdlU3R5bGVcbn07XG5cbmV4cG9ydCBjb25zdCBTcGxhc2ggPSAocHJvcHM6IElTcGxhc2hQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiAoXG5cdDxWaWV3IHN0eWxlPXt7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBwcm9wcy5zcGxhc2hTdHlsZSAmJiBwcm9wcy5zcGxhc2hTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPyBwcm9wcy5zcGxhc2hTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgOiAnI0Y5RDkyRCcsXG5cdFx0ZmxleDogMSxcblx0XHRwYWRkaW5nOiAzMFxuXHR9fT5cblx0XHQ8SW1hZ2VCYWNrZ3JvdW5kIHNvdXJjZT17cHJvcHMuYmFja2dyb3VuZEltYWdlIHx8IGRlZmF1bHRQcm9wcy5iYWNrZ3JvdW5kSW1hZ2V9XG5cdFx0XHRzdHlsZT17cHJvcHMuc3BsYXNoU3R5bGUgfHwgZGVmYXVsdFByb3BzLnNwbGFzaFN0eWxlfVxuXHRcdFx0cmVzaXplTW9kZT1cImNvbnRhaW5cIj5cblx0XHQ8L0ltYWdlQmFja2dyb3VuZD5cblx0PC9WaWV3PlxuKTtcbiJdfQ==