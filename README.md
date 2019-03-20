# craco-itk

Let's use 👁🐍🧰[itk](https://insightsoftwareconsortium.github.io/itk-js/index.html) with [create-react-app](https://github.com/facebook/create-react-app) today!

This is a plugin for [@craco/craco](https://github.com/sharegate/craco).

## Very very easy usage

### 1. Create a React project

```sh
npm install -g create-react-app # or yarn global add create-react-app
create-react-app example
cd example
```

### 2. Install modules

In your create-react-app project, install modules:

```sh
npm install --save @craco/craco craco-itk itk
# or
yarn add @craco/craco craco-itk itk
```

### 3. Rewrite npm scripts

Rewrite npm scripts in `package.json` as following:

```js
{
  // ...
  "scripts": {
    "start": "craco start", // react-scripts -> craco
    "build": "craco build", // react-scripts -> craco
    "test": "craco test",   // react-scripts -> craco
    "eject": "react-scripts eject"
  },
  // ...
}
```

### 4. Create craco config file

Create `craco.config.js` in the proejct root:

```js
const CracoItkPlugin = require("craco-itk");

module.exports = {
  plugins: [
    {
      plugin: CracoItkPlugin()
    }
  ]
};
```

### 5. Congratulations! 🎉

Setup is complete! Enjoy your ITK life.🏝

## Acknowledgements

This package was inspired by [craco-cesium](https://github.com/darwin-education/craco-cesium).
