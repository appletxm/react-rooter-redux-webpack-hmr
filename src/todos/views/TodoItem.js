import React from 'react';

const TodoItem = ({onToggle, onRemove, completed, text}) => {
	return (
		<li className="todo-item" style={{color: completed ? 'green': 'red'}}>
			<input type="checkbox" checked={completed ? 'checked' : ''} readOnly="readOnly" onClick={onToggle}  />
			<label>{text}</label>
			<button onClick={onRemove}>remove</button>
		</li>
	);
};

export default TodoItem;