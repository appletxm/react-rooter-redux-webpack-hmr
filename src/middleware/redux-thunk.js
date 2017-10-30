function createThunkMiddleWare(extraArgument){
	return ({dispatch, getState}) => (next) => (action) => {
		if(typeof action === 'function'){
			return action(dispatch, getState, extraArgument);
		}

		return next(action);
	}
}

const thunk = createThunkMiddleWare();

export default thunk;