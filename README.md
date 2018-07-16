# create-react-native-app with typescript

## Install

`npm i -D react-native-typescript-transformer ts-jest`

## Configure Typescript

`tsc --init`

`npm i -D @types/react @types/react-native @types/expo @types/expo__vector-icons`

## Configure Typescript for react-native

app.json

```
{"expo": {
    "sdkVersion": "28.0.0",
    "packagerOpts": {
      "sourceExts": [
        "ts",
        "tsx"
      ],
      "transformer": "node_modules/react-native-typescript-transformer/index.js"
    }
  }
}
```

## Configure Jest

package.json

```
  "babel": {
    "presets": ["expo"]
  },
  "jest": {
    "preset": "jest-expo",
    "transform": {
      "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
    "transformIgnorePatterns": ["<rootDir>/node_modules/react-native-vector-icons"],
    "globals": {
      "ts-jest": {
        "useBabelrc": true
      }
    }
  }
```
