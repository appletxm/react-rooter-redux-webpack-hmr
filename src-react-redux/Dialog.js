import React from 'react';
import ReactDOM from 'react-dom';
//import DialogInner from './DialogInner';

const Dialog = class {
	constructor(){
		this.params = null;
		this.contentObj = null;
	};

	confirm = () => {
		let contentPass = null;

		//console.info(this.params.content.name);
		if(this.contentObj && this.contentObj.doConfirm){
			contentPass = this.contentObj.doConfirm();
		}

		if(contentPass === true){
			if(this.params.confirmCb){
				this.params.confirmCb();
			}

			this.close();
		}
	};

	close = () => {
		const body = document.querySelector('body');

		if(this.params.closeCb){
			this.params.closeCb();
		}
		ReactDOM.unmountComponentAtNode(this.params.dialog);
		body.removeChild(this.params.dialog);
		this.params = null;
		this.contentObj = null;
	};

	open = (params) => {
		let body = document.querySelector('body');
	    let dialog = document.createElement('div');
	    let {title, className} = params;
		let dialogClass = 'dialog' + ' ' + className;
		let Content = params.content;

	    this.params = params;
	    this.params.dialog = dialog;

	    body.appendChild(dialog);
	    ReactDOM.render((
	    	<div className={dialogClass}>
				<header>{title}</header>
				<div className="content">
					<Content ref={e => {this.contentObj = e;}}/>
				</div>
				<footer>
					{params.confirmCb ? <button onClick={this.confirm.bind(this)}>confirm</button> : ''}
					<button onClick={this.close}>close me</button>
				</footer>
			</div>
	    ), dialog);
	};
};

export default Dialog;