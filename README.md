# create-react-native-app with typescript

## Install
`npm i -D react-native-typescript-transformer jest-expo-ts`

## Configure Typescript
`tsc --init`

`npm i -S @types/react @types/react-native @types/react-test-renderer @types/jest`

## Configure Expo
app.json
```
{"expo": {
    "sdkVersion": "18.0.0",
    "packagerOpts": {
      "sourceExts": [
        "ts",
        "tsx"
      ],
      "transformer": "node_modules/react-native-typescript-transformer"
    }
  }
}
```

## Configure Jest
package.json

`  "jest": {
    "preset": "jest-expo-ts"
  },
`