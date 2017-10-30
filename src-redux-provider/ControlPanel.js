import React, { PropTypes, Component } from 'react';
import ClickCounter from './ClickCounter';
//import store from './redux/Store';

class ControlPanel extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      one: 3,
      two: 10
    }
  }

  changeProps = () => {
    this.setState({
      one: 5,
      two: 12
    });
  };

  onChange = () => {
    const getOwnState = this.getOwnState();

    this.setState({
      one: getOwnState['First'],
      two: getOwnState['Second']
    });
  };

  getOwnState = () => {
    return this.context.store.getState();
  };

  componentDidMount = () => { 
    this.onChange();
    this.context.store.subscribe(this.onChange);
  };

  componentWillUnmount = () => {
    this.context.store.unsubscribe(this.onChange);
  };

  render() {
    const {one, two} = this.state;

    return (
      <div className="control-panel">
        <button onClick={this.changeProps}>change props</button>
        <b>{one+two}</b>
        <ClickCounter caption="First" />
        <ClickCounter caption="Second" />
      </div>
    );
  }
}

ControlPanel.contextTypes = {
  store: PropTypes.object
};

export default ControlPanel;
