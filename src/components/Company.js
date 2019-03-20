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
		e.preventDefault();

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
		} );

		this.list.focus();
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

				<p>We are <span aria-atomic="true" aria-live="polite" aria-relevant="text" id="year">{ age }</span> years old!</p>

				<button aria-controls="year" onClick={ addYear }>Add Year</button>

				<h2>We are located in the following locations:</h2>

				<ul
					aria-atomic="false"
					aria-live="polite"
					aria-relevant="additions text"
					className="locations"
					id="locale-list"
					ref={( list ) => { this.list = list; }}
					tabindex="-1">
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
					<div>
						<label htmlFor="location-name">Location Name: </label>
						<input
							id="location-name"
							name="location-name"
							onChange={ e => {
								this.setState( { newLocationName: e.target.value } )
							} }
							placeholder="e.g. Boston, MA"
							required
							type="text"
							value={ this.state.newLocationName }
						/>
					</div>
					<div>
						<label htmlFor="map-url">Location Map URL: </label>
						<input
							id="map-url"
							name="map-url"
							placeholder="http://..."
							value={ this.state.newLocationMapUrl }
							onChange={ e => {
								this.setState( { newLocationMapUrl: e.target.value } )
							} }
							required
							type="url"
						/>
					</div>
					<button
						type="submit"
						aria-controls="locale-list"
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
