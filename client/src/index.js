import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//find all info
import { Provider } from 'react-redux'
// createStore has depreciated so we use
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));


