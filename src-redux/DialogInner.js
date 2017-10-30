import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DialogInner extends Component {
	constructor(props){
    	super(props);
	};

	confirmDialog = () => {
		console.info(this);
		
		if(this.props.confirmCb){
			this.props.confirmCb();
		}
	};

	closeDialog = () => {
		if(this.props.closeCb){
			this.props.closeCb();
		}
	};

	componentWillUnmount(){
		console.info('@@@@@@@@@@@@@@');
	};

	render(){
		const {title, className} = this.props;
		const dialogClass = 'dialog' + ' ' + className;

		return (
			<div className={dialogClass}>
				<header>{title}</header>
				<div className="content">{this.props.children}</div>
				<footer>
					<button onClick={this.confirmDialog}>confirm</button>
					<button onClick={this.closeDialog}>close me</button>
				</footer>
			</div>
		);
	};
};

export default DialogInner;
