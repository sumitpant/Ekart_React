import {createStore , applyMiddleware , combineReducers} from 'redux';
import {reducer} from './reducer'
import {asyncreducer} from './reduceraync'
import  thunkMiddleware  from 'redux-thunk';


const reduce =combineReducers({
    reducer,
    asyncreducer
})
export const store = createStore( reduce , applyMiddleware(thunkMiddleware) );


