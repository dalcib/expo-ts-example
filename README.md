# react-native 0.57.1 app with typescript

## See also this repositories:

- [https://github.com/janaagaard75/expo-and-typescript](https://github.com/janaagaard75/expo-and-typescript)
- [https://github.com/slorber/expo-typescript](https://github.com/slorber/expo-typescript)

## Configure Typescript

`tsc --init`

`npm i -D @types/react @types/react-native @types/expo @types/expo__vector-icons`

## Configure Babel

babel.config.js

```
module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./src'],
        },
      ],
    ],
  }
}
```

## Configure Jest

package.json

```
  "jest": {
    "preset": "jest-expo"
  }
```
