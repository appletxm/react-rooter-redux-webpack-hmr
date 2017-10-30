import React, { Component } from 'react';

class AppForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '123'
		};
		this.doConfirm = this.doConfirm.bind(this);
	};

	doConfirm = () => {
		let name = this.state.name;

		console.info('------dialog content confirm-------', name, name.length);

		if(name && name.length < 6){
			return false;
		}else{
			return true;
		}
	};

	onChange = (e) => {
		this.setState({
			name: e.target.value
		});
	};

	componentWillUnmount(){
		console.info('@@@@@@@@@@@@@@');
	};

	render(){
		return (
			<div ref="appForm"><span>please input you name: </span><input type="text" defaultValue={this.state.name} onChange={this.onChange}/></div>
		);
	};
};

export default AppForm;