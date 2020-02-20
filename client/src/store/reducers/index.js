import {combineReducers} from 'redux';
import itemReducer from './itemsReducer';

const rootReducer = combineReducers({
    item: itemReducer,
    
})

export default rootReducer;