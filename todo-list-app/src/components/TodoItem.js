
import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, toggleTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, editValue);
    setIsEditing(false);
    
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleUpdate}
            onKeyPress={(e) => e.key === 'Enter' && handleUpdate()}
            autoFocus
          />
          <div className="button-container">
            <button className="edit" onClick={handleUpdate}></button>
          </div>
        </>
      ) : (
        <>
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          <div className="button-container">
            <button className="edit" onClick={() => setIsEditing(true)}></button>
            <button className="delete" onClick={() => deleteTodo(todo.id)}></button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;