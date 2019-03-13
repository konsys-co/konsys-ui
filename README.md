<div align="center">
  <a href="https://www.konsys.co/">
    <img src="https://lh3.googleusercontent.com/Gk-KbNLhL8E-bFXJiKRVdNl7MDugIlw9KI-1aH85kOsjXUoIVyJDKDbXzshLFlB6CcRQjnPNAU0JrWeuZ-44SyZKiY-dXkWrXWodBc28x_hoxCqOTmXlhZoYCS4N24s6AiWFUOJseQ=w1627-h345-no" alt="Konsys-UI">
</div>

## Install and use components

Konsys-UI is made up of multiple components. All you need to do is install the `konsys-ui` package:

```sh
$ yarn add konsys-ui
# or
$ npm install --save konsys-ui
```

A working version, assuming you are using something like [Create React App](https://github.com/facebookincubator/create-react-app), might look like this:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'konsys-ui'

ReactDOM.render(
  <Button text='I am Konsys' />,
  document.getElementById('root')
)
```

## Deploy storybook to Firebase

- yarn build-storybook && firebase deploy

## Deploy NPM

- npm publish

