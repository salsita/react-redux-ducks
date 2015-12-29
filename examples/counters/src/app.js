import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { buildDucksReducer } from 'redux-ducks';

import counterReducer from './counter';
import Counter from './counterView';

const unitReducer = appState => appState;
const rootReducer = buildDucksReducer(unitReducer)(counterReducer);
const store = createStore(rootReducer);

const Root = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <Counter />
    </div>
  </Provider>
);

render(<Root />, document.getElementById('app-root'));
