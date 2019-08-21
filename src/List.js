import React from "react"
import ListItem from "./ListItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faChevronLeft,
	faPowerOff
} from "@fortawesome/free-solid-svg-icons"

export default class List extends React.Component {
	state = {
		radios: null,
		currentStation: null,
		error: null
	}

	componentDidMount() {
		fetch("https://teclead.de/recruiting/radios")
			.then(response => response.json())
			.catch(error => {
				this.setState({
					error
				})
			})
			.then(json => {
				const { radios } = json
				this.setState({ radios })
			})
	}

	setCurrentStation = currentStation => {
		this.setState({ currentStation })
	}

	resetStation = () => {
		this.setState({ currentStation: null })
	}

	render() {
		// fix the conditional rendering to cover error case
		return (
			<main>
				<section id="radio-header">
					{this.state.error ? (
						<p>We're sorry, an error has occured: {this.state.error.message}</p>
					) : (
						<div id="radio-header-container">
							<FontAwesomeIcon onClick={this.resetStation} icon={faChevronLeft} />
							<h2>STATIONS</h2>
							<FontAwesomeIcon icon={faPowerOff} />
						</div>
					)}
				</section>
				<section id="radio">
					{this.state.radios !== null
						? this.state.radios.map((radio, i) => (
								<ListItem
									key={i}
									radio={radio}
									setCurrentStation={this.setCurrentStation}
									currentStation={this.state.currentStation}
								/>
						  ))
						: null}
				</section>

				<div id="currently-playing">
					{this.state.currentStation !== null && (
						<div id="currently-playing-container">
							<span id="cp1">CURRENTLY PLAYING</span> <br />
							<span id="cp2">{this.state.currentStation.name} FM</span>
						</div>
					)}
				</div>
			</main>
		)
	}
}
