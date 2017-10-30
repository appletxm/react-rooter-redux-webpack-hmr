import {TEST_ASYNC_REDUX} from './actionTypes';

export default (state = {}, action) => {	
	let stateClone = {...state};

	switch(action.type){
		case TEST_ASYNC_REDUX: {
			stateClone.data = action.data;
			return stateClone;
		}
		default: {
			return state;
		}
	}
};