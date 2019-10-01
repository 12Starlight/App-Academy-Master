import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export default ({ todos, receiveTodo }) => (
  <div>
    <h3>Todo List goes here!</h3>
    <TodoForm receiveTodo={ receiveTodo } />
    <ul>
      {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </ul>
  </div>
  ) 