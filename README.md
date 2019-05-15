
<div align="center">
 <img src="screenshots/project-splash-ios.png">
 <img src="screenshots/project-splash-android.png">
</div>

## About

Thanks to this component, it’ll be too easy to add splash to pankod open source projects.
<div align="center">
  <sub>Created by <a href="https://www.pankod.com">Pankod</a></sub>
</div>
<br/>
<div align="center">
  <!-- CodeCov -->
  <a href="https://codecov.io/gh/pankod/project-splash">
    <img src="https://codecov.io/gh/pankod/project-splash/branch/master/graph/badge.svg" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/pankod/project-splash">
    <img src="https://travis-ci.org/pankod/project-splash.svg?branch=master" alt="Build Status" />
  </a>
</div>


### Getting Started

```sh
npm install --save https://github.com/pankod/project-splash
```

## Example
```javascript

import React from 'react';
import Splash from '@pankod/project-splash'

export default class App extends React.Component {

	public render(): JSX.Element =>  <Splash/>
}

```
## Options
<br/>

| Properties          | Type                  | Description                 | Default                                                                                           |
| ------------------- | --------------------- | --------------------------- | ------------------------------------------------------------------------------------------------- |
| **backgroundImage** | `ImageSourcePropType` | Background image of splash  | `https://github.com/pankod/project-splash/blob/master/src/Assets/Images/pankod-dark.png?raw=true` |
| **style**           | `ImageStyle`          | Custom style for splash     | `{backgroundColor:'#F9D92D',height: '100%',width: '100%',zIndex: 1}`                              |
| **resizeMode**      | `ImageResizeMode`     | Background image resizeMode | `"contain"`                                                                                       |



