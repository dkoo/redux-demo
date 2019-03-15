// Action creators must always return actions as an object.
export const addYear = () => ( {
	type: 'ADD_YEAR' // Actions must always have a type string.
} )

export const addLocation = ( locationName, locationMapUrl ) => ( {
	type: 'ADD_LOCATION',
	name: locationName, // Data payload can be appended as one or more additional properties.
	mapUrl: locationMapUrl
} )