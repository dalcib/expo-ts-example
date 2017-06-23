npm i -D react-native-typescript-transformer jest-expo-ts

app.json
"packagerOpts": {
    "sourceExts": ["ts", "tsx"],
    "transformer": "node_modules/react-native-typescript-transformer"
  }

package.json
  "jest": {
    "preset": "jest-expo-ts"
  },