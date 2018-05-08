import React from 'react';
import {ScrollView} from 'react-native';
import ContactListItem from './ContactListItem'

class Contacts extends React.Component {
  
  Constructor(props){
    super(props);
    this.state = {contacts: []};
  }
  
  
  componentDidMount(){
    fetch("https://randomuser.me/api/?results=20").
    then(response => response.json()).
    then(data => {this.state({contacts: data.results})});
  }
  
  renderItems(){
    
    return this.state.contacts.map((position,title,image) => (
      <ContactListItem 
      position = {position % 2 == 0 ? '1' : '0'}
      title = {'${title.title} ${title.first} ${title.last}'}
      image = {image.thumbnail}
      />
      ));
    
  }
  
  
  render(){
    
    return(
      <ScrollView>{this.renderItems()}</ScrollView>
      );
  }

}
export default Contacts;