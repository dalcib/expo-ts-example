import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IProps {

}
interface IState {

}
export default class App extends React.Component<IProps, IState> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!!!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
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
