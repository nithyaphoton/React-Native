import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter : 0}
    this.startCounter = this.startCounter.bind(this);
  }

  startCounter(){
     var elem = document.getElementById("start");
    if (elem.value=="Start"){
       elem.value = "Stop";
      var  setTimer = setInterval(() => {  
             this.setState({counter: this.state.counter+1});
          },200);
         
    }else{
      elem.value = "Start";
       clearInterval(setTimer);
    }
  
  }

  render() {
    return (
      <div>
        <text>{this.state.counter}</text>
        <p></p>
        <input onClick = {this.startCounter} id = "start" value = "Start" type = "button"></input>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));

