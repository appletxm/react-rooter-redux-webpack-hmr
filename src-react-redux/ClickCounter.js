import React,{ Component, PropTypes } from 'react';
import {connect} from 'react-redux';
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
	}

	onClickButton = () => {
		this.props.increment();
	}

	componentDidMount = () => {};

	componentWillReceiveProps = (nextProps) => {};

	componentWillUnmount = () => {};

	render(){
		const {caption, count} = this.props;

		return (
			<div style={{color: 'red'}}>
				<button onClick={this.onClickButton.bind(this)}>
					Click Me {caption}
				</button>
				<div>Click Out: {count}</div>
			</div>
		)
	}
}

const mapState = (state, ownProps) => {
  return {count: state[ownProps.caption], ...ownProps};
}

const mapDispatch = (dispatch, ownProps) => {
  const props = {...ownProps};

  props.increment = () => {
    dispatch(increment(ownProps.caption));
  }

  return props;
}

export default connect(mapState, mapDispatch)(ClickCounter);