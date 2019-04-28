import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from '../../components/app/index';
import createStore from './store/index';
import reducers from './reducers/index';

import Content from './containers/App/App';

import './index.scss';

const store = createStore(
    reducers,
);
ReactDom.render(
    <Provider store={store}>
        <App>
            <Content />
        </App>
    </Provider>,
    document.getElementById('container'),
);
