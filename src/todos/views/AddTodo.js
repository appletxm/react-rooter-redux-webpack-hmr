import React,{ Component } from 'react';
import {connect} from 'react-redux';

class AddTodo extends Component {
	constructor(props){
		super(props);
		
		this.input = '';
	}

	inputRef = (node) => {
		this.input = node;
	};

	onSubmit = (e) => {
		e.preventDefault();
		const input = this.input;
		if(!input.value.trim()){
			return;
		}

		this.props.addTodo(input.value);
		input.value = '';
	};

	render(){
		return (
			<div className="add-todo">
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" ref={this.inputRef.bind(this)} />
					<button type="submit">添加</button> 
				</form>
			</div>
		);
	}
};

export default AddTodo;