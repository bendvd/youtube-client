import { combineReducers } from 'redux';
import youtubeReducer from './youtube/reducer';

const rootReducer = combineReducers({
    youtube: youtubeReducer,
});

export default rootReducer;