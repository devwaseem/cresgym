import React, { Component } from 'react';
import './WAField.css'

class WAField extends Component {
    
    state = {
        focused:""
    }

  render() {
    return (
     <div className="WAFieldBody">
        <p className={"hint" + this.state.focused}>{this.props.hint}</p>
        <input 
            type={this.props.type} 
            name={this.props.hint}  
            value = {this.props.value}
            onChange = {this.props.onChange}
            className="field" />
        <div className="line"/>
     </div>
    );
  }
}

export default WAField;
