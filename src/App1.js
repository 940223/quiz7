import './App.css';
import LockIcon from './LockIcon'
import Enput from './Enput'
import React from 'react'

class App1 extends React.Component {
  render() {
    return (
      <div className="App1">
        <div>
          {LockIcon()}
        </div>
        <div>
          {Enput()}
        </div>
      </div>
    );
  }
}

export default App1