import * as ActionTypes from '../flux/ActionTypes';
export const increment = (counterCaption) => {
	return {
		type: ActionTypes.INCREMENT,
		counterCaption: counterCaption
	}
};