import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import GalleryList from './gallery/components/gallery_list';
import reducers from './reducers';
import './index.css';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <GalleryList />
    </Provider>,
    document.getElementById('root')
);
