import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindDucksActionCreator, mountDucksState, unmountDucksState } from 'redux-ducks';

const getRandomString = () => Math.random().toString(36).substring(7);

const connectDucksView = Embeddable => connect(appState => ({ducks: appState.ducks}))(class DuckView extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    ducks: PropTypes.object.isRequired
  }

  componentWillMount() {
    const duckId = getRandomString();
    this.setState({duckId});

    const boundMountingAction = bindDucksActionCreator(mountDucksState, this.props.dispatch, duckId);
    boundMountingAction();
  }

  componentWillUnmount() {
    this.props.dispatch(unmountDucksState(this.state.duckId));
  }

  bindDucksActionCreator(actionCreator) {
    return bindDucksActionCreator(actionCreator, this.props.dispatch, this.state.duckId);
  }

  render() {
    return (
      <Embeddable
        {...this.props}
        ducksState={this.props.ducks[this.state.duckId]}
        bindDucksActionCreator={::this.bindDucksActionCreator} />
    );
  }
});

export {
  connectDucksView
};
