import * as ActionTypes from './ActionTypes';

export const increment = (counterCaption) => {
	return {
		type: ActionTypes.INCREMENT,
		counterCaption: counterCaption
	}
};

export const restClickCounter = (counterValue) => {
	return {
		type: ActionTypes.RESETCLICKCOUNTER,
		counterValue: counterValue
	}
};