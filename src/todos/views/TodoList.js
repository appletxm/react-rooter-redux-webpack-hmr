import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {

	return (
		<ul className="todo-list">
			{

				todos.map((item) => {
					return (
						<TodoItem 
							key={item.id} 
							text={item.text} 
							completed={item.completed} 
							onToggle={() => onToggleTodo(item.id)} 
							onRemove={() => onRemoveTodo(item.id)}
						/>
					)
				})
			}
		</ul>
	);
};

export default TodoList;