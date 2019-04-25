import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from '../../components/app/index';
import createStore from './store/index';
import reducers from './reducers/index';

import Content from './containers/App/App';

import './index.scss';

// TODO: Clear eslint and Redux devtools extension
/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
ReactDom.render(
    <Provider store={store}>
        <App>
            <Content />
        </App>
    </Provider>,
    document.getElementById('container'),
);
