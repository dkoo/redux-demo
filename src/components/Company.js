import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import our action creators from above.
import { addYear, addLocation } from '../actions'

class Company extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			newLocationName: '',
			newLocationMapUrl: ''
		}
	}

	onAddLocation( e ) {
		e.preventDefault()

		const {
			newLocationName,
			newLocationMapUrl
		} = this.state;

		if ( !newLocationName || !newLocationMapUrl ) {
			return;
		}

		this.props.addLocation( newLocationName, newLocationMapUrl );
		this.setState( {
			newLocationName: '',
			newLocationMapUrl: ''
		} )
	}

	render() {
		// Redux store data and action creators are mapped to component props.
		const {
			age,
			name,
			locations,
			addYear
		} = this.props;

		return (
			<div className="company">
				<h1>Welcome to { name }</h1>

				<p>We are { age } years old!</p>

				<button onClick={ addYear }>Add Year</button>

				<p>We are located in the following locations:</p>

				<ul className="locations">
					{ locations.map( location => {
						return (
							<li key={ location.name }>
								<a href={ location.mapUrl }>{ location.name }</a>
							</li>
						)
					} ) }
				</ul>

				<form
					onSubmit={ this.onAddLocation.bind( this ) }
				>
					<input
						placeholder="Location Name"
						value={ this.state.newLocationName }
						onChange={ e => {
							this.setState( { newLocationName: e.target.value } )
						} }
					/><br />
					<input
						placeholder="Location Map URL"
						value={ this.state.newLocationMapUrl }
						onChange={ e => {
							this.setState( { newLocationMapUrl: e.target.value } )
						} }
					/><br />
					<button
						type="submit"
					>
						Add Location
					</button>
				</form>
			</div>
		)
	}
}

// A function that returns an object mapping Redux state to local props.
const mapStateToProps = state => ( {
	name: state.company.name,
	age: state.info.age,
	locations: state.info.locations
} )

// An object that maps action creators to local props.
const mapDispatchToProps = {
	addYear,
	addLocation
}

export default connect( mapStateToProps, mapDispatchToProps )( Company )