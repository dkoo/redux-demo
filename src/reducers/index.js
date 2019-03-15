import { combineReducers } from 'redux'
import company from './company'
import info from './info'

export default combineReducers( {
	company,
	info
} )