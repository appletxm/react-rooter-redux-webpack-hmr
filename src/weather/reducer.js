import {WEATHER_GET_START, WEATHER_GET_FAILED, WEATHER_GET_SUCESS, CHANGE_CITY} from './actionTypes';

export default (state = {}, action) => {	
	let stateClone = {...state};

	switch(action.type){
		case WEATHER_GET_START: {
			stateClone.isFettching = true;
			return stateClone;
		}
		case WEATHER_GET_FAILED: {
			stateClone.isFettching = false;
			stateClone.data = {};
			return stateClone;
		}
		case WEATHER_GET_SUCESS: {
			stateClone.isFettching = false;
			stateClone.data = action.weather;
			return stateClone;
		}
		case CHANGE_CITY: {
			return state;
		}
		default: {
			return state;
		}
	}
};