import React from 'react';
import { View, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <View style ={ styles.redview}> </View>
        
        <View style = {styles.greenview}> </View>
        
        <View style = {styles.gridview}>
         
              <View style = {styles.gridviewcell}>
                    <View style = {styles.gridviewitem}> </View>
                    <View style = {styles.gridviewitem}> </View>
                    <View style = {styles.gridviewitem}> </View>
              </View>
              
              <View style = {styles.gridviewcell}>
                   <View style = {styles.gridviewitem}> </View>
                   <View style = {styles.gridviewitem}> </View>
                   <View style = {styles.gridviewitem}> </View>
               </View>
              
              <View style = {styles.gridviewcell}>
                    <View style = {styles.gridviewitem}> </View>
                    <View style = {styles.gridviewitem}> </View>
                    <View style = {styles.gridviewitem}> </View>
              </View>
            
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  
  redview: {
    height: 125,
    color:'red'
  },
  
  greenview: {
    height: 125,
    color:'green'
  },
  
   gridview: {
    flexDirection: 'column'
  },
  
  gridviewcell:{
    width:100,
    marginLeft:2,
    marginRight:2,
    flexGrow: 1
   
  },
  
  gridviewitem: {
    height: 100,
    marginTop: 2,
    marginBottom: 2,
    color: 'blue',
    flexGrow: 1
  },

});
