
import React, { Component } from 'react';
import './App.css'
import Todos from './components/Todos'
import TodoItem from './components/TodoItem';

class App extends Component{

  state = {
    todos : [
      {
        id: 1,
        title: 'take out the trash',
        comleted: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  render(){
  return (
    <div>
      <Todos todos={this.state.todos} />
     
    </div>
  );
}
}

export default App;
