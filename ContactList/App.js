import React from 'react';
import { View, StyleSheet } from 'react-native';
import Contacts from './Contacts'

export default class App extends React.Component {
  
    Constructor(props){
      super(props);
    }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Contacts/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
 
});
