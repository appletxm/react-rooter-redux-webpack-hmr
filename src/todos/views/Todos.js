import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import {toggleTodo, removeTodo, addTodo} from '../actions';

class Todos extends  Component{
	render(){
		return (
			<div className="todos">
				<AddTodo addTodo={this.props.addTodo} />
				<TodoList todos={this.props.todos} onToggleTodo={this.props.toggleTodo} onRemoveTodo={this.props.removeTodo} />
			</div>
		);
	}
};

const mapSate = (state, ownProps) => {
	//console.info(state, ownProps);
	const props = {...ownProps};
	props.todos = state.todos || {};
	return props;
};
const mapDispatcher = (dispatcher, ownProps) => {
	//console.info(dispatcher, ownProps);
	const props = {...ownProps};

	props.toggleTodo = (id) => {
		dispatcher(toggleTodo(id));
	};
	props.removeTodo = (id) => {
		dispatcher(removeTodo(id));
	};
	props.addTodo = (text) => {
		dispatcher(addTodo(text));
	};

	return props;
};

export default connect(mapSate, mapDispatcher)(Todos);