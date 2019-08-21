import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faPlusCircle,
	faMinusCircle
} from "@fortawesome/free-solid-svg-icons"

const ListItem = props => {
	const { radio, setCurrentStation, currentStation } = props

	return (
		<li className="list-item">
			<div className="list-item-btn" onClick={() => setCurrentStation(radio)}>
				<span>{radio.name} FM</span> <span>{radio.frequency}</span>
			</div>
			<div className="radio-view">
				{currentStation === radio && (
					<div className="radio-view-container">
						<FontAwesomeIcon icon={faMinusCircle} />
						<img
							alt={radio.name}
							src={`https://dummyimage.com/400x400/912f56/eaf2ef&text=${
								radio.name
							}`}
						/>
						<FontAwesomeIcon icon={faPlusCircle} />
					</div>
				)}
			</div>
		</li>
	)
}

export default ListItem
