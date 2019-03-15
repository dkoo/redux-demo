const INITIAL_STATE = {
	age: 0,
	locations: [
		{
			name: 'Roseville, CA',
			mapUrl: 'https://goo.gl/maps/9kKRAvb7BGr'
		}
	]
}

export default ( state = INITIAL_STATE, action ) => {
	switch ( action.type ) {
		case 'ADD_YEAR':
			return {
				...state,
				age: state.age + 1
			}
		case 'ADD_LOCATION':
			return {
				...state,

				// Again, always COPY state data, don't modify! Using `locations.push()` is tempting here, but would end up mutating the existing state and causing problems with re-rendering your components.
				locations: [
					...state.locations,
					{
						name: action.name,
						mapUrl: action.mapUrl
					}
				]
			}
		default:
			return state
	}
}