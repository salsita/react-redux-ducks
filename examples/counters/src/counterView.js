import React from 'react';
import { connectDucksView } from 'react-redux-ducks';

import { increment } from './counter';

const getStyles = () => ({
  width: '200px',
  border: '1px solid #000',
  marginBottom: '10px'
});

export default connectDucksView(props => (
  <div style={getStyles()}>
    Count: {props.ducksState}<br />
    <button onClick={props.bindDucksActionCreator(increment)}>Increment</button>
  </div>
));
