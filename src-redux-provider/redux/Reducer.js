import * as ActionTypes from '../flux/ActionTypes';

export default (state, action) => {
	const {counterCaption} = action;

	switch(action.type) {
		case ActionTypes.INCREMENT:
			return {
				...state,
				[counterCaption]: state[counterCaption] + 1
			}
		default: 
			return state;
	}
}