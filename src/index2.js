import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2'

let data = []
class Todo extends React.Component {
  render() {
    return (
      ReactDOM.render(
        <App2 data={data} />,
        document.getElementById('root')
      )
    );
  }
}

export default Todo