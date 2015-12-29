// This is a classical Ducks file

const INCREMENT = 'react-redux-ducks-example-counters/widgets/INCREMENT';

export default function reducer(state = 0, action = {}) {
  switch (action.type) {
  case INCREMENT:
    return state + 1;
  default:
    return state;
  }
}

export function increment() {
  return { type: INCREMENT };
}
