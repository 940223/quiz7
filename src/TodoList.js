import React from 'react'
import TodoApp from './TodoApp'

class TodoList extends React.Component {

  SubmitDelete(id) {
    //console.log(id);
    this.props.DeleteItemTop(id);
  }

  ChangeDone(id) {
    this.props.ChangeCompleteTop(id);
  }

  render() {
    console.log(this.props.data);
    var value = this.props.choosevalue;

    const a = this.props.data.map(({ id, text, complete, deleteFlag }, index) => {
      if (value == '1' && deleteFlag !== true) {
        return <TodoApp
          key={index}
          id={id}
          text={text}
          complete={complete}
          ChangeCompleteItem={this.ChangeDone.bind(this)}
          DeleteItem={this.SubmitDelete.bind(this)}
        />
      }

      if (value == '2' && complete === false && deleteFlag !== true) {
        return <TodoApp
          key={index}
          id={id}
          text={text}
          complete={complete}
          ChangeCompleteItem={this.ChangeDone.bind(this)}
          DeleteItem={this.SubmitDelete.bind(this)}
        />
      }

      if (value == '3' && complete === true && deleteFlag !== true) {
        return <TodoApp
          key={index}
          id={id}
          text={text}
          complete={complete}
          ChangeCompleteItem={this.ChangeDone.bind(this)}
          DeleteItem={this.SubmitDelete.bind(this)}
        />
      }
    })

    return (
      <div> { a} </div>
    )
  }
}

export default TodoList
