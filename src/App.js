import React, {Component} from 'react';
import {Todos} from './todos';
import {Weather} from './weather';
import {TestAsyncRedux} from './test-async-redux';

class TodoApp extends Component {

	render(){
		return (
			<div>
				<Todos />
				<Weather />
				<TestAsyncRedux />
			</div>
		);
	}
};

export default TodoApp;