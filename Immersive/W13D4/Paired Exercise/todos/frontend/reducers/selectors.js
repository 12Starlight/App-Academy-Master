export const allTodos = state => {
    let todoIds = Object.keys(state.todos);
    return todoIds.map(todoId => state.todos[todoId]);
}

window.allTodos = allTodos;