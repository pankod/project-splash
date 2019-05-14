## Splash for open source projects
----

### About

Thanks to this component, it’ll be too easy to add splash to pankod open source projects.
<div align="center">
  <sub>Created by <a href="https://www.pankod.com">Pankod</a></sub>
</div>



### Getting Started

```sh
npm install --save https://github.com/pankod/project-splash
```

 ## Example
```javascript

import React from 'react';
import Splash from 'project-splash'

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



