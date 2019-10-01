import React from 'react';
import TodoListContainer from './todos/todo_list_container';

export default class App extends React.Component {
    render() {
        return (
        <div>
            <h1>Todos App</h1>
            <TodoListContainer />
        </div>
        )
    }
}