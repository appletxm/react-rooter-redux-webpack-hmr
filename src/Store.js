import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as todoReducer} from './todos';
import {reducer as weatherReducer} from './weather';
import {reducer as testAsyncReducer} from './test-async-redux';
import thunkMiddleWare from './middleware/redux-thunk';

const configureStore = applyMiddleware(thunkMiddleWare)(createStore);
//const configureStore = createStore;

const initState = {
	todos: [
		{
			text: 'First todo',
			completed: false,
			id: 0		
		},
		{
			text: 'Second todo',
			completed: false,
			id: 1
		}
	],
	weather: {
		data: {},
		isFettching: false
	},
	testAsync: {
		data: {}
	}
};

const reducers  = combineReducers({
	todos: todoReducer,
	weather: weatherReducer,
	testAsync: testAsyncReducer
});

const store = configureStore(reducers, initState);

export default store;