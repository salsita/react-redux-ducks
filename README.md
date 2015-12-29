# react-redux-ducks

> React supplementary toolset for [redux-ducks](https://github.com/salsita/redux-ducks).

**The package relies on [redux-ducks](https://github.com/salsita/redux-ducks)**

Simple react binding which exposes high order component for connecting ducks reducers and app state portions with the view instance. The package exposes just single named function `connectDucksView`. The only function's argument is React component which will get Component's local app state portion in the global app state. Therefore it's allowed to have many instances of the Component in the view hierarchy. Every instance of the Component will keep its isolated state.

When the view is wrapped two special properties are provided:

* `ducksState` - this holds the specific app state portion for your component instance
* `bindDucksActionCreator` - binds action creator for specific duck component instance

```javascript
import { connectDucksView } from 'react-redux-ducks';

export default connectDucksView(props => (
  <div style={getStyles()}>
    Count: {props.ducksState}<br />
    <button onClick={props.bindDucksActionCreator(increment)}>Increment</button>
  </div>
));
```

## Examples

### Counters

The example demonstrates independent isolated state and action handling per ducks view component instance

![counters](https://zippy.gfycat.com/SevereVigilantAfricanporcupine.gif)

To run counters example:

```
  cd examples/counters
  npm install
  npm start
  open http://localhost:3000
```