import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {

  constructor(){
    super();
      this.state = {
        text: '',
        displayText: '',
      }
  }

  

  render() {
    return (
      <View style={styles.container}>
      <SafeAreaProvider>
        <HomeScreen/>
      </SafeAreaProvider>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b9b8b8',
  },
});