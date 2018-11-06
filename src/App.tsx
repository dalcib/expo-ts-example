import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { /* AppLoading, */ Asset, Font /* , Constants */ } from 'expo'
import Icon from 'react-native-vector-icons/Ionicons'
import { MaterialIcons } from '@expo/vector-icons'
//import { version as reactNativeVersion } from './../node_modules/react-native/package.json'

export default class App extends React.Component<any, any> {
  state = {
    isLoadingComplete: false,
  }

  render() {
    /*     if (!this.state.isLoadingComplete) {
      //console.log('Expo', Constants)
      return (
        <AppLoading>
          startAsync=
          {this._loadResourcesAsync}
          onError=
          {this._handleLoadingError}
          onFinish=
          {this._handleFinishLoading}
        </AppLoading>
      )
    } */
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Icon name="md-contacts" size={30} color="#900" />
        <MaterialIcons name="developer-board" size={32} color="green" />
      </View>
    )
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        //...(Icon as any).Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ])
  }

  _handleLoadingError = (error: string) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
