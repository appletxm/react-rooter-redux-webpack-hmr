import * as ActionTypes from './ActionTypes';

export default (state, action) => {
	switch(action.type) {
		case ActionTypes.INCREMENT:
			const {counterCaption} = action;
			return {
				...state,
				[counterCaption]: state[counterCaption] + 1
			}
		case ActionTypes.RESETCLICKCOUNTER:
			const {counterValue} = action;
			return {
				...state,
				...counterValue
			}
		default: 
			return state;
	}
}