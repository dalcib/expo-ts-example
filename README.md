# create-react-native-app with typescript

## Install
`npm i -D react-native-typescript-transformer ts-jest`

## Configure Typescript
`tsc --init`

`npm i -S @types/react @types/react-native @types/react-test-renderer @types/jest`

## Configure Expo
app.json
```
{"expo": {
    "sdkVersion": "20.0.0",
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
  "jest": {
    "preset": "jest-expo",
    "transform": {
      "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "ios.ts",
      "ios.tsx",
      "android.ts",
      "android.tsx"
    ]
  },
```