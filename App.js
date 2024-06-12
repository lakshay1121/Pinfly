import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from './src/screens/WelcomeScreen'
import Navigation from './src/navigation/Navigation'

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1
  }
})