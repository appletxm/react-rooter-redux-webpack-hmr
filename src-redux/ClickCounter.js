import React,{Component, PropTypes} from 'react';
import store from './redux/Store';
import {increment} from './redux/Actions';

class ClickCounter extends Component {
	static defaultProps = {
		start: 0,
		caption: ''
	};

	static propTypes = {
		caption: PropTypes.string,
		start: PropTypes.number
	};

	constructor(props){
		super(props);
		this.state = {
			count: 0
		};
	}

	onClickButton = () => {
		/*let count = this.state.count + 1;

		this.setState({
			count
		});

		if(this.props.onChange){
			this.props.onChange(count);
		}*/

		store.dispatch(increment(this.props.caption));

	}

	getOwnState = () => {
		return store.getState()[this.props.caption];
	};

	onChange = (e) => {
		console.info('@@@ store change');
		this.setState({
			count: this.getOwnState()
		});
	};

	componentDidMount = () => {
		this.setState({
			count: this.getOwnState()
		});

		store.subscribe(this.onChange);
	};



	componentWillReceiveProps = (nextProps) => {
		/*if(this.props.start !== nextProps.start){
			this.setState({
				count: nextProps.start
			});
		}*/
	};

	componentWillUnmount = () => {
		store.unsubscribe(this.onChange);
	};

	render(){
		const {caption} = this.props;
		return (
			<div style={{color: 'red'}}>
				<button onClick={this.onClickButton.bind(this)}>
					Click Me {caption}
				</button>
				<div>Click Out: {this.state.count}</div>
			</div>
		)
	}
}

export default ClickCounter;