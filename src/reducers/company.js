const INITIAL_STATE = {
	name: '10up'
}

export default ( state = INITIAL_STATE, action ) => {
	switch ( action.type ) {
		case 'SET_NAME':
			return {
				...state, // Reducers must always return a copy of state, never modify existing state.
				name: action.name || INITIAL_STATE.name // We can fall back to initial state in case the payload is invalid.
			}
		default:
			return state // Always fall back to current state if receiving an unknown action type.
	}
}