import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import App1 from './App1'

class Login extends React.Component {
  render() {
    return (
      ReactDOM.render(
        <App1 />,
        document.getElementById('root')
      )
    );
  }
}

export default Login