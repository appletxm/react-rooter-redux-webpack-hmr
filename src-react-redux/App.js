import './App.css';
import logo from './logo.svg';

import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import Dialog from './Dialog';
import AppForm from './AppForm';

const dialog = new Dialog();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  };

  opeDialog = () => {
    dialog.open({
      title: 'title header',
      className: 'test-className',
      content: AppForm,
      confirmCb: this.confirmDialog.bind(this),
      closeCb: this.closeDialog.bind(this)
    });
  };

  confirmDialog = () => {
    console.log('----confirm----');
  };

  closeDialog = () => {
    console.log('----close----');
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.opeDialog}>open dialog</button>

        <ControlPanel name="123"/>
      </div>
    );
  }
}

export default App;
