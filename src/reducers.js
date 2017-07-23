import { combineReducers } from 'redux';
import galleryReducer from './gallery/reducers/index';

const rootReducers = combineReducers({
    galleries: galleryReducer
});

export default rootReducers;