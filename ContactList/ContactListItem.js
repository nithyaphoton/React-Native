import React from 'react'
import {View,StyleSheet,Text,Image} from 'react-native';


const ContactListItem = ({position,title,image}) => (
  
  <View style = {[styles.container, (position == '0') ? {flexDirection : 'row'} : {flexDirection : 'row-reverse'}]}>
  <Image source = {{uri : image}} style = {styles.imageStyle}></Image>
  <Text style = {styles.textStlye}>{title}</Text>
  </View>
  );
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  
  textStlye : {
    color: 'red',
    fontSize: 20
  },
  
  imageStyle: {
    
    width : 120,
    height: 120
  }
 
});
export default ContactListItem;