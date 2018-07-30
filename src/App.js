import React, { Component } from 'react';
import './App.css'
import gymLogo from './assets/logo.png'
import FieldBody from './components/FieldBody/FieldBody';

class App extends Component {
  render() {
    return (
     <div className="App">
      <div className="nav">
        <img src="http://crescent.education/wp-content/themes/crescent/theme/images/logo.png"/>
      </div>
      <div className="MainBody">
        <div className="Title">
          <img src={gymLogo} />
          <h1 className="titleText"><span>GYM</span> Registration</h1>
        </div>
        <FieldBody className="fieldBody"/>
      </div>
     </div>
    );
  }
}

export default App;
