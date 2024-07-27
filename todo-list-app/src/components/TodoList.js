import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleTodo, updateTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;