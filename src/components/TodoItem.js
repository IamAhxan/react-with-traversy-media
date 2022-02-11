import React, { Component } from 'react';

export class TodoItem extends Component {
  render() {
    return this.props.todos.map((todo) => (<h3></h3>))
  }
}

export default TodoItem;
