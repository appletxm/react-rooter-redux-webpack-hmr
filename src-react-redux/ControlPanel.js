import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import ClickCounter from './ClickCounter';
//import store from './redux/Store';
import * as Actions from './redux/Actions';

const clickCounterNewValue = {
  First: 5,
  Second: 12
};

class ControlPanel extends Component {
  constructor(){
    super(...arguments);
  }

  changeProps = () => {
    this.props.restClickCounter(clickCounterNewValue);
  };

  /*onChange = () => {
    const getOwnState = this.getOwnState();

    this.setState({
      one: getOwnState['First'],
      two: getOwnState['Second']
    });
  };*/

  /*getOwnState = () => {
    //return this.context.store.getState();
    return {
      First: 0,
      Second: 0
    }
  };*/

  componentDidMount = () => { 
    //this.onChange();
    //this.context.store.subscribe(this.onChange);
  };

  componentWillUnmount = () => {
    //this.context.store.unsubscribe(this.onChange);
  };

  render() {
    const {First, Second} = this.props;

    return (
      <div className="control-panel">
        <button onClick={this.changeProps}>change props</button>
        <b>{First + Second}</b>
        <ClickCounter caption="First" />
        <ClickCounter caption="Second" />
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  //console.info('########1########');
  //console.info(state, ownProps)
  return {...state, ...ownProps};
}

const mapDispatch = (dispatch, ownProps) => {
  //console.info('########2########');
  //console.info(dispatch, ownProps)
  const props = {...ownProps};

  props.restClickCounter = (clickCounterNewValue) => {
    dispatch(Actions.restClickCounter(clickCounterNewValue));
  }

  return props;
}

export default connect(mapState, mapDispatch)(ControlPanel);
